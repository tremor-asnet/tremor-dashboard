"use client";

import { getErrorMessage } from "@/helpers";

export const signOut = async () => {
  const res = await fetch(`/api/logout`, { method: "POST" });

  if (!res.ok) {
    throw new Error(getErrorMessage(res.status, res.statusText));
  }
};
