import type { Meta, StoryObj } from "@storybook/react";

// Components
import AnalyticsSalesCard from "./AnalyticsSalesCard";

// Mock data
import { ANALYTIC_SALES_CARD } from "@/mocks/analytics";

const meta = {
  title: "Components/AnalyticsSalesCard",
  component: AnalyticsSalesCard,
  tags: ["autodocs"],
} as Meta<typeof AnalyticsSalesCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AnalyticsSalesCardDefault: Story = {
  render: () => (
    <AnalyticsSalesCard
      title="Sales by Country"
      chart="/assets/images/analytics/analytics-sales-chart.webp"
      isAnalytics={true}
      data={[]}
    />
  ),
};
