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
  generateOrderAt: "22 DEC 7:21 AM",
  deliveredAt: "22 DEC 4:54 PM",
  transmitedToCourierAt: "22 DEC 8:10 AM",
  generateOrderId: "22 DEC 7:21 AM",
};
