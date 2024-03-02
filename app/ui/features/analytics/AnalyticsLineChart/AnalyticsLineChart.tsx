"use client";

//Libs
import { Card, LineChart, Subtitle, Flex, Text, Title } from "@tremor/react";

//Components
import { Popover } from "@/ui/components";

//Icons
import { FaRegClock } from "react-icons/fa";

//Styles
import "@/styles/charts.css";

//Types
import { type Color } from "@tremor/react";
import { LineChartData } from "@/types";

// Constants
import { CHART_TYPE } from "@/constants";

enum CHART_CATEGORIES {
  DESKTOP = "Desktop apps",
  MOBILE = "Mobile apps",
}

interface LineChartProps {
  dataChart: LineChartData[];
  type?: string;
  title: string;
  subTitle: string;
  scheduleText: string;
  isDailyChart: boolean;
  colors?: Color[];
  descValue?: string;
}

const AnalyticsLineChart = ({
  dataChart,
  type = CHART_TYPE.SALE,
  title,
  subTitle,
  scheduleText,
  descValue,
  colors = [],
  isDailyChart = true,
}: LineChartProps) => {
  return (
    <div className="w-full bg-white dark:bg-dark-tremor-primary bg-clip-border shadow-[0rem_0.25rem_0.375rem_-0.0625rem_rgba(0,0,0,0.1),0rem_0.125rem_0.25rem_-0.0625rem_rgba(0,0,0,0.06)] overflow-visible h-full rounded-xl border-0 border-solid border-[rgba(0,0,0,0.125)]">
      <div className="p-4">
        <Flex className="">
          <main className="w-full mx-auto">
            <div className="-mt-10">
              <Card
                data-testid="card"
                className={`${
                  type === CHART_TYPE.PERFORMANCE
                    ? "bg-[linear-gradient(195deg,rgb(73,163,241),rgb(26,115,232))]"
                    : "bg-[linear-gradient(195deg,rgb(102,187,106),rgb(67,160,71))]"
                } p-2 text-[rgb(52,71,103)] rounded-lg shadow-[rgba(0,0,0,0.14)_0rem_0.25rem_1.25rem_0rem,rgba(76,175,79,0.4)_0rem_0.4375rem_0.625rem_-0.3125rem] ring-0`}>
                <LineChart
                  className="h-[168px] mt-4"
                  data={dataChart}
                  index="date"
                  categories={[
                    type === CHART_TYPE.PERFORMANCE
                      ? CHART_CATEGORIES.DESKTOP
                      : CHART_CATEGORIES.MOBILE,
                  ]}
                  yAxisWidth={30}
                  colors={colors}
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
              {title}
            </Title>
            <Popover content={subTitle} className="min-w-[200px]">
              <Subtitle className="text-sm dark:text-dark-romance font-light opacity-100 text-[#7b809a]">
                {isDailyChart && (
                  <>
                    (<span className="font-bold">{descValue}</span>)
                  </>
                )}{" "}
                {subTitle}
              </Subtitle>
            </Popover>
          </div>
          <div className="bg-[linear-gradient(to_right,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] dark:bg-gradient-divider h-px opacity-25 mx-0 my-4" />
          <Flex className="justify-start">
            <FaRegClock
              size={12}
              className="text-secondary dark:text-dark-romance"
            />
            <Text className="text-sm dark:text-dark-romance font-light opacity-100 text-[#7b809a] ml-1">
              {scheduleText}
            </Text>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsLineChart;
