"use client";

import { SalesByAgeContainer } from "@/types";
import { Card, Title, BarChart } from "@tremor/react";

const SalesByAge = ({ data, title }: SalesByAgeContainer) => {
  return (
    <Card className="sale-by-age dark:bg-dark-tremor-primary ring-0">
      <Title className="text-lg font-bold text-primary dark:text-dark-primary tracking-wide">
        {title}
      </Title>
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
