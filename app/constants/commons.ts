// Types
import { ListOption } from "@/types";

export const ITEM_ACTION_PROJECT = [
  {
    key: "act",
    label: "Action",
  },
  {
    key: "anotherAct",
    label: "Another action",
  },
  {
    key: "somethingElse",
    label: "Something else here",
  },
];

export const ITEM_ACTION_SALES_DATE = [
  {
    key: "last7Days",
    label: "Last 7 days",
  },
  {
    key: "lastWeek",
    label: "Last week",
  },
  {
    key: "last30Days",
    label: "Last 30 days",
  },
];

export const URL_AVATAR_PROJECT = [
  {
    avatar: "/images/avatar/avatar-xs.webp",
  },
  {
    avatar: "/images/avatar/avatar-xs.webp",
  },
  {
    avatar: "/images/avatar/avatar-xs.webp",
  },
];

// Social link
export const SOCIAL_LINK = {
  facebook: "https://www.facebook.com/",
  twitter: "https://twitter.com/",
  instagram: "https://instagram.com",
};

export const REMEMBER_ME_COOKIES_KEY = "remember-me";
export const AUTH_SESSION_COOKIES_KEY = "authjs.session-token";

export const orderListOption: ListOption[] = [
  { option: "Paid", value: 0 },
  { option: "Refunded", value: 2 },
  { option: "Canceled", value: 1 },
];

export const ProductListOption: ListOption[] = [
  { option: "Yes", value: 0 },
  { option: "No", value: 1 },
];

export const ORDER_LIST_REGEX = /order-list\/\w+/gm;
export const PRODUCT_LIST_REGEX = /product-list\/\w+/gm;
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
