export type TSalesStatistic = {
  id: string;
  type: string;
  amount: number;
  totalAmount: number;
  duration: string;
};

export type TTopSellingProducts = {
  productId: number;
  name: string;
  orders: number;
  value: number;
  adsSpent: number;
  refunds: number;
  refundsType: string;
};

export type TRevenueChart = {
  month: string;
  parameterFacebook?: number;
  parameterGoogle?: number;
};

export type SalesByAgeDataProps = {
  value: number;
  ageRange: string;
};

export type SalesByAgeProps = {
  data: SalesByAgeDataProps[];
  title: string;
};
