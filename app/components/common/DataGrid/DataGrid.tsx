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
import { SortItem } from "@/components/Table/TableProduct/TableProduct";

// Hooks
import { useEffect, useMemo, useState } from "react";

interface DataTableProps<T> {
  data: T[];
  columns: ColumnType<T>[];
  pageSize?: number;
  sortItem?: SortItem;
  filterBy: string;
  keyword: string;
  onHeaderClick: (column: ColumnType<T>) => void;
}

const DataGrid = <T,>({
  data,
  columns,
  pageSize = 10,
  sortItem,
  filterBy,
  keyword,
  onHeaderClick,
}: DataTableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * pageSize;
  //   const lastPageIndex = firstPageIndex + pageSize;
  //   return data.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  // FIXME: Check later
  const firstPageIndex = (currentPage - 1) * pageSize;
  const lastPageIndex = firstPageIndex + pageSize;
  const currentTableData = data.slice(firstPageIndex, lastPageIndex);

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
    <Card className="p-0 border-none ring-0 dark:bg-dark-tremor-primary overflow-x-auto">
      <div className="flex flex-col items-start justify-start my-2">
        <Table className="w-full">
          <DataGridHeader
            columns={columns}
            onHeaderClick={onHeaderClick}
            sortItem={sortItem}
          />
          <DataGridBody columns={columns} data={currentTableData} />
        </Table>
        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          totalCount={data.length}
          onPageChange={setCurrentPage}
        />
      </div>
    </Card>
  );
};

export default DataGrid;
