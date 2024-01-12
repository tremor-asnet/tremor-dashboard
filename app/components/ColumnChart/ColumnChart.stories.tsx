// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import ColumnChart from "./ColumnChart";

// Mocks
import { WEBSITE_CHART } from "@/mocks/analytics";

const meta = {
  title: "Components/ColumnChart",
  tags: ["autodocs"],
  component: ColumnChart,
} as Meta<typeof ColumnChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ColumnChart webChartData={WEBSITE_CHART} />,
};
