import type {Table} from "../types/sharedTypes";
interface TableProps {
    data: Table; 
}
export function DataTable({ data }: TableProps)
{
    return (
        <div>
            <table border={1} cellSpacing={0} cellPadding={5} style={{ width: '100%'}}>
                <thead>
                    <tr>
                        {data.header.map((h) => (
                            <th key={String(h.key)}>
                                {h.headerText}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.rows.map((row) => (
                        <tr key={row.id}>
                            {row.columns.map((col) => (
                                <td key={col.data}>
                                    {col.data instanceof Date ? col.data.toLocaleString() : String(col.data)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}