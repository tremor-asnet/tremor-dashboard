// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import DataGrid from ".";

// Types
import { ColumnType, TOrder } from "@/types";

// Constants
import { STATUS_TEXT } from "@/constants";

const meta = {
  title: "Components/common/DataGrid",
  tags: ["autodocs"],
  component: DataGrid,
} as Meta<typeof DataGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

const data: TOrder[] = [
  {
    id: 10425,
    created_at: "2023-11-01T10:20:00+00:00",
    status: 1,
    customer: {
      id: 15,
      avatar:
        "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/team-2.1593fb7f.jpg",
      full_name: "Orlando Imieto",
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
    created_at: "2023-11-01T03:20:00+00:00",
    status: 0,
    customer: {
      id: 1,
      avatar:
        "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/team-2.1593fb7f.jpg",
      full_name: "Orlando Imieto",
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
    created_at: "2023-11-01T11:03:00+00:00",
    status: 0,
    customer: {
      id: 9,
      avatar:
        "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/team-2.1593fb7f.jpg",
      full_name: "Orlando Imieto",
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
];

const columns: ColumnType<TOrder>[] = [
  {
    key: "id",
    title: "Id",
  },
  {
    key: "created_at",
    title: "Date",
  },
  {
    key: "status",
    title: "Status",
    customNode: (_, { status }) => (
      <div className="flex justify-start text-xs dark:text-white font-semibold leading-[15px] tracking-[0.4px] capitalize order-status">
        <p className="text-xs dark:text-white font-semibold leading-[15px] tracking-[0.4px] capitalize order-status">
          {STATUS_TEXT[status]}
        </p>
      </div>
    ),
  },
];

export const DataTableDefault: Story = {
  render: () => <DataGrid data={data} columns={columns} />,
};
