// Types
import { OptionType } from "@/types";

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

export const orderListOption: OptionType[] = [
  { option: "Paid", value: "0" },
  { option: "Refunded", value: "2" },
  { option: "Canceled", value: "1" },
];

export const productList: OptionType[] = [
  { option: "Yes", value: "true" },
  { option: "No", value: "false" },
];

export const INVOICE_REGEX = /billing\/\w+/gm;
export const ORDER_LIST_REGEX = /order-list\/\w+/gm;
export const PRODUCT_LIST_REGEX = /product-list\/\w+/gm;
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const NUMBER_REGEX_WITHOUT_0 = /^\d*[1-9]\d*$/;
export const NUMBER_REGEX = /^\d*[0-9]\d*$/;
export const DECIMAL_REGEX = /^\d*[1-9]\d*$/;

export const CDN_KEY = process.env.NEXT_PUBLIC_CDN_KEY;

export const DRAG_ZONE = {
  DEFAULT: {
    TEXT: "Drop file here to upload",
    STYLE: "border-gray-300",
  },
  ON_DRAG: {
    TEXT: "Release the mouse click to upload the photo",
    STYLE: "outline outline-2 outline-[#ebeff4]",
  },
};

export const TRANSACTION_CLASS = {
  INCREASE: "text-few border-few",
  DECREASE: "text-attention border-attention",
  PENDING: "text-primary border-primary",
};

export const PAGE_SIZE = {
  SIZE: 10,
};
