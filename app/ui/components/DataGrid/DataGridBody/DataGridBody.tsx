// Components
import { Text, TableBody, TableCell, TableRow } from "@tremor/react";

// Types
import { ColumnType } from "@/types";

// Helpers
import { getObjectValue } from "@/helpers";

// Constants
import { RESULT_NOT_FOUND } from "@/constants";

interface DataTableBodyProps<T> {
  data: T[];
  columns: ColumnType<T>[];
}

const DataGridBody = <T,>({ data = [], columns }: DataTableBodyProps<T>) => {
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
                  className="px-6 py-5 border-0 dark:border-grayish border-b border-gray-100">
                  {column.customNode ? (
                    column.customNode(column, item)
                  ) : (
                    <Text className="text-xs dark:text-lighter font-semibold">
                      {getObjectValue(item, column.key)}
                    </Text>
                  )}
                </TableCell>
              ))}
            </TableRow>
          );
        })
      ) : (
        <TableRow className="w-full">
          <TableCell colSpan={7} className="h-32 text-center">
            <Text className="text-xl dark:text-white font-semibold">
              {RESULT_NOT_FOUND}
            </Text>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};

export default DataGridBody;
