"use server";

import { signIn } from "../auth";
import { AuthError } from "next-auth";
import bcrypt from "bcrypt";
import { ROUTER_API_URL } from "@/constants";

export const authenticate = async (
  prevState: { errorMessage: string } | undefined,
  formData: FormData,
) => {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            errorMessage:
              "Cannot Sign In. Please make sure your email address and password are correct.",
          };
        default:
          return { errorMessage: "Cannot Sign In. Something went wrong." };
      }
    }
    throw error;
  }
};

export async function createNewAccount(
  prevState: { errorMessage: String } | undefined,
  formData: FormData,
) {
  try {
    const formPassword = formData.get("password")?.toString();

    const hashPassword = await bcrypt.hash(formPassword as string, 10);
    formData.set("password", hashPassword);

    const res = await fetch(`${ROUTER_API_URL}/user`, {
      // @ts-ignore
      body: new URLSearchParams(formData),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      method: "POST",
    });

    if (!res.ok) {
      throw new Error("Failed to create new account!");
    }

    return res.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errorMessage: `Things exploded (${error.message})`,
      };
    }

    throw error;
  }
}
