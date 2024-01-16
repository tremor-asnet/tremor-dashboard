"use client";

import { Card, LineChart, Flex, Button, Text, Title } from "@tremor/react";
import { MdOutlinePriorityHigh } from "react-icons/md";
import { useState } from "react";

//Types
import { TEventProps, TRevenueChart } from "@/types";

// Components
import { Popover } from "@/components";

//Styles
import "@/styles/sales.css";

interface RevenueChartProps {
  dataChart: TRevenueChart[];
  revenueType: string;
}

const SalesRevenueChart = ({ dataChart, revenueType }: RevenueChartProps) => {
  const [setValue] = useState<any>(null);

  const chartValueChange = (v: TEventProps) => {
    setValue(v);
  };

  return (
    <Card>
      <Flex>
        <Text className="text-tremor-title dark:text-dark-tremor-content-title font-bold text-primary font-bold tracking-[0.12px]">
          {revenueType}
        </Text>
        <Popover
          content="See which ads perform better"
          className="text-center !bg-black !bottom-[0] rounded-md !text-white right-[0]">
          <Button
            className="!rounded-full border-[#7B809A] text-secondary hover:text-secondary hover:opacity-75 hover:bg-transparent p-[5.5px]"
            variant="secondary">
            <MdOutlinePriorityHigh className="text-xs" />
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
