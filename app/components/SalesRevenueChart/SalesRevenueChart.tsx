"use client";

import { Card, LineChart, Title } from "@tremor/react";
import { useState } from "react";

//Types
import { TEventProps, TRevenueChart } from "@/types";

interface RevenueChartProps {
  dataChart: TRevenueChart[];
  title?: string;
}

const SalesRevenueChart = ({
  dataChart,
  title = "Revenue",
}: RevenueChartProps) => {
  const [setValue] = useState<any>(null);

  return (
    <>
      <Card>
        <Title>{title}</Title>
        <LineChart
          className="h-72 mt-2"
          data={dataChart}
          index="date"
          categories={["Facebook Ads", "Google Ads"]}
          colors={["indigo", "neutral"]}
          yAxisWidth={30}
          onValueChange={(v: TEventProps) => setValue(v)}
          connectNulls={true}
          showAnimation={true}
        />
      </Card>
    </>
  );
};

export default SalesRevenueChart;
