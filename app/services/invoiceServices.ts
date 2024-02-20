import { revalidateTag } from "next/cache";

// Constants
import { ROUTER_API_URL, ROUTES } from "@/constants";

// Helpers
import { getErrorMessage } from "@/helpers";

export const getInvoiceDetails = async (id: number) => {
  const res = await fetch(`${ROUTER_API_URL}/invoices/${id}`, {
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

  revalidateTag(ROUTES.INVOICE);
  return res.json();
};
