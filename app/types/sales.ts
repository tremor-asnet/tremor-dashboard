export type TSalesStatistic = {
  id: string;
  type: string;
  amount: string;
  totalAmount: string;
  duration: string;
};

export type TTopSellingProducts = {
  product_id: number;
  name: string;
  orders: string;
  value: string;
  ads_spent: string;
  refunds: number;
  refunds_type: string;
};

export type TRevenueChart = {
  date: string;
  "Facebook Ads"?: number;
  "Google Ads"?: number;
};
