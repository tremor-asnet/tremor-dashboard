import { HeaderCellContents } from "@/components";
import { TableHead, TableHeaderCell, TableRow } from "@tremor/react";

const TableHeading = () => (
  <TableHead>
    <TableRow className="border-0 border-b border-gray-100">
      <TableHeaderCell className="px-6 py-2 text-[10.4px] leading-[17px] dark:text-white tracking-[0.2px] font-bold opacity-70 uppercase">
        <HeaderCellContents title="id" />
      </TableHeaderCell>
      <TableHeaderCell className="px-6 py-2 text-[10.4px] leading-[17px] dark:text-white tracking-[0.2px] font-bold opacity-70 uppercase">
        <HeaderCellContents title="product" />
      </TableHeaderCell>
      <TableHeaderCell className="px-6 py-2 text-[10.4px] leading-[17px] dark:text-white tracking-[0.2px] font-bold opacity-70 uppercase">
        <HeaderCellContents title="price" />
      </TableHeaderCell>
      <TableHeaderCell className="px-6 py-2 text-[10.4px] leading-[17px] dark:text-white tracking-[0.2px] font-bold opacity-70 uppercase">
        <HeaderCellContents title="is available" />
      </TableHeaderCell>
      <TableHeaderCell className="px-6 py-2 text-[10.4px] leading-[17px] dark:text-white tracking-[0.2px] font-bold opacity-70 uppercase">
        <HeaderCellContents title="provider" />
      </TableHeaderCell>
      <TableHeaderCell className="px-6 py-2 text-[10.4px] leading-[17px] dark:text-white tracking-[0.2px] font-bold opacity-70 uppercase">
        <HeaderCellContents title="created date" />
      </TableHeaderCell>
    </TableRow>
  </TableHead>
);

export default TableHeading;
