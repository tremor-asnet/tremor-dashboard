"use client";

import { useState, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Components
import { HeaderCellContents } from "@/ui/components";
import { TableHead, TableHeaderCell, TableRow } from "@tremor/react";

// Types
import { ColumnType } from "@/types";

// Constants
import { DIRECTION } from "@/constants/common";

interface DataTableHeaderProps<T> {
  columns: ColumnType<T>[];
}

const DataGridHeader = <T,>({ columns }: DataTableHeaderProps<T>) => {
  const [sortField, setSortField] = useState<string>("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const [order, setOrder] = useState<string>("");

  const handleSortingChange = useCallback((key: string, sortable: boolean) => {
    if (!sortable) return;

    setSortField(key);

    const sortBy = params.get("sortBy");

    params.set("page", "1");
    if (sortBy?.includes("-") || sortBy === null) {
      params.set("sortBy", key);
      setOrder(DIRECTION.ASC);
    } else {
      params.set("sortBy", `-${key}`);
      setOrder(DIRECTION.DESC);
    }

    replace(`${pathname}?${params.toString()}`);
  }, []);

  return (
    <TableHead>
      <TableRow>
        {columns.map(({ key, title, sortable }) => {
          const handleClick = () => {
            handleSortingChange(key, !!sortable);
          };

          return (
            <TableHeaderCell
              onClick={handleClick}
              key={key}
              className="px-6 py-2 text-[10.4px] leading-[17px] dark:text-white tracking-[0.2px] font-bold opacity-70 uppercase cursor-pointer print:!text-primary dark:print:!text-primary dark:print:opacity-100">
              <HeaderCellContents
                title={title}
                keyColumn={key}
                sortKey={sortField}
                sortDirection={order}
                sortable={sortable}
              />
            </TableHeaderCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default DataGridHeader;
