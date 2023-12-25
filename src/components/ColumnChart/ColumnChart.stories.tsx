// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import ColumnChart from "./ColumnChart";
import { WEBSITE_CHART } from "@/mocks/analytics";

const meta = {
  title: "Components/ColumnChart",
  tags: ["autodocs"],
  component: ColumnChart,
} as Meta<typeof ColumnChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ColumnChart
      data={WEBSITE_CHART}
      title={"website views"}
      subTitle={"Last Campaign Performance"}
      scheduleText={"campaign sent 2 days ago"}
    />
  ),
};
