//Components
import { BarChart, Card, Flex, Subtitle, Text, Title } from "@tremor/react";
import { FaRegClock } from "react-icons/fa";

import Popover from "@/components/Popover/Popover";

type TData = {
  description: string;
  sales: number;
};

type TWebChartData = {
  id: string;
  display: string;
  desc: string;
  modified: string;
  data: TData[];
};

interface IWebChartData {
  webChartData: TWebChartData;
}

const ColumnChart = ({ webChartData }: IWebChartData) => {
  const { display, desc, modified, data } = webChartData;

  return (
    <div className="w-full bg-white dark:bg-dark-tremor-primary bg-clip-border shadow-[0rem_0.25rem_0.375rem_-0.0625rem_rgba(0,0,0,0.1),0rem_0.125rem_0.25rem_-0.0625rem_rgba(0,0,0,0.06)] overflow-visible h-full rounded-xl border-0 border-solid border-[rgba(0,0,0,0.125)]">
      <div className="p-4">
        <Flex className="">
          <main className="w-full mx-auto">
            <div className="-mt-10">
              <Card className="p-2 bg-[linear-gradient(195deg,#42424a,#191919)] dark:bg-gradient-pickled shadow-[0rem_0.25rem_1.25rem_0rem_rgba(0,0,0,0.14),0rem_0.4375rem_0.625rem_-0.3125rem_rgba(64,64,64,0.4)]">
                <BarChart
                  className="h-[168px] mt-4"
                  data={data}
                  index="description"
                  categories={["sales"]}
                  // @ts-expect-error: Tremor bug when add colors into config
                  colors={["light"]}
                  yAxisWidth={30}
                  showAnimation={true}
                  showLegend={false}
                />
              </Card>
            </div>
          </main>
        </Flex>
        <div className="flex-col items-start pt-6 pb-2 px-2">
          <div>
            <Title className="text-base dark:text-dark-primary font-bold opacity-100 capitalize text-[#344767]">
              {display}
            </Title>
            <Popover content={desc}>
              <Subtitle className="text-sm dark:text-dark-romance font-light opacity-100 text-secondary truncate max-w-[310px]">
                {desc}
              </Subtitle>
            </Popover>
          </div>
          <hr className="bg-gradient-line h-px opacity-25 mx-0 my-4 border-b-[none] border-solid" />
          <Flex className="justify-start">
            <FaRegClock
              size={12}
              className="text-secondary dark:text-dark-romance"
            />
            <Text className="text-sm dark:text-dark-romance font-light opacity-100 text-secondary ml-1">
              {modified}
            </Text>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default ColumnChart;
