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

// Constants
import { DIRECTION } from "@/constants/common";

// Helpers
import { sortArrayByKey } from "@/helpers";

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
  const [sort, setSort] = useState<SortItem>({
    key: "",
    direction: DIRECTION.ASC,
  });

  // Handle sort by key column
  const handleHeaderClick = (keyColumn: string) => {
    // Define the sorting direction as either "DESC" or "ASC".
    let sortDirection = sort.direction;

    if (keyColumn === sort.key) {
      // Revert direction onClick same column
      if (sortDirection === DIRECTION.ASC) {
        sortDirection = DIRECTION.DESC;
      } else {
        sortDirection = DIRECTION.ASC;
      }
    } else {
      sortDirection = DIRECTION.DESC;
    }

    setSort(prev => ({
      ...prev,
      key: keyColumn,
      direction: sortDirection,
    }));
  };

  // The array has been sorted
  const sortedArray = sortArrayByKey<T>(
    data,
    sort.key as keyof T,
    sort.direction,
  );

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return sortedArray?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, sortedArray, pageSize]);

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
            onHeaderClick={handleHeaderClick}
            sortField={sort}
            hasSort={hasSort}
          />
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
