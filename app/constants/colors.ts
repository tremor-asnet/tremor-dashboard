type ColorChannelsChartType = {
  [key: number]: string;
  1: string;
  2: string;
  3: string;
  4: string;
};

export const CHANNELS_CHART_COLOR: ColorChannelsChartType = {
  1: "blue-500",
  2: "red-500",
  3: "primary",
  4: "gray-500",
};

export const TRANSACTION_COLOR = {
  INCREASE: "few",
  DECREASE: "attention",
  PENDING: "primary",
};
