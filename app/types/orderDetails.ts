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
