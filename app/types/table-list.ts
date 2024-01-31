export interface ProductOrder {
  id: number;
  name: string;
  count: number;
}

// TODO: This type will be change to interface Order
export type ProductTableData = {
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
