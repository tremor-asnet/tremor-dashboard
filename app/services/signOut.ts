"use client";

import { SIGN_OUT_MESSAGE } from "@/constants";
import { getErrorMessage } from "@/helpers";

export const signOut = async () => {
  const res = await fetch(`/api/logout`, { method: "POST" });

  if (!res.ok) {
    throw new Error(getErrorMessage(res.status, res.statusText));
  }

  const { data } = await res.json();

  // Will throw error when failed signOut
  if (!data) {
    throw new Error(SIGN_OUT_MESSAGE.FAILED);
  }
};
