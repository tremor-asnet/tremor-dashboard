// Components
import { TableBody, TableCell, TableRow } from "@tremor/react";

// Types
import { ColumnType } from "@/types";

// Helpers
import { getObjectValue } from "@/helpers";

interface DataTableBodyProps<T> {
  data: T[];
  columns: ColumnType<T>[];
}

const DataGridBody = <T,>({ data, columns }: DataTableBodyProps<T>) => {
  return (
    <TableBody>
      {data.length ? (
        data.map(item => {
          const id = getObjectValue(item, "id");
          return (
            <TableRow key={`table-body-${id}`}>
              {columns.map(column => (
                <TableCell
                  key={`table-row-cell-${column.key}`}
                  className="px-6 py-5 border-0 border-b border-gray-100">
                  {column.customNode ? (
                    column.customNode(column, item)
                  ) : (
                    <p className="text-xs dark:text-white font-semibold">
                      {getObjectValue(item, column.key)}
                    </p>
                  )}
                </TableCell>
              ))}
            </TableRow>
          );
        })
      ) : (
        <TableRow className="w-full">
          <TableCell colSpan={6} className="h-32 text-center">
            <p className="text-xl dark:text-white font-semibold">
              Result Not Found
            </p>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};

export default DataGridBody;
