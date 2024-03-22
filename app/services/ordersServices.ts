"use server";

import { revalidateTag } from "next/cache";

// Constants
import { PAGE_SIZE, ROUTER_API_URL, ROUTES } from "@/constants";

// Helpers
import { buildSearchUrl, getErrorMessage } from "@/helpers";

export const getOrders = async ({
  pageNum,
  status,
  query,
  sortBy,
}: {
  pageNum?: number;
  status?: string;
  query?: string;
  sortBy?: string;
}) => {
  const page = pageNum ? pageNum - 1 : 0;

  const params = buildSearchUrl({
    page: page,
    size: PAGE_SIZE.SIZE,
    status: status,
    query: query,
    sortBy: sortBy,
  });

  const res = await fetch(`${ROUTER_API_URL}/orders?${params}`, {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    next: {
      revalidate: 60,
      tags: [ROUTES.ORDER_LIST],
    },
  });

  if (!res.ok) throw new Error(getErrorMessage(res.status, res.statusText));

  return res.json();
};

export const getOrderDetails = async (id: number) => {
  const res = await fetch(`${ROUTER_API_URL}/orders/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    next: {
      // Re-validate every minute
      revalidate: 60,
    },
  });

  if (!res.ok) throw new Error(getErrorMessage(res.status, res.statusText));

  revalidateTag(ROUTES.PRODUCT_LIST);
  return res.json();
};
