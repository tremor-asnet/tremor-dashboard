import type { Meta, StoryObj } from "@storybook/react";

// Components
import TrackOrder from "./TrackOrder";
import { Card } from "@tremor/react";

// Mocks
import { mockTrackOrder } from "@/mocks/orderDetails";

// Mock data

const meta = {
  title: "Components/TrackOrder",
  component: TrackOrder,
  tags: ["autodocs"],
  argTypes: {
    id: { description: "Id of track order" },
    generateOrderAt: { description: "Received order date of track order" },
    deliveredAt: { description: "Delivered order data of track order" },
    transmitedToCourierAt: {
      description: "Transmited order date of track order",
    },
    generateOrderId: { description: "Generate order date of track order" },
  },
} as Meta<typeof TrackOrder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <Card className="w-full dark:bg-dark_blue px-6 py-7 ring-0 rounded-xl shadow-md">
      <TrackOrder
        id={mockTrackOrder.id}
        generateOrderAt={mockTrackOrder.generateOrderId}
        deliveredAt={mockTrackOrder.deliveredAt}
        transmitedToCourierAt={mockTrackOrder.transmitedToCourierAt}
        generateOrderId={mockTrackOrder.generateOrderId}
      />
    </Card>
  ),
};
