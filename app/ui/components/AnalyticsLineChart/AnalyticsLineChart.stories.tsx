import type { Meta, StoryObj } from "@storybook/react";

// Components
import AnalyticsLineChart from "./AnalyticsLineChart";

// Mocks
import { LINE_CHART_DATA } from "@/mocks/charts";

//Types
import { CHART_TYPE } from "@/types";

const meta = {
  title: "Components/AnalyticsLineChart",
  component: AnalyticsLineChart,
  tags: ["autodocs"],
} as Meta<typeof AnalyticsLineChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AnalyticsLineChartDefault: Story = {
  render: () => (
    <AnalyticsLineChart
      dataChart={LINE_CHART_DATA[1].data}
      title={"website views"}
      subTitle={"Last Campaign Performance"}
      scheduleText={"campaign sent 2 days ago"}
      isDailyChart
    />
  ),
};

export const AnalyticsTaskChartDefault: Story = {
  render: () => (
    <AnalyticsLineChart
      dataChart={LINE_CHART_DATA[0].data}
      type={CHART_TYPE.PERFORMANCE}
      title={"Daily Sales"}
      subTitle={"increase in today sales."}
      scheduleText={"updated 4 min ago"}
      isDailyChart={false}
    />
  ),
};
