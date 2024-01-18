import type { Meta, StoryObj } from "@storybook/react";

// Components
import TrackOrder from ".";
import { TRACK_ORDER } from "@/mocks/orders";

// Mock data

const meta = {
  title: "Components/TrackOrder",
  component: TrackOrder,
  tags: ["autodocs"],
} as Meta<typeof TrackOrder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <TrackOrder
      id={TRACK_ORDER.ID}
      generateOrderId={TRACK_ORDER.GENERATION_ORDER_ID}
      deliveredAt={TRACK_ORDER.DELIVERED_AT}
      transmitedToCourierAt={TRACK_ORDER.TRANSMITED_TO_COURIER_AT}
      generateOrderAt={TRACK_ORDER.GENERATE_ORDER_AT}
    />
  ),
};
