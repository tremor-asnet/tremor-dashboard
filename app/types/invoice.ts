export type TInvoiceDetail = {
  id: number;
  productName: string;
  quantity: number;
  price: number;
};

export type TInvoice = {
  id: number;
  createdAt: string;
  dueAt: string;
  products: TInvoiceDetail[];
  totalCost: number;
};
