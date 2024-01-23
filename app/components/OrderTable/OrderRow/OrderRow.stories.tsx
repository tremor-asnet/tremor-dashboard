import type { Meta, StoryObj } from "@storybook/react";
import OrderRow from ".";
import { TProductTable } from "@/types";

const meta = {
  title: "Components/OrderTable/OrderRow",
  component: OrderRow,
  tags: ["autodocs"],
} as Meta<typeof OrderRow>;

export default meta;

type Story = StoryObj<typeof meta>;

const data: TProductTable = {
  id: 1,
  createdAt: "2023-11-22",
  status: 1,
  customer: {
    id: 1,
    full_name: "Customer 001",
    avatar:
      "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/team-2.1593fb7f.jpg",
  },
  products: [
    {
      id: 230019,
      name: "Christopher Knight Home",
      count: 1,
    },
    {
      id: 87120,
      name: "Bar Height Swivel Barstool",
      count: 2,
    },
  ],
  revenue: "revenue",
};

export const PaginationDefault: Story = {
  render: () => <OrderRow item={data} />,
};
