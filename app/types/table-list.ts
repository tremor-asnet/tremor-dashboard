export type ProductName = {
  name: string;
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
  products: ProductName[];
  revenue: string;
};
