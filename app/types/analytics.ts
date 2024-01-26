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

type Fixed = {
  eventType: "dot" | "category" | "bar" | "slice" | "bubble";
  categoryClicked: string;
};

type BaseEvent = Fixed & {
  [key: string]: number | string;
};

export type Event = BaseEvent | null | undefined;
