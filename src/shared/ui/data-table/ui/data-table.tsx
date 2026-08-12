import type { RowData } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';

import { useAppTable } from '../hook/useTable';
import type { DataTableProps } from '../model/types';
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow, TableCaption } from '@/shared/ui/table';

export function DataTable<TData extends RowData>({
    data,
    columns,
    isLoading = false,
}: DataTableProps<TData>) {
    const table = useAppTable({
        columns,
        data,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Table>
                      <TableCaption>Операторы</TableCaption>
                        <TableHeader>   
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder ? null : (
                                        <table.FlexRender header={header} />
                                    )}
                                </TableHead>
                            ))}
                            
            </Table>
            <table>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                    style={{ cursor: header.column.getCanSort() ? 'pointer' : undefined }}
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(header.column.columnDef.header, header.getContext())}
                                    {{
                                        asc: ' 🔼',
                                        desc: ' 🔽',
                                    }[header.column.getIsSorted() as string] ?? null}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div>
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Назад
                </button>
                <span>
                    Страница {table.getState().pagination.pageIndex + 1} из{' '}
                    {table.getPageCount()}
                </span>
                <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                    Вперёд
                </button>
            </div>
        </div>
    );
}