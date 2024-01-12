import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import { cookies } from "next/headers";

// Types
import type { GetServerSidePropsContext } from "next";

// Constants
import { REMEMBER_ME } from "@/constants";

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$|.*\\.webp$).*)"],
};

export default function auth(params: GetServerSidePropsContext) {
  if (authConfig.session) {
    authConfig.session.maxAge =
      cookies().get(REMEMBER_ME)?.value === "true"
        ? parseInt(process.env.NEXT_PUBLIC_EXPIRED_TIME_REMEMBER || "259200") // 3 days
        : parseInt(process.env.NEXT_PUBLIC_EXPIRED_TIME_NO_REMEMBER || "86400"); // 1 day
  }

  return NextAuth(authConfig).auth(params);
}
