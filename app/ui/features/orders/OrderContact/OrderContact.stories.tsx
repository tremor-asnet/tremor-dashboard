import type { Meta, StoryObj } from "@storybook/react";

// Components
import OrderContact from "./OrderContact";
import { Card } from "@tremor/react";

const propsDefault = {
  name: "Leather Wallet",
  url: "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/black-chair.b2719b4f.jpeg",
  date: 18,
};

const meta = {
  title: "Components/OrderContact",
  component: OrderContact,
  tags: ["autodocs"],
  argTypes: {
    name: { description: "Product name of order detail contact" },
    url: { description: "Product url order detail contact" },
    date: { description: "Date of order detail contact" },
  },
} as Meta<typeof OrderContact>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <Card className="w-full dark:bg-dark_blue px-6 py-7 ring-0 rounded-xl shadow-md">
      <OrderContact {...propsDefault} />
    </Card>
  ),
};
