import type { Table } from "../types/sharedTypes";

interface PaginationProps {
    table: Table;
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    pageSize: number;
    pageSizeList?: number[];
    onPageSizeChange: (size: number) => void;
}

export function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    pageSize,
    pageSizeList,
    onPageSizeChange,
}: PaginationProps) {
    return (
        <div className="flex items-center">
            <div >
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                >
                    Previous
                </button>

                <span>
                    {currentPage} / {totalPages}
                </span>

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                >
                    Next
                </button>
            </div>

            <div>
                <label>Message list size:</label>
                <select
                    value={pageSize}
                    onChange={(e) => onPageSizeChange(Number(e.target.value))}
                >
                    {pageSizeList?.map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}