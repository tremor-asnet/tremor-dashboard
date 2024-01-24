"use client";

// Components
import {
  Card,
  Flex,
  Text,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@tremor/react";
import Pagination from "@/components/common/Pagination";
import TableHeading from "./TableHeading";
import ProductRow from "./ProductRow";

// Types
import { Product } from "@/types";

// React hooks
import { useEffect, useMemo, useState } from "react";

export interface ProductTableProps {
  data: Product[];
}

const ProductTable = ({ data }: ProductTableProps): JSX.Element => {
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
    <Card className="p-0 border-none ring-0 dark:text-light dark:bg-dark-tremor-primary overflow-x-auto">
      <Flex
        flexDirection="col"
        className="items-start justify-start my-2 dark:bg-dark-tremor-primary">
        <Table className="w-full">
          <TableHeading />
          <TableBody>
            {currentTableData.length ? (
              currentTableData.map(product => {
                return (
                  <ProductRow
                    key={product.id}
                    id={product.productId}
                    image={product.image}
                    name={product.productName}
                    price={product.price}
                    isAvailable={product.isAvailable}
                    providerName={product.providerName}
                    createdAt={product.createdAt}
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
          onPageChange={page => setCurrentPage(page)}
        />
      </Flex>
    </Card>
  );
};

export default ProductTable;
