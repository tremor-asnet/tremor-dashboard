//Components
import { DonutChart, Card, Flex, Text, Button } from "@tremor/react";
import { MdOutlinePriorityHigh } from "react-icons/md";

// Constants
import { CHANNELS_CHART_COLOR } from "@/constants";

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
  data: TData[];
};

interface IChannelChartData {
  title: string;
  channelChartData: TChannelChartData;
}

const ChannelChart = ({ title, channelChartData }: IChannelChartData) => {
  const { sale_total, sale_social_media, data } = channelChartData;

  return (
    <Card className="p-4 ring-0 border-none relative rounded-xl shadow-md">
      <Flex className="items-start flex-col">
        <Flex>
          <Flex className="flex-col justify-start items-start">
            <Text className="text-tremor-title dark:text-dark-tremor-content-title font-bold text-primary font-bold tracking-[0.12px]">
              {title}
            </Text>
          </Flex>
          <Flex className="justify-end items-start">
            <Button
              className="!rounded-full border-[#7B809A] text-secondary hover:text-secondary hover:opacity-75 hover:bg-transparent p-[5.5px]"
              variant="secondary">
              <MdOutlinePriorityHigh className="text-xs" />
            </Button>
          </Flex>
        </Flex>
        <Flex className="my-8">
          <Flex className="p-4 w-7/12">
            <DonutChart
              className="h-[200px]"
              data={data}
              index="name"
              category="percent"
              variant="pie"
              colors={["royal-blue", "amaranth", "cod-gray", "river-bed"]}
              showAnimation={true}
            />
          </Flex>
          <Flex className="w-5/12">
            <ul>
              {data.map(item => {
                const { id, name } = item;
                return (
                  <li
                    key={id}
                    className="flex items-center h-0 px-[15.5px] py-[9px] mb-4 last:mb-0 text-primary text-xs capitalize tracking-[0.4px]">
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
            <Text className="font-light text-secondary tracking-[0.4px]">
              More than<span className="font-bold mx-1">{sale_total}</span>
              sales are made using referral marketing, and
              <span className="font-bold mx-1">{sale_social_media}</span>are
              from social media.
            </Text>
          </Flex>
          <Flex className="justify-end w-full md:w-2/3 md: mt-4">
            <Button className="uppercase text-secondary font-bold bg-body hover:bg-body border-transparent hover:border-transparent px-6 py-2.5">
              <span className="text-xs tracking-[0.35px]">read more</span>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ChannelChart;
