export const ORDER_DATA = [
  {
    id: 10421,
    created_at: "2023-11-01T03:20:00+00:00",
    status: 0,
    customer: {
      id: 1,
      avatar:
        "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/team-2.1593fb7f.jpg",
      full_name: "Orlando Imieto",
    },
    products: [
      {
        id: 1,
        name: "Nike Sport V2",
        count: 1,
      },
    ],
    revenue: 140.2,
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
