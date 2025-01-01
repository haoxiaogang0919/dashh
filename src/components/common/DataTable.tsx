'use client';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
} from '@tanstack/react-table';
import { useState, useEffect, useMemo } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/common/Table';
import { cn } from '@/lib/utils';
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';
import { useTableStore } from '@/store/tableStore';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}



export function DataTable<TData, TValue>({
  columns,
  data
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const { columnConfigs, setColumnConfigs } = useTableStore();

  // 初始化列配置
  useEffect(() => {
    if (!columnConfigs.length) {
      const initialConfigs = columns.map((col) => ({
        id: String((col as any).accessorKey || col.id),
        label: String(col.header || (col as any).accessorKey || col.id),
        visible: true,
      }));
      setColumnConfigs(initialConfigs);
    }
  }, [columns]);

  // 根据配置重新排序和过滤列
  const orderedVisibleColumns = useMemo(() => {
    if (!columnConfigs.length) return columns;
    
    // 创建列映射以便快速查找
    const columnMap = new Map(
      columns.map(col => [
        String((col as any).accessorKey || col.id),
        col
      ])
    );

    // 按照 columnConfigs 的顺序返回可见列
    return columnConfigs
      .filter(config => config.visible)
      .map(config => columnMap.get(config.id))
      .filter((col): col is ColumnDef<TData, TValue> => col !== undefined);
  }, [columns, columnConfigs]);

  
  // 渲染排序图标
  const renderSortIcon = (sortDirection: false | 'asc' | 'desc') => {
    if (!sortDirection) return <ArrowUpDown className="h-4 w-4 text-muted-foreground" />;
    if (sortDirection === 'asc') return <ArrowUp className="h-4 w-4" />;
    return <ArrowDown className="h-4 w-4" />;
  };

  const table = useReactTable({
    data,
    columns: orderedVisibleColumns,  // 使用重新排序后的列
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: { sorting },
  });

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const canSort = header.column.getCanSort();
                const sortDirection = header.column.getIsSorted();
                
                return (
                  <TableHead 
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className={cn("relative", canSort && "cursor-pointer select-none")}
                  >
                    <div className="flex items-center gap-1">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {canSort && renderSortIcon(sortDirection)}
                    </div>
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} className="hover:bg-muted/50">
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default DataTable;