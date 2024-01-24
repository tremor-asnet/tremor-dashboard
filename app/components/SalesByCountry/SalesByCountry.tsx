// Components
import { Card, Flex, Table, TableBody, Title } from "@tremor/react";
import { MdLanguage } from "react-icons/md";
import Image from "next/image";

// Helpers
import { SalesByCountryRow } from "@/components";

// Types
import { ISalesByCountry } from "@/types";

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
}: SalesByCountryProps) => {
  const listData = isAnalytics ? data.slice(0, -1) : data;

  return (
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
          <Flex className="items-start justify-start border-0 border-b border-gray-100 last:border-transparent">
            <Table className="w-full">
              <TableBody className="last-child:border-black">
                {listData.map(item => (
                  <SalesByCountryRow
                    key={item.id}
                    data={item}
                    isAnalytics={isAnalytics}
                  />
                ))}
              </TableBody>
            </Table>
          </Flex>
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
};

export default SalesByCountry;
