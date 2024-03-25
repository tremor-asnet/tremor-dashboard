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
import { CURRENCY, TOP_SELLING_PRODUCTS_SRC } from "@/constants";

// Components
import { CustomImage } from "@/ui/components";

// Icons
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

//Types
import { TopSellingProductsData } from "@/types";

// Helpers
import { formattedNumber, moneyFormat } from "@/helpers";

export interface TopSellingProductsProps {
  title: string;
  data: TopSellingProductsData[];
}

const TopSellingProducts = ({ title, data }: TopSellingProductsProps) => (
  <Card className="p-0 border-none ring-0 dark:bg-dark-tremor-primary">
    <Flex>
      <Title className="p-6 pb-2.5 text-lg font-semibold text-primary dark:text-dark-primary tracking-[0.0075em]">
        {title}
      </Title>
    </Flex>
    <Flex justifyContent="start" alignItems="start" className="pb-2">
      <Table className="w-full">
        <TableHead>
          <TableRow className="border-0 border-b border-gray-100 dark:border-grayish">
            <TableHeaderCell className="px-6 pt-2 pb-3 text-tremor-content-bold dark:text-dark-tremor-content-title text-[10.4px] leading-[17px] tracking-[0.2px] font-bold opacity-70 uppercase">
              product
            </TableHeaderCell>
            <TableHeaderCell className="px-6 py-2 text-tremor-content-bold dark:text-dark-tremor-content-title text-[10.4px] leading-[17px] tracking-[0.2px] font-bold opacity-70 uppercase">
              value
            </TableHeaderCell>
            <TableHeaderCell className="px-6 py-2 text-tremor-content-bold dark:text-dark-tremor-content-title text-[10.4px] leading-[17px] tracking-[0.2px] font-bold opacity-70 uppercase text-center">
              ads spent
            </TableHeaderCell>
            <TableHeaderCell className="px-6 py-2 text-tremor-content-bold dark:text-dark-tremor-content-title text-[10.4px] leading-[17px] tracking-[0.2px] font-bold opacity-70 uppercase text-center">
              refunds
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody className="last:!border-transparent">
          {data.length ? (
            data.map(item => {
              const { productId, name, orders, value, refunds, refundsType } =
                item;
              return (
                <TableRow
                  key={productId}
                  className="border-0 border-b !border-gray-100 dark:!border-grayish">
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
                      <Flex alignItems="start" flexDirection="col">
                        <Text className="text-tremor-content-title dark:text-dark-tremor-content-title font-bold leading-[21px] tracking-[0.4px] truncate max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[800px] min-w-[200px] product-name">
                          {name}
                        </Text>
                        <Text className="text-purple dark:text-greyer leading-[21px] tracking-[0.4px] product-orders">
                          <span className="text-greenter dark:text-few">
                            {formattedNumber({
                              value: orders,
                              isDecimalNumber: true,
                            })}
                          </span>{" "}
                          orders
                        </Text>
                      </Flex>
                    </Flex>
                  </TableCell>
                  <TableCell className="px-6 py-3">
                    <Text className="text-tremor-content-emphasis dark:text-dark-tremor-content-romance leading-[21px] tracking-[0.4px] product-value">
                      <span>
                        {moneyFormat({
                          value,
                          currency: CURRENCY.DOLLAR,
                        })}
                      </span>
                    </Text>
                  </TableCell>
                  <TableCell className="px-6 py-3 text-center">
                    <Text className="text-tremor-content-emphasis dark:text-dark-tremor-content-romance leading-[21px] tracking-[0.4px] product-ads-spent">
                      <span>
                        {moneyFormat({
                          value,
                          currency: CURRENCY.DOLLAR,
                        })}
                      </span>
                    </Text>
                  </TableCell>
                  <TableCell className="px-6 py-3">
                    <Flex justifyContent="center">
                      <Text className="text-tremor-content-emphasis dark:text-dark-tremor-content-romance leading-[21px] tracking-[0.4px] product-refunds">
                        {refunds}
                      </Text>
                      {refundsType === "increase" ? (
                        <MdKeyboardArrowUp className="text-xl text-green dark:text-few" />
                      ) : (
                        <MdKeyboardArrowDown className="text-xl text-[#F44335]" />
                      )}
                    </Flex>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow className="w-full">
              <TableCell colSpan={7} className="h-32 text-center">
                <Text className="text-xl dark:text-white font-semibold">
                  No data
                </Text>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Flex>
  </Card>
);

export default TopSellingProducts;
