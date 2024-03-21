"use client";

import { useState } from "react";
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
  const [sortType, setSortType] = useState<string>("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handleSortingChange = (key: string, isSortable: boolean) => {
    // Not support sort
    if (!isSortable) return;

    // Set key and type sort
    setSortField(key);

    const DEFAULT_SORT_BY = "-createdAt";
    const sortByParam = params.get("sortBy") ?? DEFAULT_SORT_BY;

    if (sortByParam.startsWith("-")) {
      console.log(params.get("page"));

      params.set("sortBy", key);
      setSortType(DIRECTION.ASC);
    } else {
      params.set("sortBy", `-${key}`);
      console.log(params.get("page"));
      setSortType(DIRECTION.DESC);
    }

    // Update url param
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map(({ key, title, isSortable }) => {
          const handleClick = () => {
            handleSortingChange(key, !!isSortable);
          };

          return (
            <TableHeaderCell
              onClick={handleClick}
              key={key}
              className="px-6 py-2 text-[10.4px] leading-[17px] dark:text-white tracking-[0.2px] font-bold opacity-70 uppercase cursor-pointer print:!text-primary dark:print:!text-primary dark:print:opacity-100">
              <HeaderCellContents
                title={title}
                keyColumn={key}
                sortField={sortField}
                sortType={sortType}
                isSortable={isSortable}
              />
            </TableHeaderCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default DataGridHeader;
