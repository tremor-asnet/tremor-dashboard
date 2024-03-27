// Libs
import type { NextAuthConfig } from "next-auth";

// Constants
import { ROUTES } from "@/constants";

const maxAge = 24 * 60 * 60;

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: ROUTES.SIGN_IN,
  },
  trustHost: true,
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = ![ROUTES.SIGN_IN, ROUTES.SIGN_UP].includes(
        nextUrl.pathname,
      );

      if (isLoggedIn) {
        // Move to Homepage if logged in
        if (nextUrl.pathname === "/" || !isOnDashboard) {
          return Response.redirect(new URL(ROUTES.HOME, nextUrl));
        }

        return true;
      } else {
        if (!isOnDashboard) {
          return true;
        }
        // Move to Sign in page if not logged in and try to access the dashboard
        return Response.redirect(new URL(ROUTES.SIGN_IN, nextUrl));
      }
    },
  },
  session: {
    maxAge,
  },
  providers: [],
};
