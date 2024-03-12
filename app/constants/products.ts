// Types
import { OptionType } from "@/types";

type TopSellingProductsType = {
  [key: number]: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
};

export const TOP_SELLING_PRODUCTS_SRC: TopSellingProductsType = {
  1: "/assets/images/products/blue-shoe.webp",
  2: "/assets/images/products/black-mug.webp",
  3: "/assets/images/products/black-chair.webp",
  4: "/assets/images/products/bang-sound.webp",
  5: "/assets/images/products/photo-tools.webp",
};

export const TYPE_PRICE: OptionType[] = [
  {
    option: "BTC",
    value: "1",
  },
  {
    option: "CNY",
    value: "2",
  },
  {
    option: "EUR",
    value: "3",
  },
  {
    option: "GBP",
    value: "4",
  },
  {
    option: "INR",
    value: "5",
  },
  {
    option: "USD",
    value: "6",
  },
];

export const TAGS_PRICE: OptionType[] = [
  {
    option: "Black Friday",
    value: "1",
  },
  {
    option: "Expired",
    value: "2",
  },
  {
    option: "Out of Stock",
    value: "3",
  },
  {
    option: "In Stock",
    value: "4",
  },
  {
    option: "Sale",
    value: "5",
  },
];

export const CATEGORY_PRODUCT: OptionType[] = [
  {
    option: "Clothing",
    value: "1",
  },
  {
    option: "Electronics",
    value: "2",
  },
  {
    option: "Furniture",
    value: "3",
  },
  {
    option: "Others",
    value: "4",
  },
  {
    option: "Real Estate",
    value: "5",
  },
];

export const SIZE_PRODUCT: OptionType[] = [
  {
    option: "Extra Large",
    value: "1",
  },
  {
    option: "Extra Small",
    value: "2",
  },
  {
    option: "Large",
    value: "3",
  },
  {
    option: "Medium",
    value: "4",
  },
  {
    option: "Small",
    value: "5",
  },
];

export const COLOR_PRODUCT: OptionType[] = [
  {
    option: "Black",
    value: "1",
  },
  {
    option: "Blue",
    value: "2",
  },
  {
    option: "Orange",
    value: "3",
  },
  {
    option: "White",
    value: "4",
  },
];

export const PRODUCT_TAGS = {
  IN_STOCK: "In stock",
  OUT_OF_STOCK: "Out of stock",
  BLACK_FRIDAY: "Black Friday",
  SALE: "Sale",
  EXPIRED: "Expired",
};
