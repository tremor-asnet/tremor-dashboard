"use client";

import { Card, LineChart, Flex, Text } from "@tremor/react";
import { MdOutlinePriorityHigh } from "react-icons/md";
import { useState } from "react";

//Types
import { Event, RevenueChartData } from "@/types";

// Components
import { Button, Popover } from "@/ui/components";

//Styles
import "@/styles/sales.css";

// Constants
import { VARIANT_BUTTON } from "@/constants";

interface RevenueChartProps {
  dataChart: RevenueChartData[];
  revenueType: string;
}

const SalesRevenueChart = ({ dataChart, revenueType }: RevenueChartProps) => {
  const [value, setValue] = useState<any>(null);

  const chartValueChange = (v: Event) => {
    setValue(v);
  };

  return (
    <Card className="sales-revenue-chart p-5 h-full dark:bg-dark-tremor-primary ring-0">
      <Flex>
        <Text className="text-tremor-title dark:text-dark-tremor-content-title font-bold text-primary font-bold tracking-[0.12px]">
          {revenueType}
        </Text>
        <Popover
          content="See which ads perform better"
          className="text-center !bg-black !bottom-[-18px] rounded-md !text-white right-[38px] min-w-[170px] before:content-['▶'] before:absolute before:top-[16px] before:right-[-12px] before:text-[black]">
          <Button
            variant={VARIANT_BUTTON.SECONDARY}
            variantTremor={VARIANT_BUTTON.SECONDARY}
            aria-label="Which Ads Perform Better Button">
            <MdOutlinePriorityHigh className="text-xs text-secondary" />
          </Button>
        </Popover>
      </Flex>
      <LineChart
        className="h-72"
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
