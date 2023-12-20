//Components
import { Card, Text, Flex } from "@tremor/react";
import { IoMdPrint } from "react-icons/io";

//Mocks
import { STATISTICAL_DATA } from "@/mocks/analytics";

type AnalyticsStatistical = {
  type: string;
  amount: string;
  totalAmount: string;
  duration: string;
};

interface IAnalyticsStatisticCard {
  statisticalData: AnalyticsStatistical;
}

const AnalyticsStatisticCard = ({
  statisticalData = STATISTICAL_DATA[0],
}: IAnalyticsStatisticCard): JSX.Element => {
  const { type, amount, totalAmount, duration } = statisticalData;

  return (
    <div className="font-primary antialiased items-center justify-between py-1">
      <div className="flex items-center">
        <Card className="mx-auto py-3 px-4 ring-0 max-w-full lg:max-w-[356px] 2xl:max-w-full border-none relative mt-[40px] rounded-xl shadow-md">
          <Flex className="">
            <Flex className="absolute top-[-22px] left-40px w-[74px] h-[74px] p-1 bg-[linear-gradient(195deg,#42424a,#191919)] justify-center rounded-xl">
              <IoMdPrint color="white" size="24px" />
            </Flex>
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
