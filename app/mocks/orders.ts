// Types
import { Order } from "@/types";

export const MOCK_ORDERS: Order[] = [
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

export const ORDER_DETAIL_DATA = {
  id: 10421,
  created_at: "2023-11-01T03:20:00+00:00",
  order_code: "KF332",
  order_deliver_price: 14,
  order_tax: 1.95,
  track_order_info: {
    delivered_at: "2024-01-11T09:48:52Z",
    generate_order_at: "2024-01-11T01:50:52Z",
    generate_order_id: 1832412,
    transmited_to_courier_at: "2024-01-11T02:48:52Z",
  },
  billing_info: {
    vat: "FB1235476",
    email: "olover@burrito.com",
    last4_bank: "1234",
    owner_name: "Oliver Liam",
    company_name: "Viking@burrito.com",
  },
};
