// Libs
import type { NextAuthConfig } from "next-auth";

// Constants
import { ROUTES } from "@/constants";

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

      if (isOnDashboard) {
        // Redirect unauthenticated users to login page
        return isLoggedIn;
      }

      if (isLoggedIn) {
        return Response.redirect(new URL(ROUTES.HOME, nextUrl));
      }

      return true;
    },
  },
  providers: [],
};
