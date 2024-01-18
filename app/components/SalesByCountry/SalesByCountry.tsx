// Components
import {
  Card,
  Flex,
  Text,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Title,
} from "@tremor/react";
import { MdLanguage } from "react-icons/md";
import Image from "next/image";

// Constants
import { FLAG_SRC } from "@/constants";

// Helpers
import { formatDecimalNumber, formatMoney } from "@/helpers";

export interface ISalesByCountry {
  id: string;
  flag: string;
  country: string;
  sales: number;
  value: string;
  bounce: number;
}

export interface SalesByCountryProps {
  title: string;
  chart?: string;
  isAnalytics: boolean;
  data: ISalesByCountry[];
}

const SalesByCountry = ({
  title,
  chart,
  isAnalytics,
  data,
}: SalesByCountryProps) => (
  <Card className="h-full bg-tremor-primary dark:bg-dark-tremor-primary p-0 border-none ring-0">
    <Flex>
      {isAnalytics && (
        <Flex className="absolute -top-4 left-6 w-16 h-16 p-1 shadow-md bg-[linear-gradient(195deg,_#66BB6A,_#43A047)] justify-center rounded-xl text-2xl text-white">
          <MdLanguage />
        </Flex>
      )}
      <Flex
        className={`flex-col items-start justify-start mt-4 ${
          isAnalytics ? "ml-[6.5rem]" : "ml-4"
        }`}>
        <Title className="text-lg font-bold text-primary dark:text-dark-primary tracking-[0.0075em]">
          {title}
        </Title>
      </Flex>
    </Flex>
    <Flex
      className={`relative mt-6 md:mt-0 py-0 flex-col md:flex-row ${
        isAnalytics ? "px-4 md:py-5" : "px-0 md:py-4"
      }`}>
      <Flex className="flex-col items-start justify-start mb-6 lg:mb-0">
        {data.map(item => {
          const { id, country, sales, value, bounce } = item;

          return (
            <Flex
              key={id}
              className="items-start justify-start border-0 border-b border-gray-100 last:border-transparent">
              <Table className="w-full">
                <TableBody className="last-child:border-black">
                  <TableRow className="border-solid">
                    <TableCell className="px-4 py-3 w-6/12 sm:w-[30%] border-gray-500">
                      <Flex className="items-center">
                        <Image
                          src={FLAG_SRC[id]}
                          width="24"
                          height="18"
                          alt={item.country}
                          priority
                        />
                        <Flex className="items-start flex-col ml-6">
                          <Text className="text-xs dark:text-dark-romance font-semibold leading-[1.25] tracking-[0.03333em]">
                            Country:
                          </Text>
                          <Text className="text-tremor-content-title dark:text-dark-tremor-content-title leading-[1.5]">
                            {country}
                          </Text>
                        </Flex>
                      </Flex>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-center">
                      <Text className="text-xs dark:text-dark-romance font-semibold leading-[1.25]">
                        Sales:
                      </Text>
                      <Text className="text-tremor-content-title dark:text-dark-tremor-content-title leading-[1.5]">
                        {formatDecimalNumber(sales)}
                      </Text>
                    </TableCell>
                    {isAnalytics && (
                      <TableCell className="px-4 py-3 text-center value">
                        <Text className="text-xs dark:text-dark-romance font-semibold leading-[1.25]">
                          Value:
                        </Text>
                        <Text className="text-tremor-content-title dark:text-dark-tremor-content-title m-auto leading-[1.5] truncate max-w-[60px] xs:max-w-[70px] xl:max-w-[105px]">
                          {formatMoney(value)}
                        </Text>
                      </TableCell>
                    )}
                    <TableCell
                      className={`px-4 py-3 text-center bounce ${
                        isAnalytics && "hidden md:table-cell"
                      }`}>
                      <Text className="text-xs dark:text-dark-romance font-semibold leading-[1.25]">
                        Bounce:
                      </Text>
                      <Text className="text-tremor-content-title dark:text-dark-tremor-content-title leading-[1.5]">
                        <span>{bounce}%</span>
                      </Text>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Flex>
          );
        })}
      </Flex>
      {isAnalytics && chart && (
        <Flex className="justify-center pb-6 px-16 md:p-0 map">
          <Image
            className="mt-0 lg:-mt-10"
            src={chart}
            width="380"
            height="250"
            alt="chart"
            priority
          />
        </Flex>
      )}
    </Flex>
  </Card>
);

export default SalesByCountry;
