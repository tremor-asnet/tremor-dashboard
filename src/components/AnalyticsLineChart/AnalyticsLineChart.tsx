//Libs
import { useState } from "react";
import { Card, LineChart } from "@tremor/react";

//Styles
import "@/styles/charts.css";

export enum CHART_TYPE {
  DAILY = "daily",
  TASK = "task",
}

enum CHART_CATEGORIES {
  DESKTOP = "Desktop apps",
  MOBILE = "Mobile apps",
}

type LineChart = {
  date: string;
  "Desktop apps"?: number;
  "Mobile apps"?: number;
};

interface LineChartProps {
  dataChart: LineChart[];
  type?: CHART_TYPE;
}

const AnalyticsLineChart = ({
  dataChart,
  type = CHART_TYPE.DAILY,
}: LineChartProps) => {
  const [setValue] = useState<any>(null);

  return (
    <>
      <Card
        className={`${
          type === CHART_TYPE.DAILY
            ? "bg-[linear-gradient(195deg,rgb(73,163,241),rgb(26,115,232))]"
            : "bg-[linear-gradient(195deg,rgb(102,187,106),rgb(67,160,71))]"
        } text-[rgb(52,71,103)] rounded-lg shadow-[rgba(0,0,0,0.14)_0rem_0.25rem_1.25rem_0rem,rgba(76,175,79,0.4)_0rem_0.4375rem_0.625rem_-0.3125rem]`}>
        <LineChart
          className="h-72 mt-4"
          data={dataChart}
          index="date"
          categories={[
            type === CHART_TYPE.DAILY
              ? CHART_CATEGORIES.DESKTOP
              : CHART_CATEGORIES.MOBILE,
          ]}
          yAxisWidth={30}
          showAnimation={true}
          onValueChange={(v: any) => setValue(v)}
        />
      </Card>
    </>
  );
};

export default AnalyticsLineChart;
