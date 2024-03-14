// Components
import { MdLanguage } from "react-icons/md";
import { Card, Flex, Table, TableBody, Title } from "@tremor/react";
import { SalesByCountryRow, WorldMapCanvas } from "@/ui/components";

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
          flexDirection="col"
          alignItems="start"
          justifyContent="start"
          className={`mt-4 ${titleClass}`}>
          <p className="text-sm md:text-base font-bold text-primary dark:text-dark-primary">
            {title}
          </p>
        </Flex>
      </Flex>
      <Flex
        className={`relative mt-6 md:mt-0 py-0 flex-col md:flex-row ${tableContainerClass}`}>
        <Flex
          flexDirection="col"
          alignItems="start"
          justifyContent="start"
          className="mb-6 lg:mb-0">
          <Flex
            alignItems="start"
            justifyContent="start"
            className="border-0 border-b border-gray-100 last:border-transparent">
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
          <Flex justifyContent="center" className="pb-6 px-12 md:p-0 map">
            <WorldMapCanvas />
          </Flex>
        )}
      </Flex>
    </Card>
  );
};

export default SalesByCountry;
