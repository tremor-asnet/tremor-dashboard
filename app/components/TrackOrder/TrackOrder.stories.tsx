import type { Meta, StoryObj } from "@storybook/react";

// Components
import TrackOrder from ".";

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
      data={mockTrackOrder}
      deliveredAt={"27 , JAN"}
      descriptionInfo=""
    />
  ),
};
