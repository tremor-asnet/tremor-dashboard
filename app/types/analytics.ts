export interface IAnalyticsInfo {
  id: string;
  photo: string;
  name: string;
  description: string;
  price: number;
  location: string;
}

export enum CHART_TYPE {
  SALE = "sale",
  PERFORMANCE = "performance",
}

export type LINE_CHART_DATA = {
  date: string;
  "Desktop apps"?: number;
  "Mobile apps"?: number;
};

export type LINE_CHART = {
  id: string;
  display: string;
  descValue: string;
  desc: string;
  modified: string;
  data: LINE_CHART_DATA[];
};

type TFixedProps = {
  eventType: "dot" | "category" | "bar" | "slice" | "bubble";
  categoryClicked: string;
};

type TBaseEventProps = TFixedProps & {
  [key: string]: number | string;
};

export type TEventProps = TBaseEventProps | null | undefined;
