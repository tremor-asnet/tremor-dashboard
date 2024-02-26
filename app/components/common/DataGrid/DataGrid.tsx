"use client";

import { Card, Table } from "@tremor/react";

// Components
import {
  Pagination,
  DataGridHeader,
  DataGridBody,
  LoadingIndicator,
} from "@/components";

// Types
import { ColumnType } from "@/types";

// Hooks
import { useEffect, useMemo, useState } from "react";

// Helpers
import { useSortableTable } from "@/hooks/useSortableTable";

interface DataTableProps<T> {
  data: T[];
  columns: ColumnType<T>[];
  pageSize?: number;
  filterBy: string;
  keyword: string;
  className?: string;
  hasPagination?: boolean;
  currentPageNumber?: number;
  total?: number;
  onPageChange?: (page: number) => void;
}

const DataGrid = <T,>({
  data,
  columns,
  pageSize = 10,
  filterBy,
  keyword,
  className = "",
  hasPagination = true,
  total,
  currentPageNumber,
  onPageChange,
}: DataTableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [tableData, handleSorting] = useSortableTable<T>(data);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    // Check if tableData is an array before slicing
    let dataSorted: T[] = [];
    if (Array.isArray(tableData)) {
      dataSorted = tableData.slice(firstPageIndex, lastPageIndex);
    }

    return dataSorted;
  }, [currentPage, tableData, pageSize]);

  useEffect(() => {
    const column = columns.find(item => item.sortbyOrder);

    if (column) {
      handleSorting(column.key, column.sortbyOrder);
    }
  }, [columns, handleSorting]);

  useEffect(() => {
    setLoading(true);

    // Delay to check show loading
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, [filterBy, keyword, currentPage, pageSize]);

  if (loading) {
    return (
      <LoadingIndicator
        additionalClass="min-h-[500px] flex justify-center items-center"
        width={8}
        height={8}
        isFullWidth={false}
        fillColor="river-bed-500"
      />
    );
  }

  return (
    <Card
      className={`p-0 border-none ring-0 dark:bg-dark-tremor-primary overflow-x-auto ${className}`}>
      <div className="flex flex-col items-start justify-start my-2">
        <Table className="w-full">
          <DataGridHeader
            columns={columns}
            handleSorting={
              handleSorting as (sortField: string, sortOrder: string) => void
            }
          />
          <DataGridBody columns={columns} data={currentTableData} />
        </Table>
        {hasPagination && (
          <Pagination
            currentPage={currentPageNumber!}
            pageSize={pageSize}
            totalCount={total!}
            onPageChange={onPageChange!}
          />
        )}
      </div>
    </Card>
  );
};

export default DataGrid;
