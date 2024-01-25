export interface Product {
  id: number;
  createdAt: string;
  productId: string;
  productName: string;
  price: number;
  isAvailable: boolean;
  providerName: string;
  image: string;
}

export type TProductInfo = {
  id: string;
  name: string;
  description: string;
  weight: string;
  category: string;
  size: string;
};
