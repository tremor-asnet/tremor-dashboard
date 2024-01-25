// Components
import { TableCell, TableRow } from "@tremor/react";

// Types
import { ColumnType } from "@/types";
import { getObjectValue } from "@/helpers";

// Hooks
import { useId } from "react";

interface DataTableBodyProps<T> {
  data: T[];
  columns: ColumnType<T>[];
}

const DataGridBody = <T,>({ data, columns }: DataTableBodyProps<T>) => {
  const rowId = useId();

  return (
    <>
      {data.map(item => (
        <TableRow key={`table-body-${rowId}`}>
          {columns.map(column => (
            <TableCell
              key={`table-row-cell-${column.key}`}
              className="px-6 py-5 border-0 border-b border-gray-100">
              {column.customNode ? (
                column.customNode(column, item)
              ) : (
                <p className="text-xs font-semibold">
                  {getObjectValue(item, column.key as keyof T) as string}
                </p>
              )}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

export default DataGridBody;
