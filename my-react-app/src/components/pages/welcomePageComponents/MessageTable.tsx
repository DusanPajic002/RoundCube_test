import { useEffect, useState } from "react";
import type { Message, MessageTableResponse, Table, TableHeader, TableRaw } from "../../types/allTypes";
import { getAllMessages } from "../../../api/severApi";
import { DataTable } from "../../ui/DataTable";
import { Pagination } from "../../ui/TablePagination";


export default function MessageTable() {

    const [headerColumns] = useState<string[]>(["*","MessageID", "User", "Message", "Time"]);
    const [pageSizeList] = useState<number[]>([5, 10, 20]);

    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(pageSizeList[1]);
    const [totalPages, setTotalPages] = useState<number>(1);


    useEffect(() => {
        fetchMessages();
    }, [currentPage, pageSize]);

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
    

    const tableHeaders: TableHeader[] = headerColumns.map((col) => ({
        key: col.toLowerCase(),
        headerText: col,
    }));

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

    const table: Table = {
        header: tableHeaders,
        rows: raws,
        pageNumber: currentPage,
        pageSize: pageSize,
        totalData: messages.length,
        totalPages: totalPages,
    }

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