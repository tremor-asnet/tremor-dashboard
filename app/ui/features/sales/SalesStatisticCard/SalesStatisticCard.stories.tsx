import type { Meta, StoryObj } from "@storybook/react";

// Components
import SalesStatisticCard from "./SalesStatisticCard";

//Mocks
import { STATISTICS_DATA } from "@/mocks/sales";

const meta = {
  title: "Components/Sales/SalesStatisticCard",
  component: SalesStatisticCard,
  tags: ["autodocs"],
} as Meta<typeof SalesStatisticCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SalesStatisticCardDefault: Story = {
  render: () => <SalesStatisticCard statisticsData={STATISTICS_DATA[0]} />,
};
