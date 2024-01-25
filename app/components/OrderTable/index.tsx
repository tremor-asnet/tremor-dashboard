"use client";

import {
  Card,
  Flex,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Text,
} from "@tremor/react";
import { useEffect, useMemo, useState } from "react";

// Components
import Pagination from "@/components/common/Pagination";
import TableHeading from "./TableHeading";
import OrderRow from "./OrderRow";

//Types
import { ProductTableData } from "@/types";
export interface ProductTableProps {
  data: ProductTableData[];
}

const OrderTable = ({ data }: ProductTableProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  return (
    <Card className="p-0 border-none ring-0 dark:bg-dark-tremor-primary overflow-x-auto">
      <Flex flexDirection="col" className="items-start justify-start my-2">
        <Table className="w-full">
          <TableHeading />
          <TableBody>
            {currentTableData.length ? (
              currentTableData.map(item => {
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
              })
            ) : (
              <TableRow className="w-full">
                <TableCell colSpan={6} className="h-32 text-center">
                  <Text className="text-xl font-semibold">
                    Result Not Found
                  </Text>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          totalCount={data.length}
          onPageChange={setCurrentPage}
        />
      </Flex>
    </Card>
  );
};

export default OrderTable;
