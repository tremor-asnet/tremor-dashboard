import type { Meta, StoryObj } from "@storybook/react";

// Components
import TrackOrder from "./TrackOrder";

// Mocks
import { mockTrackOrder } from "@/mocks/orderDetails";

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
      id={mockTrackOrder.id}
      generateOrderAt={mockTrackOrder.generateOrderId}
      deliveredAt={mockTrackOrder.deliveredAt}
      transmitedToCourierAt={mockTrackOrder.transmitedToCourierAt}
      generateOrderId={mockTrackOrder.generateOrderId}
    />
  ),
};
