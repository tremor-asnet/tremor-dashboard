import { HeaderCellContents } from "@/components";
import { TableHead, TableHeaderCell, TableRow } from "@tremor/react";

const TableHeading = () => (
  <TableHead>
    <TableRow className="border-0 border-b border-gray-100">
      <TableHeaderCell className="px-6 py-2 text-[10.4px] leading-[17px] dark:text-white tracking-[0.2px] font-bold opacity-70 uppercase">
        <HeaderCellContents title="id" />
      </TableHeaderCell>
      <TableHeaderCell className="px-6 py-2 text-[10.4px] leading-[17px] dark:text-white tracking-[0.2px] font-bold opacity-70 uppercase">
        <HeaderCellContents title="date" />
      </TableHeaderCell>
      <TableHeaderCell className="px-6 py-2 text-[10.4px] leading-[17px] dark:text-white tracking-[0.2px] font-bold opacity-70 uppercase">
        <HeaderCellContents title="status" />
      </TableHeaderCell>
      <TableHeaderCell className="px-6 py-2 text-[10.4px] leading-[17px] dark:text-white tracking-[0.2px] font-bold opacity-70 uppercase">
        <HeaderCellContents title="customer" />
      </TableHeaderCell>
      <TableHeaderCell className="px-6 py-2 text-[10.4px] leading-[17px] dark:text-white tracking-[0.2px] font-bold opacity-70 uppercase">
        <HeaderCellContents title="product" />
      </TableHeaderCell>
      <TableHeaderCell className="px-6 py-2 text-[10.4px] leading-[17px] dark:text-white tracking-[0.2px] font-bold opacity-70 uppercase">
        <HeaderCellContents title="revenue" />
      </TableHeaderCell>
    </TableRow>
  </TableHead>
);

export default TableHeading;
