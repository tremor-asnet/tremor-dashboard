export interface IAnalyticsInfo {
  id: string;
  photo: string;
  name: string;
  description: string;
  price: number | string;
  location: string;
}

export enum CHART_TYPE {
  DAILY = "daily",
  TASK = "task",
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
