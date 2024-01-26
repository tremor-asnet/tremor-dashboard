export interface InvoiceHeaderData {
  id: number;
  createdAt: string;
  orderCode: string;
}

export interface OrderSummaryData {
  productPrice: number;
  delivery: number;
  taxes: number;
}

export interface TrackOrderData {
  id: string;
  generateOrderAt: string;
  deliveredAt: string;
  transmitedToCourierAt: string;
  generateOrderId: string;
  status?: number;
}

export interface BillingInfoData {
  ownerName: string;
  companyName: string;
  cardLast4Digit: string;
  email: string;
  vat: string;
}
