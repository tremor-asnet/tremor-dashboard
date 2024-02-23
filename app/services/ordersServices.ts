"use server";

import { revalidateTag } from "next/cache";

// Constants
import { PAGE_SIZE, ROUTER_API_URL, ROUTES } from "@/constants";

// Helpers
import { getErrorMessage } from "@/helpers";

export const getOrders = async (
  pageNum: number,
  status: number,
  query: number,
) => {
  const statusFilter = status >= 0 ? "&status=" + status : "";
  const queryFilter = query >= 0 ? "&query=" + query : "";
  const filter = statusFilter + queryFilter;

  const res = await fetch(
    `${ROUTER_API_URL}/orders?page=${pageNum - 1}&size=${
      PAGE_SIZE.SIZE
    }${filter}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      next: {
        revalidate: 60,
        tags: [ROUTES.ORDER_LIST],
      },
    },
  );

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
