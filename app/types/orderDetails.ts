export interface InvoiceHeaderProps {
  id: number;
  createdAt: string;
  orderCode: string;
}

export interface OrderSummaryProps {
  productPrice: number;
  delivery: number;
  taxes: number;
}

export interface TrackOrderProps {
  id: string;
  generateOrderAt: string;
  deliveredAt: string;
  transmitedToCourierAt: string;
  generateOrderId: string;
}

export interface BillingInfoProps {
  ownerName: string;
  companyName: string;
  last4Bank: string;
  email: string;
  vat: string;
}
