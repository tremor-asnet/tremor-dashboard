"use client";

import { Card, Flex, Table, TableBody } from "@tremor/react";
import { useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();
  const params = searchParams.get("status");

  const newData = data.filter(
    (item: TProductTable) => item.status.toString() === params,
  );

  console.log("new data:", newData);

  return (
    <Card className="p-0 border-none ring-0 dark:bg-dark-tremor-primary overflow-x-auto">
      <Flex flexDirection="col" className="items-start justify-start my-2">
        <Table className="w-full">
          <TableHeading />
          <TableBody>
            {newData.map(item => {
              return (
                <OrderRow
                  key={item.id}
                  id={item.id}
                  createdAt={item.createdAt}
                  status={item.status}
                  customer={item.customer}
                  products={item.products}
                  revenue={item.revenue}
                />
              );
            })}
          </TableBody>
        </Table>
        <Pagination total={2} />
      </Flex>
    </Card>
  );
};

export default OrderTable;
