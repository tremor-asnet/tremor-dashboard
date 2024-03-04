import type { Meta, StoryObj } from "@storybook/react";

// Components
import AnalyticsStatisticCard from "./AnalyticsStatisticCard";

//Mocks
import { STATISTICAL_DATA } from "@/mocks/analytics";

const meta = {
  title: "Components/ AnalyticsStatisticCard",
  component: AnalyticsStatisticCard,
  tags: ["autodocs"],
} as Meta<typeof AnalyticsStatisticCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AnalyticsStatisticCardDefault: Story = {
  render: () => (
    <AnalyticsStatisticCard statisticalData={STATISTICAL_DATA[0]} />
  ),
};
