export type ProductOrder = {
  id: number;
  name: string;
  count: number;
};

export type TProductTable = {
  id: number;
  createdAt: string;
  status: number;
  customer: {
    id: number;
    full_name: string;
    avatar?: string;
  };
  products: ProductOrder[];
  revenue: number;
};
