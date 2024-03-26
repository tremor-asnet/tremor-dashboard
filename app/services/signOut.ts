"use client";

export const signOut = () => fetch(`/api/logout`, { method: "POST" });
