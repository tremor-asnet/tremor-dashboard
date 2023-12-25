//Libs
import { ReactNode } from "react";

//Components
import { Card, Text, Flex } from "@tremor/react";
import IconBox from "@/components/IconBox/IconBox";

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
        <Card className="mx-auto py-3 px-4 ring-0 max-w-full lg:max-w-[356px] 2xl:max-w-full border-none relative mt-[40px] rounded-xl shadow-md">
          <Flex className="">
            <IconBox
              className="absolute top-[-22px] left-40px"
              bgBox={SALE_STATISTICAL[id].bgIcon}
              icon={SALE_STATISTICAL[id].icon}
            />
            <Flex className="pl-[90px] flex-col mb-1 items-end">
              <Text className="text-md text-[#7b809a] font-light">{type}</Text>
              <Text className="text-[#344767] text-[24px] mt-3 font-bold">
                {amount}
              </Text>
            </Flex>
          </Flex>
          <div className="h-px bg-[linear-gradient(to_right,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] opacity-25 my-4" />
          <Flex>
            <Flex className="justify-start items-start">
              <Text className="text-[#4caf50] font-bold">{totalAmount}</Text>
              <Text className="ml-1 text-[#7b809a] font-light">{duration}</Text>
            </Flex>
          </Flex>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsStatisticCard;
