import { useEffect, useState } from "react";
import type { Message, MessageTableResponse, Table, TableHeader, TableRaw } from "../../types/sharedTypes";
import { getAllMessages } from "../../api/severApi";
import { DataTable } from "../../UI/DataTable";


export default function MessageTable() {

    const [messages, setMessages] = useState<Message[]>([]);
    const [headerColumns, setHeaderColumns] = useState<string[]>(["MessageID", "User", "Message", "Time"]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [totalPages, setTotalPages] = useState<number>(1);


    useEffect(() => {
        setMessages([{ id: "3", name: "Charlie", message: "Good morning!", time: new Date() }]);
        //fetchMessages();
    }, [currentPage, pageSize]);


    const fetchMessages = async () => {
        console.log("Fetching portfolio data");
        setLoading(true);
        setError(null);
        try {
            const response: MessageTableResponse = await getAllMessages(currentPage, pageSize);
            setMessages(response.messages);
            setTotalPages(response.totalPages);
            console.log("Fetched messages:", response.messages);
        } catch (err) {
            console.log(err);
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
            { data: message.name },
            { data: message.message },
            { data: new Date(message.time).toLocaleString() },
        ];
        return { id, columns };
    });

    const tabela: Table = {
        header: tableHeaders,
        rows: raws,
    }

    if (error !== null) return <h1>{error}</h1>;

    return (
        <div>
            {loading ? <p>Loading...</p> :
                <div >
                    <DataTable key={`${currentPage}-${pageSize}`} {...tabela} />
                </div>
            }
        </div>
    );
}