export const STATISTICS_DATA = [
  {
    id: "1",
    type: "Sales",
    amount: 230220,
    amountChange: 55,
    duration: "since last month",
    amountChangeType: 0,
  },
  {
    id: "2",
    type: "Customers",
    amount: 3200,
    amountChange: 12,
    duration: "since last month",
    amountChangeType: 0,
  },
  {
    id: "3",
    type: "Avg. Revenue",
    amount: 1200,
    amountChange: 213,
    duration: "since last month",
    amountChangeType: 0,
  },
];

export const CHANNELS_CHART_DATA = {
  sale_total: 1200000,
  sale_social_media: 700000,
  channels: [
    { id: 1, name: "facebook", percent: 15 },
    { id: 2, name: "direct", percent: 20 },
    { id: 3, name: "organic", percent: 10 },
    { id: 4, name: "referral", percent: 55 },
  ],
};

export const TOP_SELLING_PRODUCTS_DATA = [
  {
    productId: 1,
    name: "Nike v22 Running",
    orders: 8232,
    value: 130992,
    adsSpent: 9500,
    refunds: 13,
    refundsType: "increase",
  },
  {
    productId: 2,
    name: "Business Kit (Mug + Notebook)",
    orders: 12821,
    value: 80250,
    adsSpent: 4200,
    refunds: 40,
    refundsType: "decrease",
  },
  {
    productId: 3,
    name: "Black Chair",
    orders: 2421,
    value: 40600,
    adsSpent: 9430,
    refunds: 54,
    refundsType: "increase",
  },
  {
    productId: 4,
    name: "Wireless Charger",
    orders: 5921,
    value: 91300,
    adsSpent: 7364,
    refunds: 5,
    refundsType: "decrease",
  },
  {
    productId: 5,
    name: "Mountain Trip Kit (Camera + Backpack)",
    orders: 921,
    value: 140925,
    adsSpent: 20531,
    refunds: 121,
    refundsType: "increase",
  },
];

export const REVENUE_CHART_DATA = {
  title: "Revenue",
  data: [
    {
      month: "Apr",
      "Facebook Ads": 50,
      "Google Ads": 0,
    },
    {
      month: "May",
      "Facebook Ads": 100,
      "Google Ads": 30,
    },
    {
      month: "Jun",
      "Facebook Ads": 200,
      "Google Ads": 40,
    },
    {
      month: "Jul",
      "Facebook Ads": 200,
      "Google Ads": 110,
    },
    {
      month: "Aug",
      "Facebook Ads": 400,
      "Google Ads": 150,
    },
    {
      month: "Sep",
      "Facebook Ads": 340,
      "Google Ads": 210,
    },
    {
      month: "Oct",
      "Facebook Ads": 500,
      "Google Ads": 290,
    },
    {
      month: "Nov",
      "Facebook Ads": 450,
      "Google Ads": 250,
    },
    {
      month: "Dec",
      "Facebook Ads": 700,
      "Google Ads": 290,
    },
  ],
};
export const SALES_AGE_CHART = [
  {
    value: 34,
    ageRange: "16-20",
  },
  {
    value: 23,
    ageRange: "21-25",
  },
  {
    value: 45,
    ageRange: "26-30",
  },
  {
    value: 53,
    ageRange: "36-40",
  },
  {
    value: 26,
    ageRange: "40+",
  },
];
