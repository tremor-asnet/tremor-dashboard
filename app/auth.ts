"use server";

// Libs
import NextAuth from "next-auth";
import { z } from "zod";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

// "Credentials" next-provider: User login by "email" & "password"
import CredentialsProvider from "next-auth/providers/credentials";

// Configs
import { authConfig } from "./auth.config";

// Services
import { getUserByEmail } from "./services";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials, req) {
        const body = await req.json();

        cookies().set({
          name: "remember-me",
          value: body.remember,
          httpOnly: true,
          path: "/",
        });

        try {
          const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(8) })
            .safeParse(credentials);

          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUserByEmail(email);

            if (!user) {
              return null;
            }

            const passwordsMatch = await bcrypt.compare(
              password,
              user.password,
            );

            if (passwordsMatch) {
              return user;
            }

            return null;
          }

          return null;
        } catch (error) {
          throw error;
        }
      },
    }),
  ],
});
