import type { Meta, StoryObj } from "@storybook/react";

// Components
import OrderContact from "./OrderContact";

const propsDefault = {
  name: "Leather Wallet",
  url: "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/black-chair.b2719b4f.jpeg",
  date: "2024-01-11T09:48:52Z",
};

const meta = {
  title: "Components/OrderContact",
  component: OrderContact,
  tags: ["autodocs"],
} as Meta<typeof OrderContact>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <OrderContact {...propsDefault} />,
};
