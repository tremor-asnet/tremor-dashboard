import type { Meta, StoryObj } from "@storybook/react";

// Components
import AnalyticsLineChart from "./AnalyticsLineChart";

// Mocks
import { LINE_CHART_DATA } from "@/mocks/charts";

//Types
import { CHART_TYPE } from "@/constants";

const meta = {
  title: "Components/AnalyticsLineChart",
  component: AnalyticsLineChart,
  tags: ["autodocs"],
} as Meta<typeof AnalyticsLineChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AnalyticsPerformanceLineChart: Story = {
  render: () => (
    <div className="mt-10">
      <AnalyticsLineChart
        dataChart={LINE_CHART_DATA[0].data}
        type={CHART_TYPE.PERFORMANCE}
        title="Completed Tasks"
        subTitle={"Last Campaign Performance"}
        scheduleText={"just updated"}
        isDailyChart={false}
      />
    </div>
  ),
};

export const AnalyticsSaleLineChart: Story = {
  render: () => (
    <div className="mt-10">
      <AnalyticsLineChart
        dataChart={LINE_CHART_DATA[1].data}
        type={CHART_TYPE.SALE}
        title={"Daily Sales"}
        descValue="(+15%)"
        subTitle={"increase in today sales."}
        scheduleText={"updated 4 mins ago"}
        isDailyChart
      />
    </div>
  ),
};
