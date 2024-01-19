export type ProductOrder = {
  id: number;
  name: string;
  count: number;
};

export type TTableList = {
  id: number;
  created_at: string;
  status: number;
  customer: {
    id: number;
    full_name: string;
    avatar?: string;
  };
  products: ProductOrder[];
  revenue: string;
};
