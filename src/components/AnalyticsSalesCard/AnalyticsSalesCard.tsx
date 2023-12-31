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

export interface IAnalyticsSalesCard {
  id: string;
  flag: string;
  country: string;
  sales: string;
  value: string;
  bounce: string;
}

export interface AnalyticsSalesCardProps {
  title: string;
  chart: string;
  isAnalytics: boolean;
  data: IAnalyticsSalesCard[];
}

const AnalyticsSalesCard = ({
  title,
  chart,
  isAnalytics,
  data,
}: AnalyticsSalesCardProps) => (
  <Card className="p-0 mt-4 border-none ring-0">
    <Flex>
      <Flex className="absolute -top-4 left-6 w-16 h-16 p-1 shadow-md bg-[linear-gradient(195deg,_#66BB6A,_#43A047)] justify-center rounded-xl text-2xl text-white">
        <MdLanguage />
      </Flex>
      <Flex className="flex-col items-start justify-start mt-4 ml-[6.5rem]">
        <Title className="text-lg font-bold text-primary tracking-[0.0075em]">
          {title}
        </Title>
      </Flex>
    </Flex>
    <Flex className="relative mt-6 md:mt-0 px-4 py-0 md:py-5 flex-col md:flex-row">
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
                          <Text className="text-xs font-semibold leading-[1.25] tracking-[0.03333em]">
                            Country:
                          </Text>
                          <Text className="text-tremor-content-title leading-[1.5]">
                            {country}
                          </Text>
                        </Flex>
                      </Flex>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-center">
                      <Text className="text-xs font-semibold leading-[1.25]">
                        Sales:
                      </Text>
                      <Text className="text-tremor-content-title leading-[1.5]">
                        {sales}
                      </Text>
                    </TableCell>
                    {isAnalytics && (
                      <TableCell className="px-4 py-3 text-center analytics-value">
                        <Text className="text-xs font-semibold leading-[1.25]">
                          Value:
                        </Text>
                        <Text className="text-tremor-content-title m-auto leading-[1.5] truncate max-w-[60px] xs:max-w-[70px] xl:max-w-[105px]">
                          {value}
                        </Text>
                      </TableCell>
                    )}
                    <TableCell className="px-4 py-3 text-center hidden sm:table-cell">
                      <Text className="text-xs font-semibold leading-[1.25]">
                        Bounce:
                      </Text>
                      <Text className="text-tremor-content-title leading-[1.5]">
                        {bounce}
                      </Text>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Flex>
          );
        })}
      </Flex>
      {isAnalytics && (
        <Flex className="justify-center pb-6 px-16 md:p-0 analytics-map">
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

export default AnalyticsSalesCard;
