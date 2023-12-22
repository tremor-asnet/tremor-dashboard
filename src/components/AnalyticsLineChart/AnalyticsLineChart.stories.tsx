import type { Meta, StoryObj } from "@storybook/react";

// Components
import AnalyticsLineChart from "./AnalyticsLineChart";

// Mocks
import { ANALYTICS_DAILY_CHART, ANALYTICS_TASK_CHART } from "@/mocks/charts";

// Types
import { CHART_TYPE } from "./AnalyticsLineChart";

const meta = {
  title: "Components/AnalyticsLineChart",
  component: AnalyticsLineChart,
  tags: ["autodocs"],
} as Meta<typeof AnalyticsLineChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AnalyticsLineChartDefault: Story = {
  render: () => <AnalyticsLineChart dataChart={ANALYTICS_DAILY_CHART} />,
};

export const AnalyticsTaskChartDefault: Story = {
  render: () => (
    <AnalyticsLineChart
      dataChart={ANALYTICS_TASK_CHART}
      type={CHART_TYPE.TASK}
    />
  ),
};
