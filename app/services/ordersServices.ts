// Constants
import { ROUTER_API_URL } from "@/constants";

// Helpers
import { getErrorMessage } from "@/helpers";

export const getOrders = async () => {
  const res = await fetch(`${ROUTER_API_URL}/orders?page=0&size=10`, {
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

  return res.json();
};
