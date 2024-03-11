"use client";

//Libs
import { useState, RefObject } from "react";

//Components
import { Card, Text, Flex, Button } from "@tremor/react";

//Types
import { SalesStatisticData } from "@/types";

// Hooks
import { useOutsideClick } from "@/hooks";

//Constants
import {
  CURRENCY,
  ITEM_ACTION_SALES_DATE,
  SALES_STATISTIC_TYPE,
  UNIT,
} from "@/constants";

// Helpers
import { formatAdjustNumber, formattedNumber, moneyFormat } from "@/helpers";

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

  const salesCardRef = useOutsideClick(() => {
    setOpenAction(false);
  });

  const handleSelectSalesDate = (labelDate: string) => {
    setOpenAction(false);
    setCurrentSalesDate(labelDate);
  };

  const handleToggleAction = (id: string) => {
    setOpenAction(!isOpenAction);
  };

  const formattedAmount =
    {
      [SALES_STATISTIC_TYPE.SALES]: moneyFormat({
        value: amount,
        currency: CURRENCY.DOLLAR,
      }),
      [SALES_STATISTIC_TYPE.CUSTOMERS]: formattedNumber({
        value: amount,
        isDecimalNumber: true,
      }),
      [SALES_STATISTIC_TYPE.AVG_REVENUE]: moneyFormat({
        value: amount,
        currency: CURRENCY.DOLLAR,
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
      [SALES_STATISTIC_TYPE.AVG_REVENUE]: moneyFormat({
        value: amountChange,
        currency: CURRENCY.DOLLAR,
      }),
    }[type] || "";

  const totalAmountColor =
    type === SALES_STATISTIC_TYPE.AVG_REVENUE
      ? "text-secondary dark:!text-secondary"
      : "text-few";

  return (
    <Card
      ref={salesCardRef as RefObject<HTMLDivElement>}
      className="dark:bg-dark-tremor-primary ring-0 max-w-full p-4 lg:max-w-[356px] 2xl:max-w-full border-none relative rounded-xl shadow-md">
      <Flex alignItems="start">
        <Flex className="flex-col w-2/3 md:w-1/2">
          <Flex
            alignItems="start"
            justifyContent="start"
            flexDirection="col"
            data-testid="formatted-amount">
            <Text className="text-md text-secondary dark:text-dark-romance font-semibold tracking-[0.4px]">
              {type}
            </Text>
            <Text className="text-primary dark:text-dark-primary text-xl leading-[33px] font-bold">
              {formattedAmount}
            </Text>
          </Flex>
        </Flex>
        <Flex
          alignItems="end"
          justifyContent="end"
          className="w-1/3 md:w-1/2 cursor-pointer"
          onClick={() => handleToggleAction(id)}>
          <Text className="!text-xs text-secondary dark:text-secondary leading-[21px] tracking-[0.4px]">
            {currentSalesDate}
          </Text>
        </Flex>
        {openActionSalesDate && (
          <div
            data-testid="sales-date-options"
            className="absolute p-2 -right-2 top-8 z-10 bg-white dark:bg-dark-tremor-primary rounded-lg shadow-md">
            {ITEM_ACTION_SALES_DATE.map(item => (
              <Flex key={item.key}>
                <Button
                  className="w-40 justify-start text-tremor-content-title hover:text-tremor-content-title hover:bg-body dark:hover:bg-dark-secondary hover:rounded-md px-4 py-1.5"
                  variant="light"
                  onClick={() => handleSelectSalesDate(item.label)}>
                  <Text className="font-normal text-sm text-secondary dark:text-lighter hover:text-primary dark:hover:text-white leading-[21px] tracking-[0.13px]">
                    {item.label}
                  </Text>
                </Button>
              </Flex>
            ))}
          </div>
        )}
      </Flex>
      <Flex
        alignItems="start"
        justifyContent="start"
        data-testid="total-amount">
        {amountChange && (
          <Text
            className={`${totalAmountColor} dark:text-few leading-[22px] font-bold`}>
            {formattedTotalAmount}
          </Text>
        )}
        <Text className="ml-1 text-secondary dark:text-dark-romance leading-[21px] tracking-[0.4px]">
          {duration}
        </Text>
      </Flex>
    </Card>
  );
};

export default SalesStatisticCard;
