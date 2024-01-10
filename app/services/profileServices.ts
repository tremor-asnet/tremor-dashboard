"use server";

// Constants
import { ROUTER_API_URL } from "@/constants";

// Integration api for Profile
export const getProfile = async () => {
  const res = await fetch(`${ROUTER_API_URL}/profile`, {
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

// Integration api for Project List
export const getProfileProject = async () => {
  const res = await fetch(`${ROUTER_API_URL}/project`, {
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
