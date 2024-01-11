"use server";

// Constants
import { ROUTER_API_URL } from "@/constants";

// Helpers
import { getErrorMessage } from "@/helpers";

export const getAllProjects = async () => {
  const res = await fetch(`${ROUTER_API_URL}/sale-project`, {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });

  if (!res.ok) throw new Error(getErrorMessage(res.status, res.statusText));

  return res.json();
};
