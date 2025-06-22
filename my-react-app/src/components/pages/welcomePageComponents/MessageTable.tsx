import { useEffect, useState } from "react";
import type { Message, MessageTableResponse, Table, TableHeader, TableRaw } from "../../types/allTypes";
import { getAllMessages } from "../../../api/severApi";
import { DataTable } from "../../ui/DataTable";
import { Pagination } from "../../ui/TablePagination";


export default function MessageTable() {

    // Define the header columns for the data table
    const [headerColumns] = useState<string[]>(["*","MessageID", "User", "Message", "Time"]);
    // Define the list of page sizes available for pagination
    const [pageSizeList] = useState<number[]>([5, 10, 20]);
    // State to manage the list of messages
    const [messages, setMessages] = useState<Message[]>([]);
    // State to manage loading state
    const [loading, setLoading] = useState<boolean>(false);
    // State to manage any error that occurs during data fetching
    const [error, setError] = useState<string | null>(null);
    // State to manage the current page number
    const [currentPage, setCurrentPage] = useState<number>(1);
    // State to manage the number of items per page
    const [pageSize, setPageSize] = useState<number>(pageSizeList[1]);
    // State to manage the total number of pages
    const [totalPages, setTotalPages] = useState<number>(1);


    useEffect(() => {
        fetchMessages();
    }, [currentPage, pageSize]);

    // Function to fetch messages from the server
    const fetchMessages = async () => { 
        setLoading(true);
        setError(null);
        try {
            const response: MessageTableResponse = await getAllMessages(currentPage, pageSize); 
            setMessages(response.messages? response.messages : []);
            setTotalPages(response.totalPages);
        } catch (err) { 
            setError("Failed to fetch messages");
        } finally {
            setLoading(false);
        }
    }
    

    // Create table headers based on the header columns
    const tableHeaders: TableHeader[] = headerColumns.map((col) => ({
        key: col.toLowerCase(),
        headerText: col,
    }));

    // Create table rows from the messages data
    const raws: TableRaw[] = messages.map((message, i) => {
        const id = ((currentPage - 1) * pageSize + i + 1).toString();
        const columns = [ 
            { data: message.id },
            { data: message.user },
            { data: message.message },
            { data: new Date(message.createdAt).toLocaleString() },
        ];
        return { id, columns };
    });

    // Create the table object to be passed to the DataTable component
    const table: Table = {
        header: tableHeaders,
        rows: raws,
        pageNumber: currentPage,
        pageSize: pageSize,
        totalData: messages.length,
        totalPages: totalPages,
    }

    // Showing error message
    if (error !== null) return <h1>{error}</h1>;

    return (
        <div>
            {loading ? <p>Loading...</p> :
                <div>
                    <div >
                    <DataTable 
                    key={`${currentPage}-${pageSize}`} 
                    data={table} 
                    />
                </div>
                </div>
                
            }
            <Pagination 
                table = {table}
                currentPage = {currentPage}
                totalPages = {totalPages}
                onPageChange = {setCurrentPage}
                pageSize = {pageSize}
                pageSizeList = {pageSizeList}
                onPageSizeChange = {(size) => {
                    setPageSize(size);
                    setCurrentPage(1);
                }}
            />
        </div>
    );
}