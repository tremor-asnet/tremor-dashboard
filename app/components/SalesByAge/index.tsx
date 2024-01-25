"use client";

import { SalesByAgeProps } from "@/types";
import { Card, Title, BarChart } from "@tremor/react";

const SalesByAge = ({ data, title }: SalesByAgeProps) => {
  return (
    <Card className="dark:bg-dark-tremor-primary ring-0">
      <Title>{title}</Title>
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
