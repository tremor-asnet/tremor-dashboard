import type { Meta, StoryObj } from "@storybook/react";

// Components
import SalesByCountry from "./SalesByCountry";

// Mock data
import { SALES_BY_COUNTRY } from "@/mocks/analytics";

const meta = {
  title: "Components/SalesByCountry",
  component: SalesByCountry,
  tags: ["autodocs"],
} as Meta<typeof SalesByCountry>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AnalyticsSalesByCountry: Story = {
  render: () => (
    <SalesByCountry
      title="Sales by Country"
      chart="/assets/images/analytics/analytics-sales-chart.webp"
      isAnalytics={true}
      data={SALES_BY_COUNTRY}
    />
  ),
};

export const SalesByCountryComponent: Story = {
  render: () => (
    <SalesByCountry
      title="Sales by Country"
      isAnalytics={false}
      data={SALES_BY_COUNTRY}
    />
  ),
};
