import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import { cookies } from "next/headers";
import type { GetServerSidePropsContext } from "next";

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$|.*\\.webp$).*)"],
};

export default function auth(params: GetServerSidePropsContext) {
  const cookieStore = cookies();

  if (cookieStore.get("remember-me")?.value === "true" && authConfig.session) {
    authConfig.session.maxAge = 3 * 24 * 60 * 60;
  }

  if (cookieStore.get("remember-me")?.value === "false" && authConfig.session) {
    authConfig.session.maxAge = 24 * 60 * 60;
  }

  return NextAuth(authConfig).auth(params);
}
