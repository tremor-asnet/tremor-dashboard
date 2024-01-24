//Components
import { DonutChart, Card, Flex, Text, Button } from "@tremor/react";
import { MdOutlinePriorityHigh } from "react-icons/md";
import { Popover } from "@/components";

// Constants
import { CHANNELS_CHART_COLOR } from "@/constants";

//Helpers
import { numberWithCommas } from "@/helpers";

//Styles
import "@/styles/charts.css";

type TData = {
  id: number;
  name: string;
  percent: number;
};

type TChannelChartData = {
  sale_total: number;
  sale_social_media: number;
  channels: TData[];
};

interface IChannelChartData {
  title: string;
  channelChartData: TChannelChartData;
}

const ChannelChart = ({ title, channelChartData }: IChannelChartData) => {
  const { sale_total, sale_social_media, channels } = channelChartData;

  return (
    <Card className="p-5 ring-0 border-none rounded-xl shadow-md dark:bg-dark-tremor-primary">
      <Flex className="items-start flex-col">
        <Flex className="relative">
          <Text className="text-tremor-title dark:text-dark-tremor-content-title font-bold text-primary font-bold tracking-[0.12px]">
            {title}
          </Text>
          <Popover
            content="See traffic channels"
            className="text-center !bg-black !bottom-[-50px] rounded-md !text-white right-[-34px] md:right-[-55px] min-w-[140px] before:content-['▲'] before:absolute before:top-[-17px] before:left-[85px] md:before:left-[65px] before:text-[black]">
            <Button
              className="!rounded-full border-[#7B809A] text-secondary hover:text-secondary hover:opacity-75 hover:bg-transparent p-[5.5px]"
              variant="secondary">
              <MdOutlinePriorityHigh className="text-xs text-secondary" />
            </Button>
          </Popover>
        </Flex>
        <Flex className="my-8">
          <Flex className="p-4 w-7/12">
            <DonutChart
              className="h-[200px]"
              data={channels}
              index="name"
              category="percent"
              variant="pie"
              // @ts-expect-error: Tremor bug when add colors into config
              colors={["royal-blue", "amaranth", "cod-gray", "river-bed"]}
              showAnimation={true}
            />
          </Flex>
          <Flex className="w-5/12">
            <ul>
              {channels?.map(item => {
                const { id, name } = item;
                return (
                  <li
                    key={id}
                    className="flex items-center h-0 px-[15.5px] py-[9px] mb-4 last:mb-0 text-primary dark:text-white text-xs capitalize tracking-[0.4px]">
                    <i
                      className={`flex rounded-full w-2 h-2 mr-2 bg-${CHANNELS_CHART_COLOR[id]}`}></i>
                    <span>{name}</span>
                  </li>
                );
              })}
            </ul>
          </Flex>
        </Flex>
        <Flex className="flex-col md:flex-row">
          <Flex>
            <Text className="font-light text-secondary dark:text-white tracking-[0.4px]">
              More than
              <span className="font-bold mx-1">
                {numberWithCommas(sale_total)}
              </span>
              sales are made using referral marketing, and
              <span className="font-bold mx-1">
                {numberWithCommas(sale_social_media)}
              </span>
              from social media.
            </Text>
          </Flex>
          <Flex className="justify-end w-full md:w-2/3 md: mt-4">
            <Button className="uppercase text-secondary font-bold bg-body hover:bg-primary hover:text-white hover:bg-opacity-80 border-transparent hover:border-primary px-6 py-2.5 tracking-[0.35px] dark:text-white">
              <span className="text-xs">read more</span>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ChannelChart;
