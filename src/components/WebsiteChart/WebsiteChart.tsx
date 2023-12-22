import { BarChart, Card, Flex, Subtitle, Text, Title } from "@tremor/react";
import { FaRegClock } from "react-icons/fa";

type Data = {
  description: string;
  sales: number;
};

interface WebsiteChartProps {
  data: Data[];
  title: string;
  subTitle: string;
  scheduleText: string;
}

const WebsiteChart = ({
  data,
  title,
  subTitle,
  scheduleText,
}: WebsiteChartProps) => {
  return (
    <div className="w-full bg-white bg-clip-border shadow-[0rem_0.25rem_0.375rem_-0.0625rem_rgba(0,0,0,0.1),0rem_0.125rem_0.25rem_-0.0625rem_rgba(0,0,0,0.06)] overflow-visible h-full rounded-xl border-0 border-solid border-[rgba(0,0,0,0.125)]">
      <div className="p-4">
        <Flex className="">
          <main className="w-full mx-auto">
            <div className="-mt-10">
              <Card className="p-2 bg-[linear-gradient(195deg,#42424a,#191919)] shadow-[0rem_0.25rem_1.25rem_0rem_rgba(0,0,0,0.14),0rem_0.4375rem_0.625rem_-0.3125rem_rgba(64,64,64,0.4)]">
                <BarChart
                  className="h-[168px] mt-4"
                  data={data}
                  index="description"
                  categories={["sales"]}
                  colors={["gray"]}
                  yAxisWidth={30}
                  showLegend={false}
                />
              </Card>
            </div>
          </main>
        </Flex>
        <div className="flex-col items-start pt-6 pb-2 px-2">
          <div>
            <Title className="text-base font-bold opacity-100 capitalize text-[#344767]">
              {title}
            </Title>
            <Subtitle className="text-sm font-light opacity-100 text-[#7b809a]">
              {subTitle}
            </Subtitle>
          </div>
          <hr className="bg-[linear-gradient(to_right,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] h-px opacity-25 mx-0 my-4 border-b-[none] border-solid" />
          <Flex className="justify-start">
            <FaRegClock size={14} color={"#7b809a"} />
            <Text className="text-sm font-light opacity-100 text-[#7b809a] ml-1">
              {scheduleText}
            </Text>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default WebsiteChart;
