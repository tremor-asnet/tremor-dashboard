import { useState } from "react";

// Types
import { ColumnType } from "@/types";

// Constants
import { DIRECTION } from "@/constants/common";

/**
 * Get default sorting
 * @param defaultTableData []
 * @param columns []
 * @returns []
 */
const getDefaultSorting = <T>(
  defaultTableData: T[],
  columns: ColumnType<T>[],
) => {
  const sorted = [...defaultTableData].sort((a, b) => {
    const filterColumn = columns.filter(column => column.sortbyOrder);

    // Merge all array objects into single object and extract accessor and sortbyOrder keys
    let { key = "id", sortbyOrder = DIRECTION.ASC } = Object.assign(
      {},
      ...filterColumn,
    );

    if ((a as any)[key] === null) return 1;
    if ((b as any)[key] === null) return -1;
    if ((a as any)[key] === null && (b as any)[key] === null) return 0;

    const ascending = (a as any)[key]
      ?.toString()
      .localeCompare((b as any)[key].toString(), "en", {
        numeric: true,
      });

    return sortbyOrder === DIRECTION.ASC ? ascending : -ascending;
  });

  return sorted;
};

/**
 * Hook to sort in table
 * @param data []
 * @param columns []
 * @returns [] | ((sortField: string, sortOrder: string) => void))[]
 */
export const useSortableTable = <T>(data: T[], columns: ColumnType<T>[]) => {
  const [tableData, setTableData] = useState<T[]>(
    getDefaultSorting(data, columns),
  );

  const handleSorting = (sortField: string, sortOrder: string) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if ((a as any)[sortField] === null) return 1;
        if ((b as any)[sortField] === null) return -1;
        if ((a as any)[sortField] === null && (b as any)[sortField] === null)
          return 0;

        return (
          (a as any)[sortField]
            ?.toString()
            .localeCompare((b as any)[sortField].toString(), "en", {
              numeric: true,
            }) * (sortOrder === DIRECTION.ASC ? 1 : -1)
        );
      });

      setTableData(sorted);
    }
  };

  return [tableData, handleSorting];
};
