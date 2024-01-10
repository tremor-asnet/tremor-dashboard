"use server";

// Constants
import { ROUTER_API_URL } from "@/constants";

export const getAllProjects = async () => {
  const res = await fetch(`${ROUTER_API_URL}/sale-project`, {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });

  if (!res.ok) {
    const message = `An error has occurred: ${res.status} - ${res.statusText}`;
    throw new Error(message);
  }

  return res.json();
};
