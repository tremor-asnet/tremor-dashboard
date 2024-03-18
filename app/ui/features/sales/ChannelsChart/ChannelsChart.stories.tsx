// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import ChannelsChart from "./ChannelsChart";

// Mocks
import { CHANNELS_CHART_DATA } from "@/mocks";

const meta = {
  title: "Components/Sales/ChannelsChart",
  tags: ["autodocs"],
  component: ChannelsChart,
} as Meta<typeof ChannelsChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ChannelsChart title="Channels" channelChartData={CHANNELS_CHART_DATA} />
  ),
};
