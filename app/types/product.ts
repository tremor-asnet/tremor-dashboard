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

export interface NewInfo
  extends Pick<
    ProductData,
    | "productName"
    | "description"
    | "providerName"
    | "weight"
    | "category"
    | "quantity"
  > {}

export interface NewSocial
  extends Pick<ProductData, "shopifyUrl" | "facebookUrl" | "instagramUrl"> {}

export interface NewPricing
  extends Pick<ProductData, "price" | "currency" | "sku"> {
  tags: string[];
}

export interface ProductData {
  productName: string;
  price: number;
  tags: number[];
  providerName: string;
  shopifyUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  quantity: number;
  weight: number;
  category: number;
  description: string;
  image: string;
  currency: number;
  sku: string;
}
