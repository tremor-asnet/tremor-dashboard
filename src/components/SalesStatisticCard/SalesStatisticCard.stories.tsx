import type { Meta, StoryObj } from "@storybook/react";

// Components
import SalesStatisticCard from "./SalesStatisticCard";

//Constans
import { ITEM_ACTION_SALES_DATE } from "@/constants/commons";

//Mocks
import { STATISTICS_DATA } from "@/mocks/sales";

const meta = {
  title: "Components/SalesStatisticCard",
  component: SalesStatisticCard,
  tags: ["autodocs"],
} as Meta<typeof SalesStatisticCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SalesStatisticCardDefault: Story = {
  render: () => (
    <SalesStatisticCard
      statisticsData={STATISTICS_DATA[0]}
      actions={ITEM_ACTION_SALES_DATE}
    />
  ),
};
