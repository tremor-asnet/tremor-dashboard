export type TSalesStatistic = {
  id: string;
  type: string;
  amount: string;
  totalAmount: string;
  duration: string;
};

export type TTopSellingProducts = {
  productId: number;
  name: string;
  orders: string;
  value: string;
  adsSpent: string;
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
