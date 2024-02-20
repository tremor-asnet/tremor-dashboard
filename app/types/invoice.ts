export type TInvoiceDetail = {
  id: number;
  name: string;
  quantity: number;
  rate: number;
  amount: number;
};

export type TInvoice = {
  id: number;
  created_at: string;
  dueDate: string;
  details: TInvoiceDetail[];
};
