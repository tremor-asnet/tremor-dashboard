"use client";

//Libs
import { useState } from "react";

//Components
import { Card, Text, Flex, Button } from "@tremor/react";

//Types
import { SalesStatisticData } from "@/types";

//Constants
import {
  CURRENCY,
  ITEM_ACTION_SALES_DATE,
  SALES_STATISTIC_TYPE,
  UNIT,
} from "@/constants";

// Helpers
import { formatAdjustNumber, formattedNumber } from "@/helpers";

interface SalesStatisticProp {
  statisticsData: SalesStatisticData;
}

const SalesStatisticCard = ({
  statisticsData,
}: SalesStatisticProp): JSX.Element => {
  const { id, type, amount, amountChange, duration, amountChangeType } =
    statisticsData;
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

  const formattedAmount =
    {
      [SALES_STATISTIC_TYPE.SALES]: formattedNumber({
        value: amount,
        currency: CURRENCY.DOLLAR,
      }),
      [SALES_STATISTIC_TYPE.CUSTOMERS]: formattedNumber({
        value: amount,
        isDecimalNumber: true,
      }),
      [SALES_STATISTIC_TYPE.AVG_REVENUE]: formattedNumber({
        value: amount,
        currency: CURRENCY.DOLLAR,
        isDecimalNumber: true,
      }),
    }[type] || "";

  const formattedTotalAmount =
    {
      [SALES_STATISTIC_TYPE.SALES]: formatAdjustNumber({
        value: amountChange,
        isPositive: amountChangeType,
        unit: UNIT.PERCENT,
      }),
      [SALES_STATISTIC_TYPE.CUSTOMERS]: formatAdjustNumber({
        value: amountChange,
        isPositive: amountChangeType,
        unit: UNIT.PERCENT,
      }),
      [SALES_STATISTIC_TYPE.AVG_REVENUE]: formatAdjustNumber({
        value: amountChange,
        isPositive: amountChangeType,
        currency: CURRENCY.DOLLAR,
      }),
    }[type] || "";

  const totalAmountColor =
    type === SALES_STATISTIC_TYPE.AVG_REVENUE
      ? "text-secondary dark:!text-secondary"
      : "text-few";

  return (
    <Card className="dark:bg-dark-tremor-primary ring-0 max-w-full p-4 lg:max-w-sm 2xl:max-w-full border-none relative rounded-xl shadow-md">
      <Flex className="items-start">
        <Flex className="flex-col w-7/12 lg:w-1/2">
          <Flex className="flex-col justify-start items-start">
            <Text className="text-md text-secondary dark:text-dark-romance font-semibold tracking-wide">
              {type}
            </Text>
            <Text className="text-primary dark:text-dark-primary text-xl leading-8 font-bold">
              {formattedAmount}
            </Text>
            <Flex className="justify-start items-start">
              {amountChange && (
                <Text
                  className={`${totalAmountColor} dark:text-few leading-5 font-bold`}>
                  {formattedTotalAmount}
                  <span className="ml-1 font-normal text-secondary dark:text-dark-romance leading-5 tracking-wide">
                    {duration}
                  </span>
                </Text>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex
          className="justify-end items-end w-5/12 lg:w-1/2 cursor-pointer"
          onClick={() => handleToggleAction(id)}>
          <Text className="!text-xs text-secondary dark:text-secondary leading-5 tracking-wide">
            {currentSalesDate}
          </Text>
        </Flex>
        {openActionSalesDate && (
          <div className="absolute p-2 -right-2 top-8 z-10 bg-white dark:bg-dark-tremor-primary rounded-lg shadow-md">
            {ITEM_ACTION_SALES_DATE.map(item => (
              <Flex key={item.key} flex-col>
                <Button
                  className="w-40 justify-start text-tremor-content-title hover:text-tremor-content-title hover:bg-body dark:hover:bg-dark-primary hover:rounded-md px-4 py-1.5"
                  variant="light"
                  onClick={() => handleSelectSalesDate(item.label)}>
                  <Text className="font-normal text-sm text-secondary hover:text-primary leading-5 tracking-wide">
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
