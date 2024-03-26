// Libs
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// Auth
import { signOut } from "@/auth";

// Constants
import {
  AUTH_SESSION_COOKIES_KEY,
  REMEMBER_ME_COOKIES_KEY,
  UID_KEY,
} from "@/constants";

export async function POST() {
  try {
    cookies().delete(REMEMBER_ME_COOKIES_KEY);
    cookies().delete(UID_KEY);
    cookies().delete(
      (process.env.NODE_ENV === "production" &&
        process.env.NEXT_PUBLIC_AUTH_SESSION_TOKEN_KEY) ||
        AUTH_SESSION_COOKIES_KEY,
    );

    await signOut({ redirect: false });

    return NextResponse.json({ data: true });
  } catch (error) {
    return NextResponse.error();
  }
}
