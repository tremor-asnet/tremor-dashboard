import type { Meta, StoryObj } from "@storybook/react";

// Components
import AnalyticsLineChart from "./AnalyticsLineChart";

// Mocks
import { LINE_CHART_DATA } from "@/mocks/charts";

//Types
import { CHART_TYPE } from "@/constants";

const meta = {
  title: "Components/Analytics/AnalyticsLineChart",
  component: AnalyticsLineChart,
  tags: ["autodocs"],
  argTypes: {
    dataChart: {
      description: "Data of analytics line chart",
    },
    type: {
      description: "Type of analytics line chart",
    },
    title: {
      description: "Title of analytics line chart",
    },
    subTitle: {
      description: "Sub title of analytics line chart",
    },
    scheduleText: {
      description: "Dchedule of analytics line chart",
    },
    isDailyChart: {
      description: "Check is sales or performance chart",
    },
  },
} as Meta<typeof AnalyticsLineChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AnalyticsPerformanceLineChart: Story = {
  args: {
    dataChart: LINE_CHART_DATA[0].data,
    type: CHART_TYPE.PERFORMANCE,
    title: "Completed Tasks",
    subTitle: "Last Campaign Performance",
    scheduleText: "just updated",
    isDailyChart: false,
  },
};

export const AnalyticsSaleLineChart: Story = {
  args: {
    dataChart: LINE_CHART_DATA[1].data,
    type: CHART_TYPE.SALE,
    title: "Daily Sales",
    descValue: "+15%",
    subTitle: "increase in today sales.",
    scheduleText: "updated 4 mins ago",
    isDailyChart: true,
  },
};
