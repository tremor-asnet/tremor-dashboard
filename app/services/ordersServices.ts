// Constants
import { ROUTER_API_URL } from "@/constants";

// Helpers
import { getErrorMessage } from "@/helpers";

export const getOrders = async () => {
  const res = await fetch(`${ROUTER_API_URL}/orders`, {
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

export const getOrderDetails = async () => {
  const res = await fetch(`${ROUTER_API_URL}/orders/detail`, {
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
