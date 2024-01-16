"use client";

//Libs
import { useState } from "react";

//Components
import { Card, Text, Flex, Button } from "@tremor/react";

//Types
import { TSalesStatistic } from "@/types";

//Constans
import { ITEM_ACTION_SALES_DATE } from "@/constants/commons";

//Mocks
import { STATISTICS_DATA } from "@/mocks/sales";

interface ISalesStatisticProp {
  statisticsData: TSalesStatistic;
}

const SalesStatisticCard = ({
  statisticsData,
}: ISalesStatisticProp): JSX.Element => {
  const { id, type, amount, totalAmount, duration } = statisticsData;
  const [isOpenAction, setOpenAction] = useState(false);
  const [currentSalesDate, setCurrentSalesDate] = useState("6 May - 7 May");
  const openActionSalesDate = isOpenAction;

  const handleSelectSalesDate = (labelDate: string) => {
    setOpenAction(false);
    setCurrentSalesDate(labelDate);
  };

  const handleToggleAction = (id: string) => {
    setOpenAction(!isOpenAction);
  };

  return (
    <Card className="dark:bg-dark-tremor-primary ring-0 max-w-full p-4 lg:max-w-[356px] 2xl:max-w-full border-none relative rounded-xl shadow-md">
      <Flex className="items-start">
        <Flex className="flex-col w-2/3">
          <Flex className="flex-col justify-start items-start">
            <Text className="text-md text-secondary dark:text-dark-romance font-semibold tracking-[0.4px]">
              {type}
            </Text>
            <Text className="text-primary dark:text-dark-primary text-xl leading-[33px] font-bold">
              {amount}
            </Text>
          </Flex>
          <Flex className="justify-start items-start">
            {totalAmount && (
              <Text className="text-few dark:text-few leading-[22px] font-bold">
                {`+${totalAmount}`}
              </Text>
            )}
            <Text className="ml-1 text-secondary dark:text-dark-romance leading-[21px] tracking-[0.4px]">
              {duration}
            </Text>
          </Flex>
        </Flex>
        <Flex
          className="justify-end items-end w-1/3 cursor-pointer"
          onClick={() => handleToggleAction(id)}>
          <Text className="!text-xs text-secondary dark:text-secondary leading-[21px] tracking-[0.4px]">
            {currentSalesDate}
          </Text>
        </Flex>
        {openActionSalesDate && (
          <div className="absolute p-2 -right-2 top-8 z-10 bg-white rounded-lg shadow-md">
            {ITEM_ACTION_SALES_DATE.map(item => (
              <Flex key={item.key} flex-col>
                <Button
                  className="w-40 justify-start text-tremor-content-title hover:text-tremor-content-title hover:bg-[#f0f2f5] hover:rounded-md px-4 py-1.5"
                  variant="light"
                  onClick={() => handleSelectSalesDate(item.label)}>
                  <Text className="font-normal text-sm text-secondary hover:text-primary leading-[21px] tracking-[0.13px]">
                    {item.label}
                  </Text>
                </Button>
              </Flex>
            ))}
          </div>
        )}
      </Flex>
    </Card>
  );
};

export default SalesStatisticCard;
