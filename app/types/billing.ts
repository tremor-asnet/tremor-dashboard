import { AGGREGATION_TYPE } from "@/constants";

export interface Invoice {
  id: number;
  createdAt: string;
  invoicePrefix: string;
  totalCost: number;
}

export interface Transaction {
  id: number;
  createdAt: string;
  service: string;
  amount: number;
  type: number;
  status: number;
}
export interface BillingCardData {
  id: number;
  type: string;
  expire: string;
  cardNumber: string;
  holderFullName: string;
  cardLast4Digit: string;
}

export interface SalaryCardData {
  value: number;
  type: AGGREGATION_TYPE;
  currency?: string;
}

export enum STATUS_LIST {
  ERROR = 0,
  SUCCESS = 1,
}

export enum TYPE_LIST {
  DEPOSIT = 0,
}
