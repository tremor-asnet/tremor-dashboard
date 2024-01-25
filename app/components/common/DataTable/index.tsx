"use client";

// Components
import { ColumnType } from "@/types";
import { Card, Table } from "@tremor/react";
import DataTableHeader from "./DataTableHeader";
import DataTableBody from "./DataTableBody";
import Pagination from "../Pagination";

// Hooks
import { useMemo, useState } from "react";

interface DataTableProps<T> {
  data: T[];
  columns: ColumnType<T>[];
  pageSize?: number;
}

const DataTable = <T,>({ data, columns, pageSize = 10 }: DataTableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <Card className="p-0 border-none ring-0 dark:bg-dark-tremor-primary overflow-x-auto">
      <div className="flex flex-col items-start justify-start my-2">
        <Table className="w-full">
          <DataTableHeader columns={columns} />
          <DataTableBody columns={columns} data={currentTableData} />
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

export default DataTable;
