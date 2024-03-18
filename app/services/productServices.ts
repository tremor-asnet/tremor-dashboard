"use server";

import { revalidatePath } from "next/cache";

// Constants
import {
  PAGE_SIZE,
  PRODUCT_DETAILS_TAG,
  ROUTER_API_URL,
  ROUTES,
} from "@/constants";

// Helpers
import { getErrorMessage } from "@/helpers";

// Types
import { ProductData } from "@/types";

export const getProducts = async (
  pageNum?: number,
  isAvailable?: string,
  query?: string,
) => {
  const isAvailableFilter = !!`${isAvailable}`.length
    ? `&isAvailable=${isAvailable}`
    : "";
  const productNameFilter = query ? "&query=" + query : "";
  const filter = isAvailableFilter + productNameFilter;

  const res = await fetch(
    `${ROUTER_API_URL}/products?page=${pageNum! - 1}&size=${
      PAGE_SIZE.SIZE
    }${filter}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      next: {
        revalidate: 60,
        tags: [ROUTES.PRODUCT_LIST, PRODUCT_DETAILS_TAG],
      },
    },
  );

  if (!res.ok) throw new Error(getErrorMessage(res.status, res.statusText));

  return res.json();
};

export const getProductDetails = async (id: number) => {
  const res = await fetch(`${ROUTER_API_URL}/products/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    cache: "no-store",
  });

  if (!res.ok) throw new Error(getErrorMessage(res.status, res.statusText));

  revalidatePath(ROUTES.PRODUCT_LIST);
  return res.json();
};

export const editProduct = async (id: number, formData: ProductData) => {
  const res = await fetch(`${ROUTER_API_URL}/products/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) throw new Error(getErrorMessage(res.status, res.statusText));

  revalidatePath(ROUTES.PRODUCT_LIST);
  return res.json();
};

export const addNewProduct = async (newProduct: ProductData) => {
  const res = await fetch(`${ROUTER_API_URL}/products`, {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(newProduct),
  });

  if (!res.ok) throw new Error(getErrorMessage(res.status, res.statusText));

  revalidatePath(ROUTES.PRODUCT_LIST);
  return res.json();
};
