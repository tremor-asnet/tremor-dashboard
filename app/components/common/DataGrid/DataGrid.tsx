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

interface DataTableProps<T> {
  data: T[];
  columns: ColumnType<T>[];
  pageSize?: number;
  filterBy: string;
  keyword: string;
  className?: string;
  hasPagination?: boolean;
  hasSort?: boolean;
}

const DataGrid = <T,>({
  data,
  columns,
  pageSize = 10,
  filterBy,
  keyword,
  className = "",
  hasPagination = true,
  hasSort = true,
}: DataTableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  useEffect(() => {
    setLoading(true);

    // Delay to check show loading
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, [filterBy, keyword]);

  if (loading === true) {
    return (
      <LoadingIndicator
        additionalClass="flex justify-center items-center"
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
          <DataGridHeader columns={columns} hasSort={hasSort} />
          <DataGridBody columns={columns} data={currentTableData} />
        </Table>
        {hasPagination && (
          <Pagination
            currentPage={currentPage}
            pageSize={pageSize}
            totalCount={data.length}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </Card>
  );
};

export default DataGrid;
