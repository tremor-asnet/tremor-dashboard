import { TrackOrderProps } from "@/types";

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

export const mockTrackOrder: TrackOrderProps = {
  id: "#1832412",
  generateOrderAt: "2024-01-11T02:48:52Z",
  deliveredAt: "2024-01-11T02:48:52Z",
  transmitedToCourierAt: "2024-01-11T02:48:52Z",
  generateOrderId: "2024-01-11T02:48:52Z",
};
