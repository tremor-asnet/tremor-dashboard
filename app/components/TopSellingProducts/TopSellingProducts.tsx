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
  Title,
} from "@tremor/react";

// Constants
import { TOP_SELLING_PRODUCTS_SRC } from "@/constants";

// Components
import { CustomImage } from "@/components";

// Icons
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

//Types
import { TTopSellingProducts } from "@/types";

export interface TopSellingProductsProps {
  title: string;
  data: TTopSellingProducts[];
}

const TopSellingProducts = ({ title, data }: TopSellingProductsProps) => (
  <Card className="p-0 border-none ring-0">
    <Flex>
      <Title className="p-6 pb-2.5 text-lg font-semibold text-primary tracking-[0.0075em]">
        {title}
      </Title>
    </Flex>
    <Flex className="items-start justify-start mb-2">
      <Table className="w-full">
        <TableHead>
          <TableRow className="border-0 border-b border-gray-100">
            <TableHeaderCell className="px-6 py-2 text-tremor-content text-[10.4px] leading-[17px] tracking-[0.2px] font-bold opacity-70 uppercase">
              product
            </TableHeaderCell>
            <TableHeaderCell className="px-6 py-2 text-tremor-content text-[10.4px] leading-[17px] tracking-[0.2px] font-bold opacity-70 uppercase">
              value
            </TableHeaderCell>
            <TableHeaderCell className="px-6 py-2 text-tremor-content text-[10.4px] leading-[17px] tracking-[0.2px] font-bold opacity-70 uppercase text-center">
              ads spent
            </TableHeaderCell>
            <TableHeaderCell className="px-6 py-2 text-tremor-content text-[10.4px] leading-[17px] tracking-[0.2px] font-bold opacity-70 uppercase text-center">
              refunds
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody className="last:!border-transparent">
          {data.map(item => {
            const {
              productId,
              name,
              orders,
              value,
              adsSpent,
              refunds,
              refundsType,
            } = item;
            return (
              <TableRow
                key={productId}
                className="border-0 border-b !border-gray-100">
                <TableCell className="px-6 py-3">
                  <Flex>
                    <Flex className="w-16 mr-3 md:mr-1">
                      <CustomImage
                        className="rounded-full"
                        src={TOP_SELLING_PRODUCTS_SRC[productId]}
                        width={48}
                        height={48}
                        alt={name}
                        priority
                      />
                    </Flex>
                    <Flex className="items-start flex-col">
                      <Text className="text-tremor-content-title font-bold leading-[21px] tracking-[0.4px] truncate max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[800px] min-w-[200px] product-name">
                        {name}
                      </Text>
                      <Text className="text-secondary leading-[21px] tracking-[0.4px] product-orders">
                        <span className="text-few">{orders}</span> orders
                      </Text>
                    </Flex>
                  </Flex>
                </TableCell>
                <TableCell className="px-6 py-3">
                  <Text className="text-secondary leading-[21px] tracking-[0.4px] product-value">
                    {value}
                  </Text>
                </TableCell>
                <TableCell className="px-6 py-3 text-center">
                  <Text className="text-secondary leading-[21px] tracking-[0.4px] product-ads-spent">
                    {adsSpent}
                  </Text>
                </TableCell>
                <TableCell className="px-6 py-3">
                  <Flex className="justify-center">
                    <Text className="text-secondary leading-[21px] tracking-[0.4px] product-refunds">
                      {refunds}
                    </Text>
                    {refundsType === "increase" ? (
                      <MdKeyboardArrowUp className="text-xl text-few" />
                    ) : (
                      <MdKeyboardArrowDown className="text-xl text-[#F44335]" />
                    )}
                  </Flex>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Flex>
  </Card>
);

export default TopSellingProducts;
