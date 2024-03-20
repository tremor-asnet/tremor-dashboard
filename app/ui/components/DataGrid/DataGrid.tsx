"use client";

import { Card, Table, TableBody, TableCell, TableRow } from "@tremor/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Hooks
import { useEffect, useState, useTransition } from "react";

// Types
import { ColumnType } from "@/types";

// Components
import {
  DataGridBody,
  DataGridHeader,
  LoadingIndicator,
  Pagination,
} from "@/ui/components";

interface DataTableProps<T> {
  data: T[];
  columns: ColumnType<T>[];
  pageSize?: number;
  className?: string;
  hasPagination?: boolean;
  currentPageNumber?: number;
  total?: number;
  disableLoading?: boolean;
}

const DataGrid = <T,>({
  data,
  columns,
  pageSize = 10,
  className = "",
  hasPagination = true,
  total,
  currentPageNumber = 1,
  disableLoading = false,
}: DataTableProps<T>) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const [currentPage, setCurrentPage] = useState(currentPageNumber);

  const [loading, setLoading] = useState(false);

  let [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (isPending) return;

    // THIS CODE WILL RUN AFTER THE SERVER ACTION
    setLoading(false);
  }, [isPending]);

  // Handle page in pagination changed
  const handlePageChange = (page: number) => {
    startTransition(() => {
      setLoading(true);
    });

    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", page.toString());
    }
    const newFullPathname = `${pathname}?${params.toString()}`;
    replace(newFullPathname);
    setCurrentPage(page);
  };

  return (
    <Card
      className={`p-0 border-none ring-0 dark:bg-dark-tremor-primary overflow-x-auto ${className}`}>
      <div className="flex flex-col items-start justify-start my-2">
        <Table className="w-full">
          <DataGridHeader columns={columns} />
          {(loading || isPending) && !disableLoading ? (
            <TableBody>
              <TableRow>
                <TableCell colSpan={6}>
                  <LoadingIndicator
                    additionalClass="min-h-[500px] flex justify-center items-center"
                    width={8}
                    height={8}
                    isFullWidth={false}
                    fillColor="river-bed-500"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <DataGridBody columns={columns} data={data} />
          )}
        </Table>
        {hasPagination && (
          <Pagination
            currentPage={currentPage}
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
