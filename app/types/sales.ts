export interface SalesStatisticData {
  id: string;
  type: string;
  amount: number;
  amountChange: number;
  duration: string;
  amountChangeType: number;
}

export interface TopSellingProductsData {
  productId: number;
  name: string;
  orders: number;
  value: number;
  adsSpent: number;
  refunds: number;
  refundsType: string;
}

export interface RevenueChartData {
  month: string;
  parameterFacebook?: number;
  parameterGoogle?: number;
}

export interface SalesByAgeData {
  value: number;
  ageRange: string;
}

export interface SalesByAgeContainer {
  data: SalesByAgeData[];
  title: string;
}

export interface SalesByCountryData {
  id: string;
  flag: string;
  country: string;
  sales: number;
  value: number;
  bounce: number;
}
