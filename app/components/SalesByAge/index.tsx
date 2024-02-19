"use client";

import { SalesByAgeContainer } from "@/types";
import { Card, Title, BarChart } from "@tremor/react";

const SalesByAge = ({ data, title }: SalesByAgeContainer) => {
  return (
    <Card className="dark:bg-dark-tremor-primary ring-0">
      <Title className="dark:text-white">{title}</Title>
      <BarChart
        className="mt-6 w-full"
        data={data}
        index="ageRange"
        categories={["value"]}
        colors={["slate"]}
        yAxisWidth={40}
        layout="vertical"
        showGridLines={false}
        showLegend={false}
      />
    </Card>
  );
};

export default SalesByAge;
