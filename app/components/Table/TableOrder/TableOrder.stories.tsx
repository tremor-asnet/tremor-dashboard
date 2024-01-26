import type { Meta, StoryObj } from "@storybook/react";

// Components
import TableOrder from "./TableOrder";

// Types
import { Order } from "@/types";

const meta = {
  title: "Components/Tables/TableOrder",
  component: TableOrder,
  tags: ["autodocs"],
} as Meta<typeof TableOrder>;

const orders: Order[] = [
  {
    id: 10425,
    createdAt: "2023-11-01T10:20:00+00:00",
    status: 1,
    customer: {
      id: 15,
      avatar:
        "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/team-2.1593fb7f.jpg",
      fullName: "Orlando Imieto",
    },
    revenue: 44.9,
    products: [
      {
        id: 6,
        name: "Phone Case Pink",
        count: 2,
        url: "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/black-chair.b2719b4f.jpeg",
        price: 90,
      },
    ],
  },
  {
    id: 12345,
    createdAt: "2023-11-01T03:20:00+00:00",
    status: 0,
    customer: {
      id: 1,
      avatar:
        "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/team-2.1593fb7f.jpg",
      fullName: "Orlando Imieto",
    },
    revenue: 140.2,
    products: [
      {
        id: 12,
        name: "Office Papers",
        count: 1,
        url: "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/black-chair.b2719b4f.jpeg",
        price: 77,
      },
    ],
  },
  {
    id: 12350,
    createdAt: "2023-11-01T11:03:00+00:00",
    status: 0,
    customer: {
      id: 9,
      avatar:
        "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/team-2.1593fb7f.jpg",
      fullName: "Orlando Imieto",
    },
    revenue: 112.5,
    products: [
      {
        id: 10,
        name: "Watter Bottle India",
        count: 3,
        url: "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/black-chair.b2719b4f.jpeg",
        price: 7,
      },
    ],
  },
  {
    id: 12356,
    createdAt: "2023-11-01T09:20:00+00:00",
    status: 2,
    customer: {
      id: 13,
      avatar:
        "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/team-2.1593fb7f.jpg",
      fullName: "Orlando Imieto",
    },
    revenue: 23.9,
    products: [
      {
        id: 10,
        name: "Watter Bottle India",
        count: 3,
        url: "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/black-chair.b2719b4f.jpeg",
        price: 34.35,
      },
    ],
  },
  {
    id: 12352,
    createdAt: "2023-11-01T16:05:00+00:00",
    status: 0,
    customer: {
      id: 16,
      avatar:
        "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/team-2.1593fb7f.jpg",
      fullName: "Orlando Imieto",
    },
    revenue: 350,
    products: [
      {
        id: 10,
        name: "Watter Bottle India",
        count: 3,
        url: "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/black-chair.b2719b4f.jpeg",
        price: 71,
      },
    ],
  },
];

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <TableOrder orders={orders} />,
};
