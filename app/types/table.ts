import { ReactNode } from "react";

export interface ColumnType<T> {
  key: string;
  title: string;
  customNode?: (column: ColumnType<T>, item: T) => ReactNode;
  isSortable?: boolean;
}
