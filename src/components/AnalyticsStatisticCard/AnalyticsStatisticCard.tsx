//Libs
import { ReactNode } from "react";

//Components
import { Card, Text, Flex } from "@tremor/react";
import IconBox from "@/components/IconBox/IconBox";

// Helpers
import { removeCommasForNumber } from "@/helpers";

//Mocks
import { SALE_STATISTICAL } from "@/constants/saleStatistical";

type AnalyticsStatistical = {
  id: string;
  type: string;
  amount: string;
  totalAmount: string;
  duration: string;
};

interface IAnalyticsStatisticCard {
  statisticalData: AnalyticsStatistical;
}

const AnalyticsStatisticCard = ({
  statisticalData,
}: IAnalyticsStatisticCard): JSX.Element => {
  const { id, type, amount, totalAmount, duration } = statisticalData;

  return (
    <div className="font-primary antialiased items-center justify-between py-1">
      <div className="flex items-center">
        <Card className="bg-tremor-primary dark:bg-dark-tremor-primary mx-auto pt-3 pb-4 px-4 ring-0 max-w-full lg:max-w-[356px] 2xl:max-w-full border-none relative mt-[40px] rounded-xl shadow-md">
          <Flex className="">
            <IconBox
              className="absolute top-[-22px] shadow-box-icon-primary"
              bgBox={SALE_STATISTICAL[id]?.bgIcon}
              icon={SALE_STATISTICAL[id]?.icon}
            />
            <Flex className="pl-[90px] flex-col mb-1 items-end">
              <Text className="text-md text-secondary font-light">{type}</Text>
              <Text className="!text-primary text-tremor-normal leading-[33px] tracking-[0.1764px] font-bold">
                {removeCommasForNumber(amount)}
              </Text>
            </Flex>
          </Flex>
          <div className="h-px bg-[linear-gradient(to_right,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] opacity-25 my-4" />
          <Flex>
            <Flex className="justify-start items-start tracking-[0.4px]">
              {totalAmount && (
                <Text className="text-few leading-[21px] font-bold">
                  {`+${totalAmount}`}
                </Text>
              )}
              <Text className="ml-1 text-secondary leading-[21px] font-light">
                {duration} hellooo
              </Text>
            </Flex>
          </Flex>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsStatisticCard;
