// Constants
import { ROUTER_API_URL } from "@/constants";

// Helpers
import { getErrorMessage } from "@/helpers";

// Types
import { ProductData } from "@/types";

export const getProducts = async () => {
  const res = await fetch(`${ROUTER_API_URL}/products`, {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });

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
  return res.json();
};
