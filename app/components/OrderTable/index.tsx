"use client";

import { Card, Flex, Table, TableBody } from "@tremor/react";

// Components
import { Pagination } from "@/components";

//Types
import { TProductTable } from "@/types";
import TableHeading from "./TableHeading";
import OrderRow from "./OrderRow";

export interface ProductTableProps {
  data: TProductTable[];
}

const OrderTable = ({ data }: ProductTableProps): JSX.Element => {
  return (
    <Card className="p-0 border-none ring-0 dark:bg-dark-tremor-primary overflow-x-auto">
      <Flex flexDirection="col" className="items-start justify-start my-2">
        <Table className="w-full">
          <TableHeading />
          <TableBody>
            {data.map(item => {
              return <OrderRow key={item.id} item={item} />;
            })}
          </TableBody>
        </Table>
        <Pagination total={2} />
      </Flex>
    </Card>
  );
};

export default OrderTable;
