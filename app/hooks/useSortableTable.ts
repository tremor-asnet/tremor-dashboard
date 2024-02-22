import { useState } from "react";

// Constants
import { DIRECTION } from "@/constants/common";

/**
 * Hook to sort in table
 * @param data []
 * @returns [T[], (sortField?: string, sortOrder?: string) => void]
 */
export const useSortableTable = <T>(data: T[]) => {
  const [tableData, setTableData] = useState<T[]>(data);

  const handleSorting = (sortField?: string, sortOrder?: string) => {
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

  return [tableData, handleSorting] as const;
};
