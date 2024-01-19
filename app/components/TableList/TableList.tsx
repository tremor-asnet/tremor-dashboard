"use client";

import {
  Card,
  Flex,
  Text,
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableCell,
  TableRow,
  Button,
} from "@tremor/react";

// Components
import { CheckBox, CustomImage, HeaderCellContents } from "@/components";

// Constants
import { STATUS_TEXT } from "@/constants";

// Helpers
import { ProductStatus } from "@/helpers";

//Types
import { ProductOrder, TTableList } from "@/types";

export interface TableListProps {
  data: TTableList[];
}

const TableList = ({ data }: TableListProps): JSX.Element => {
  const handleCheckBox = () => {};
  return (
    <Card className="p-0 border-none ring-0 dark:bg-dark-tremor-primary overflow-x-auto">
      <Flex className="items-start justify-start my-2">
        <Table className="w-full">
          <TableHead>
            <TableRow className="border-0 border-b border-gray-100">
              <TableHeaderCell className="px-6 py-2 text-[10.4px] leading-[17px] tracking-[0.2px] font-bold opacity-70 uppercase">
                <HeaderCellContents title="id" />
              </TableHeaderCell>
              <TableHeaderCell className="px-6 py-2 text-[10.4px] leading-[17px] tracking-[0.2px] font-bold opacity-70 uppercase">
                <HeaderCellContents title="date" />
              </TableHeaderCell>
              <TableHeaderCell className="px-6 py-2 text-[10.4px] leading-[17px] tracking-[0.2px] font-bold opacity-70 uppercase">
                <HeaderCellContents title="status" />
              </TableHeaderCell>
              <TableHeaderCell className="px-6 py-2 text-[10.4px] leading-[17px] tracking-[0.2px] font-bold opacity-70 uppercase">
                <HeaderCellContents title="customer" />
              </TableHeaderCell>
              <TableHeaderCell className="px-6 py-2 text-[10.4px] leading-[17px] tracking-[0.2px] font-bold opacity-70 uppercase">
                <HeaderCellContents title="product" />
              </TableHeaderCell>
              <TableHeaderCell className="px-6 py-2 text-[10.4px] leading-[17px] tracking-[0.2px] font-bold opacity-70 uppercase">
                <HeaderCellContents title="product" />
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(item => {
              const { id, created_at, status, customer, products, revenue } =
                item;
              return (
                <TableRow key={id}>
                  <TableCell className="px-6 py-5 border-0 border-b border-gray-100">
                    <Flex className="justify-start ml-2">
                      <CheckBox
                        handleCheckBox={handleCheckBox}
                        checked={false}
                      />
                      <Text className="ml-4 text-xs font-semibold leading-[15px] tracking-[0.4px] order-id">
                        #{id}
                      </Text>
                    </Flex>
                  </TableCell>
                  <TableCell className="px-6 py-5 border-0 border-b border-gray-100">
                    <Text className="text-xs font-semibold leading-[15px] tracking-[0.4px] order-dagte">
                      {created_at}
                    </Text>
                  </TableCell>
                  <TableCell className="px-6 py-5 border-0 border-b border-gray-100">
                    <Flex className="justify-start text-xs font-semibold leading-[15px] tracking-[0.4px] capitalize order-status">
                      {ProductStatus(status)}
                      <Text className="text-xs font-semibold leading-[15px] tracking-[0.4px] capitalize order-status">
                        {STATUS_TEXT[status]}
                      </Text>
                    </Flex>
                  </TableCell>
                  <TableCell className="px-6 py-5 border-0 border-b border-gray-100">
                    <Flex className="w-auto justify-start">
                      {customer.avatar ? (
                        <CustomImage
                          alt={customer.full_name}
                          className="w-6 h-6 rounded-full mr-2"
                          height={24}
                          priority
                          src={customer.avatar}
                          width={24}
                        />
                      ) : (
                        <Flex className="w-6 h-6 justify-center text-white text-xs bg-primary rounded-full mr-2">
                          {customer.full_name.substring(0, 1)}
                        </Flex>
                      )}
                      <Text className="text-xs font-semibold leading-[15px] tracking-[0.4px] capitalize order-customer">
                        {customer.full_name}
                      </Text>
                    </Flex>
                  </TableCell>
                  <TableCell className="px-6 py-5 border-0 border-b border-gray-100">
                    {products?.map((product: ProductOrder, index: number) => (
                      <Text
                        key={`Product ${index} of ${product.name} by ${product.id}`}
                        className="text-xs font-semibold leading-[15px] tracking-[0.4px] truncate max-w-[100px] lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] min-w-[100px] order-product">
                        {product.name}
                      </Text>
                    ))}
                  </TableCell>
                  <TableCell className="px-6 py-5 border-0 border-b border-gray-100">
                    <Text className="text-xs font-semibold leading-[15px] tracking-[0.4px] order-revenue">
                      {revenue}
                    </Text>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Flex>
    </Card>
  );
};

export default TableList;
