export interface OrderProduct {
  id: number;
  name: string;
  count: number;
  price?: number;
  url?: string;
}

export interface Order {
  id: number;
  createdAt: string;
  status: number;
  customer: {
    id: number;
    fullName: string;
    avatar?: string;
  };
  products: OrderProduct[];
  revenue: number;
}

export type OrderDetail = {
  id: number;
  order_code: string;
  order_deliver_price: number;
  order_tax: number;
  created_at: string;
  track_order_info: {
    generate_order_id: string;
    generate_order_at: string;
    transmited_to_courier_at: string;
    delivered_at: string;
  };
  billing_info: {
    last4_bank: string;
    owner_name: string;
    company_name: string;
    email: string;
    vat: string;
  };
};
