//Libs
import { ReactNode } from "react";

//Components
import { Card, Text, Flex } from "@tremor/react";
import { MdLanguage } from "react-icons/md";
import IconBox from "@/components/IconBox/IconBox";

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
  bgIcon?: string;
  icon?: ReactNode;
}

const AnalyticsStatisticCard = ({
  statisticalData = STATISTICAL_DATA[0],
  bgIcon = "bg-[linear-gradient(195deg,#42424a,#191919)]",
  icon = <MdLanguage color="white" size="24px" />,
}: IAnalyticsStatisticCard): JSX.Element => {
  const { type, amount, totalAmount, duration } = statisticalData;

  return (
    <div className="font-primary antialiased items-center justify-between py-1">
      <div className="flex items-center">
        <Card className="mx-auto py-3 px-4 ring-0 max-w-full lg:max-w-[356px] 2xl:max-w-full border-none relative mt-[40px] rounded-xl shadow-md">
          <Flex className="">
            <IconBox
              className="absolute top-[-22px]"
              bgBox={bgIcon}
              icon={icon}
            />
            <Flex className="pl-[90px] flex-col mb-1 items-end">
              <Text className="text-md text-secondary font-light">{type}</Text>
              <Text className="!text-2xl text-primary leading-[33px] tracking-[0.1764px] mt-3 font-bold">
                {amount}
              </Text>
            </Flex>
          </Flex>
          <div className="h-px bg-[linear-gradient(to_right,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] opacity-25 my-4" />
          <Flex>
            <Flex className="justify-start items-start tracking-[0.4px]">
              <Text className="text-few leading-[21px] font-bold">
                {totalAmount}
              </Text>
              <Text className="ml-1 text-secondary leading-[21px] font-light">
                {duration}
              </Text>
            </Flex>
          </Flex>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsStatisticCard;
