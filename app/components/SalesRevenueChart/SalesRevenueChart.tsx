"use client";

import { Card, LineChart, Flex, Button, Text } from "@tremor/react";
import { MdOutlinePriorityHigh } from "react-icons/md";
import { useState } from "react";

//Types
import { Event, RevenueChartData } from "@/types";

// Components
import { Popover } from "@/components";

//Styles
import "@/styles/sales.css";

interface RevenueChartProps {
  dataChart: RevenueChartData[];
  revenueType: string;
}

const SalesRevenueChart = ({ dataChart, revenueType }: RevenueChartProps) => {
  const [setValue] = useState<any>(null);

  const chartValueChange = (v: Event) => {
    setValue(v);
  };

  return (
    <Card className="p-5 h-full dark:bg-dark-tremor-primary ring-0">
      <Flex>
        <Text className="text-tremor-title dark:text-dark-tremor-content-title font-bold text-primary font-bold tracking-[0.12px]">
          {revenueType}
        </Text>
        <Popover
          content="See which ads perform better"
          className="text-center !bg-black !bottom-[-18px] rounded-md !text-white right-[38px] min-w-[170px] before:content-['▶'] before:absolute before:top-[16px] before:right-[-12px] before:text-[black]">
          <Button
            className="!rounded-full border-secondary dark:border-secondary text-secondary hover:text-secondary hover:opacity-75 hover:bg-transparent p-[5.5px]"
            variant="secondary">
            <MdOutlinePriorityHigh className="text-xs text-secondary" />
          </Button>
        </Popover>
      </Flex>
      <LineChart
        className="h-72 mt-2"
        data={dataChart}
        index="month"
        categories={["Facebook Ads", "Google Ads"]}
        colors={["indigo", "neutral"]}
        yAxisWidth={30}
        onValueChange={chartValueChange}
        connectNulls={true}
        showAnimation={true}
      />
    </Card>
  );
};

export default SalesRevenueChart;
