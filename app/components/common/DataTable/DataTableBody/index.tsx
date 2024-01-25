import get from "lodash.get";

// Components
import { TableCell, TableRow } from "@tremor/react";

// Types
import { ColumnType } from "@/types";

interface DataTableBodyProps<T> {
  data: T[];
  columns: ColumnType<T>[];
}

const DataTableBody = <T,>({ data, columns }: DataTableBodyProps<T>) => {
  return (
    <>
      {data.map((item, itemIdx) => (
        <TableRow key={`table-body-${itemIdx}`}>
          {columns.map((column, columnIdx) => (
            <TableCell
              key={`table-row-cell-${columnIdx}`}
              className="px-6 py-5 border-0 border-b border-gray-100">
              {column.customNode ? (
                column.customNode(column, item)
              ) : (
                <p className="text-xs font-semibold">{get(item, column.key)}</p>
              )}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

export default DataTableBody;
