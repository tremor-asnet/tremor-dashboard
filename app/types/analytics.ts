export interface AnalyticsInfoData {
  id: string;
  photo: string;
  name: string;
  description: string;
  price: number;
  location: string;
}

export interface LineChartData {
  date: string;
  "Desktop apps"?: number;
  "Mobile apps"?: number;
}

export interface LineChart {
  id: string;
  display: string;
  descValue: string;
  desc: string;
  modified: string;
  data: LineChartData[];
}

type TFixed = {
  eventType: "dot" | "category" | "bar" | "slice" | "bubble";
  categoryClicked: string;
};

type TBaseEvent = TFixed & {
  [key: string]: number | string;
};

export type TEvent = TBaseEvent | null | undefined;
