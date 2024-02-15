import { BillingInfoData, TrackOrderData } from "@/types";

export const mockInvoiceHeader = {
  id: 241342,
  createdAt: "2024-01-11T01:48:52Z",
  orderCode: "KF332",
};

export const mockOrderSummary = {
  productPrice: 90,
  delivery: 14,
  taxes: 1.95,
};

export const mockTrackOrder: TrackOrderData = {
  id: "#1832412",
  generateOrderAt: "2024-01-11T02:48:52Z",
  deliveredAt: "2024-01-11T02:48:52Z",
  transmitedToCourierAt: "2024-01-11T02:48:52Z",
  generateOrderId: "2024-01-11T02:48:52Z",
};

export const mockBillingInfo: BillingInfoData = {
  id: "1",
  ownerName: "Oliver Liam",
  companyName: "Viking Burrito",
  cardLast4Digit: "1234",
  email: "oliver@burrito.com",
  vat: "FRB1235476",
};

export const mockBilling: BillingInfoData[] = [
  {
    id: "1",
    ownerName: "Oliver Liam",
    companyName: "Viking Burrito",
    cardLast4Digit: "1234",
    email: "oliver@burrito.com",
    vat: "FRB1235476",
  },
  {
    id: "2",
    ownerName: "Oliver Liam",
    companyName: "Viking Burrito",
    cardLast4Digit: "1234",
    email: "oliver@burrito.com",
    vat: "FRB1235476",
  },
  {
    id: "3",
    ownerName: "Oliver Liam",
    companyName: "Viking Burrito",
    cardLast4Digit: "1234",
    email: "oliver@burrito.com",
    vat: "FRB1235476",
  },
];
