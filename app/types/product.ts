export interface Product {
  id: number;
  createdAt: string;
  productName: string;
  price: number;
  isAvailable: boolean;
  providerName: string;
  image: string;
}

export type TProductInfo = {
  id: string;
  name: string;
  description?: string;
  weight?: string;
  category?: string;
  quantity?: string;
};

export type TPricingInfo = {
  id: string;
  price: string;
  type?: string;
  sku?: string;
  tags?: string[];
};

export type TEditProduct = {
  name: string;
  desc: string;
  weight: number;
  category: number;
  quantity: number;
  price: number;
  currency: number;
  sku: string;
  tags: [number, number];
  image: string;
  shopifyUrl: string;
  facebookUrl: string;
  instagramUrl: string;
};

export interface IProductInfo {
  name?: string;
  description?: string;
  weight?: number;
  category?: number;
  quantity?: number;
}
