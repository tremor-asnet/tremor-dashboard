export interface Invoice {
  date: string;
  code: string;
  price: number;
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
