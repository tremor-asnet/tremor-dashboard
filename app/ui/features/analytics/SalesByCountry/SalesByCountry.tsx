// Components
import { Card, Flex, Table, TableBody, Title } from "@tremor/react";
import { MdLanguage } from "react-icons/md";
import { SalesByCountryRow, WorldMapCanvas } from "@/components";

// Types
import { SalesByCountryData } from "@/types";

export interface SalesByCountryProps {
  title: string;
  isAnalytics: boolean;
  data: SalesByCountryData[];
}

const SalesByCountry = ({ title, isAnalytics, data }: SalesByCountryProps) => {
  const listData = isAnalytics ? data.slice(0, -1) : data;
  const titleClass = isAnalytics ? "ml-[6.5rem]" : "ml-4";
  const tableContainerClass = isAnalytics ? "px-4 md:py-5" : "px-0 md:py-4";

  return (
    <Card className="h-full bg-tremor-primary dark:bg-dark-tremor-primary p-0 border-none ring-0">
      <Flex>
        {isAnalytics && (
          <Flex className="absolute -top-4 left-6 w-16 h-16 p-1 shadow-md bg-[linear-gradient(195deg,_#66BB6A,_#43A047)] justify-center rounded-xl text-2xl text-white">
            <MdLanguage />
          </Flex>
        )}
        <Flex
          className={`flex-col items-start justify-start mt-4 ${titleClass}`}>
          <Title className="text-lg font-bold text-primary dark:text-dark-primary tracking-[0.0075em]">
            {title}
          </Title>
        </Flex>
      </Flex>
      <Flex
        className={`relative mt-6 md:mt-0 py-0 flex-col md:flex-row ${tableContainerClass}`}>
        <Flex className="flex-col items-start justify-start mb-6 lg:mb-0">
          <Flex className="items-start justify-start border-0 border-b border-gray-100 last:border-transparent">
            <Table className="w-full">
              <TableBody className="last-child:border-black">
                {listData.map(item => (
                  <SalesByCountryRow
                    key={`${item.id}`}
                    isAnalytics={isAnalytics}
                    id={item.id}
                    country={item.country}
                    sales={item.sales}
                    value={item.value}
                    bounce={item.bounce}
                  />
                ))}
              </TableBody>
            </Table>
          </Flex>
        </Flex>
        {isAnalytics && (
          <Flex className="justify-center pb-6 px-12 md:p-0 map">
            <WorldMapCanvas />
          </Flex>
        )}
      </Flex>
    </Card>
  );
};

export default SalesByCountry;
