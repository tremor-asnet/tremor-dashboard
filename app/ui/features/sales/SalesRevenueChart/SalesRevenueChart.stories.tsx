import type { Meta, StoryObj } from "@storybook/react";

// Components
import SalesRevenueChart from "./SalesRevenueChart";

//Mocks
import { REVENUE_CHART_DATA } from "@/mocks/sales";

const meta = {
  title: "Components/Sales/SalesRevenueChart",
  component: SalesRevenueChart,
  tags: ["autodocs"],
  argTypes: {
    dataChart: {
      description: "Data of sale revenue chart",
    },
    revenueType: {
      description: "Type of sale revenue chart",
    },
  },
} as Meta<typeof SalesRevenueChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SalesRevenueChartDefault: Story = {
  args: {
    dataChart: REVENUE_CHART_DATA.data,
    revenueType: "Revenue",
  },
};
