// Components
import { HeaderCellContents } from "@/components";
import { TableHead, TableHeaderCell, TableRow } from "@tremor/react";

// Types
import { ColumnType } from "@/types";

interface DataTableHeaderProps<T> {
  columns: ColumnType<T>[];
  onHeaderClick: (column: ColumnType<T>) => void;
  isSort?: string;
}

const DataGridHeader = <T,>({
  columns,
  onHeaderClick,
  isSort,
}: DataTableHeaderProps<T>) => (
  <TableHead>
    <TableRow>
      {columns.map(column => (
        <TableHeaderCell
          onClick={() => onHeaderClick(column)}
          key={column.key}
          className="px-6 py-2 text-[10.4px] leading-[17px] dark:text-white tracking-[0.2px] font-bold opacity-70 uppercase">
          <HeaderCellContents title={column.title} isSort={isSort} />
        </TableHeaderCell>
      ))}
    </TableRow>
  </TableHead>
);

export default DataGridHeader;
