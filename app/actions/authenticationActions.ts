"use server";

// Libs
import { AuthError } from "next-auth";
import bcrypt from "bcrypt";

// Auth
import { signIn } from "@/auth";

// Constants
import { ROUTER_API_URL } from "@/constants";

import { User } from "@/types";

import { addDataFirestore } from "@/services";

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
  prevState: { errorMessage?: String; isSuccess?: boolean } | undefined,
  formData: FormData,
) {
  try {
    const formPassword = formData.get("password")?.toString();

    const hashPassword = await bcrypt.hash(formPassword as string, 10);
    formData.set("password", hashPassword);

    const res = await fetch(`${ROUTER_API_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      cache: "no-store",
      // @ts-ignore
      body: new URLSearchParams(formData),
    });

    if (res.status === 403) {
      throw new Error("Account with this email already exists!");
    }

    if (!res.ok) {
      throw new Error("Failed to create new account. Please try again!");
    } else {
      const data: User[] = await res.json();
      const { email, id, name } = data[0];

      await addDataFirestore("users", { email, id, name });

      return { isSuccess: true };
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errorMessage: `${error.message}`,
      };
    }

    throw error;
  }
}
