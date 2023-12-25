"use server";

import { ROUTER_API_URL } from "@/constants";

// Integration api for Analytics page
export const getAnalytics = async () => {
  const res = await fetch(`${ROUTER_API_URL}/analytics`, {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });

  if (!res.ok) {
    const message = `An error has occured: ${res.status} - ${res.statusText}`;
    throw new Error(message);
  }

  return res.json();
};
