export interface Product {
  id: number;
  createdAt: string;
  productName: string;
  price: number;
  isAvailable: boolean;
  providerName: string;
  image: string;
  description?: string;
  quantity?: number;
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

export type TProductInfoDetail = {
  id: number;
  productName: string;
  price: number;
  description?: string;
  quantity?: number;
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

export interface NewInfo
  extends Pick<
    NewProduct,
    | "productName"
    | "description"
    | "providerName"
    | "weight"
    | "category"
    | "quantity"
  > {}

export interface NewSocial
  extends Pick<NewProduct, "shopifyUrl" | "facebookUrl" | "instagramUrl"> {}

export interface NewPricing
  extends Pick<NewProduct, "price" | "currency" | "sku"> {
  tags: string[];
}

export interface EditProductData {
  productName: string;
  price: string;
  tags: number[];
  shopifyUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  quantity: string;
  weight: string;
  category: number;
  description: string;
  image: string;
  currency: number;
  sku: string;
}
