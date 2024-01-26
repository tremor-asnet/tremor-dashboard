// Components
import { HeaderCellContents } from "@/components";
import { TableHead, TableHeaderCell, TableRow } from "@tremor/react";

// Types
import { ColumnType } from "@/types";

interface DataTableHeaderProps<T> {
  columns: ColumnType<T>[];
}

const DataGridHeader = <T,>({ columns }: DataTableHeaderProps<T>) => (
  <TableHead>
    <TableRow>
      {columns.map(column => (
        <TableHeaderCell
          key={column.key}
          className="px-6 py-2 text-[10.4px] leading-[17px] dark:text-white tracking-[0.2px] font-bold opacity-70 uppercase">
          <HeaderCellContents title={column.title} />
        </TableHeaderCell>
      ))}
    </TableRow>
  </TableHead>
);

export default DataGridHeader;