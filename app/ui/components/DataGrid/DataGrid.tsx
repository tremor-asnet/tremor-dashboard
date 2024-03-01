"use client";

import { Card, Table } from "@tremor/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Components

import {
  DataGridBody,
  DataGridHeader,
  LoadingIndicator,
  Pagination,
} from "@/ui/components";

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
  defaultCurrentPage?: number;
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
  defaultCurrentPage = 1,
}: DataTableProps<T>) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);

  const [loading, setLoading] = useState(false);

  const [tableData, handleSorting] = useSortableTable<T>(data);

  // Handle page in pagination changed
  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);

    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", page.toString());
    }

    replace(`${pathname}?${params.toString()}`);
    setCurrentPage(page);
  };

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
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </Card>
  );
};

export default DataGrid;
