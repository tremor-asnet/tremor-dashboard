// Components
import { HeaderCellContents } from "@/components";
import { TableHead, TableHeaderCell, TableRow } from "@tremor/react";

// Types
import { ColumnType } from "@/types";
import { SortItem } from "@/components/Table/TableProduct/TableProduct";

interface DataTableHeaderProps<T> {
  columns: ColumnType<T>[];
  onHeaderClick?: (keyColumn: string) => void;
  sortKey?: string;
  sortDirection?: string;
}

const DataGridHeader = <T,>({
  columns,
  onHeaderClick,
  sortKey,
  sortDirection,
}: DataTableHeaderProps<T>) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map(({ key, title, sortable }) => {
          const handleHeaderClick = () => {
            sortable ? onHeaderClick?.(key) : null;
          };

          return (
            <TableHeaderCell
              onClick={handleHeaderClick}
              key={key}
              className="px-6 py-2 text-[10.4px] leading-[17px] dark:text-white tracking-[0.2px] font-bold opacity-70 uppercase cursor-pointer">
              <HeaderCellContents
                title={title}
                keyColumn={key}
                sortKey={sortKey}
                sortDirection={sortDirection}
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
