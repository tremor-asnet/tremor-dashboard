"use client";

import { useState } from "react";

// Components
import { HeaderCellContents } from "@/ui/components";
import { TableHead, TableHeaderCell, TableRow } from "@tremor/react";

// Types
import { ColumnType } from "@/types";

// Constants
import { DIRECTION } from "@/constants/common";

interface DataTableHeaderProps<T> {
  columns: ColumnType<T>[];
  handleSorting: (sortField: string, sortOrder: string) => void;
}

const DataGridHeader = <T,>({
  columns,
  handleSorting,
}: DataTableHeaderProps<T>) => {
  const [sortField, setSortField] = useState<string>("");
  const [order, setOrder] = useState<string>(DIRECTION.ASC);

  const handleSortingChange = (key: string) => {
    const sortOrder =
      key === sortField && order === DIRECTION.ASC
        ? DIRECTION.DESC
        : DIRECTION.ASC;

    setSortField(key);
    setOrder(sortOrder);

    handleSorting(key, sortOrder);
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map(({ key, title, sortable }) => {
          // The column that has sortable set to true will execute handleSortingChange function
          const handleHeaderClick = () => {
            sortable ? handleSortingChange(key) : null;
          };

          return (
            <TableHeaderCell
              onClick={handleHeaderClick}
              key={key}
              className="px-6 py-2 text-[10.4px] leading-[17px] dark:text-white tracking-[0.2px] font-bold opacity-70 uppercase cursor-pointer dark:print:!text-lighter dark:print:opacity-100">
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
