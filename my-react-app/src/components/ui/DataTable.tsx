import type { Table } from "../types/allTypes";

interface TableProps {
    data: Table;
}
export function DataTable({ data }: TableProps) {
    return (
        <div>
            <table border={1} cellSpacing={0} cellPadding={5} style={{ width: '100%' }}>
                <thead>
                    <tr>
                        {data.header.map((h) => (
                            <th key={`th-${String(h.key)}`}>
                                {h.headerText}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.rows.map((row) => (
                        <tr key={`tr-${row.id}`}>
                            <td key={row.id}>
                                {row.id}
                            </td>
                            {row.columns.map((col, index) => (
                                <td key={`col-${row.id}-${index}`}>
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