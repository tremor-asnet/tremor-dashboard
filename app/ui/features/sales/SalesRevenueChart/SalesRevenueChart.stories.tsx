import type { Meta, StoryObj } from "@storybook/react";

// Components
import SalesRevenueChart from "./SalesRevenueChart";

//Mocks
import { REVENUE_CHART_DATA } from "@/mocks/sales";

const meta = {
  title: "Components/Sales/SalesRevenueChart",
  component: SalesRevenueChart,
  tags: ["autodocs"],
} as Meta<typeof SalesRevenueChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SalesRevenueChartDefault: Story = {
  render: () => (
    <SalesRevenueChart
      revenueType="Revenue"
      dataChart={REVENUE_CHART_DATA.data}
    />
  ),
};
