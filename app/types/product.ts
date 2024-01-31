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
  productName: string;
  description?: string;
  weight?: number;
  category?: string;
  quantity?: number;
  collection?: string;
  price?: string;
  color?: string;
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
  productName: string;
  description: string;
  weight: number;
  category: number;
  quantity: number;
}

export interface NewProduct {
  productName: string;
  description: string;
  weight: number;
  category: number;
  quantity: number;
  price: number;
  isAvailable: true;
  providerName: string;
  image: string;
  currency: number;
  sku: string;
  tags: number[];
  shopifyUrl: string;
  facebookUrl: string;
  instagramUrl: string;
}

export interface ISocial
  extends Pick<NewProduct, "shopifyUrl" | "facebookUrl" | "instagramUrl"> {}
