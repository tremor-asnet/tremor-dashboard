// Components
import { HeaderCellContents } from "@/components";
import { TableHead, TableHeaderCell, TableRow } from "@tremor/react";

// Types
import { ColumnType } from "@/types";
import { SortItem } from "@/components/Table/TableProduct/TableProduct";

interface DataTableHeaderProps<T> {
  columns: ColumnType<T>[];
  onHeaderClick?: (column: ColumnType<T>) => void;
  sortItem?: SortItem;
}

const DataGridHeader = <T,>({
  columns,
  onHeaderClick,
  sortItem,
}: DataTableHeaderProps<T>) => (
  <TableHead>
    <TableRow>
      {columns.map(column => (
        <TableHeaderCell
          onClick={() => onHeaderClick?.(column)}
          key={column.key}
          className="px-6 py-2 text-[10.4px] leading-[17px] dark:text-white tracking-[0.2px] font-bold opacity-70 uppercase cursor-pointer">
          <HeaderCellContents
            title={column.title}
            keyColumn={column.key}
            sortItem={sortItem}
          />
        </TableHeaderCell>
      ))}
    </TableRow>
  </TableHead>
);

export default DataGridHeader;
