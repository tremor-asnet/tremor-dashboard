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
        <Title className="text-xl font-bold text-base">{title}</Title>
      </Flex>
    </Flex>
    <Flex className="relative mt-6 lg:mt-0 px-4 flex-col lg:flex-row">
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
                    <TableCell className="p-4 pb-3.5 w-6/12 md:w-4/12 border-gray-500">
                      <Flex className="items-center">
                        <Image
                          src={FLAG_SRC[id]}
                          width="24"
                          height="18"
                          alt={item.country}
                          priority
                        />
                        <Flex className="items-start flex-col ml-6">
                          <Text className="text-xs font-semibold">
                            Country:
                          </Text>
                          <Text className="text-tremor-content-title">
                            {country}
                          </Text>
                        </Flex>
                      </Flex>
                    </TableCell>
                    <TableCell className="p-4 pb-3.5 w-3/12">
                      <Text className="text-xs font-semibold">Sale:</Text>
                      <Text className="text-tremor-content-title">{sales}</Text>
                    </TableCell>
                    {isAnalytics && (
                      <TableCell className="p-4 pb-3.5 w-3/12 analytics-value">
                        <Text className="text-xs font-semibold">Value:</Text>
                        <Text className="text-tremor-content-title truncate max-w-[60px] xs:max-w-[70px] xl:max-w-[105px]">
                          {value}
                        </Text>
                      </TableCell>
                    )}
                    <TableCell className="p-4 pb-3.5 w-2/12 hidden sm:table-cell">
                      <Text className="text-xs font-semibold">Bounce:</Text>
                      <Text className="text-tremor-content-title">
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
        <Flex className="justify-center pb-6 px-16 lg:p-6 analytics-map">
          <Image src={chart} width="380" height="250" alt="chart" priority />
        </Flex>
      )}
    </Flex>
  </Card>
);

export default AnalyticsSalesCard;
