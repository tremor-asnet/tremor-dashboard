"use server";

// Libs
import { AuthError } from "next-auth";
import bcrypt from "bcrypt";

// Auth
import { signIn } from "@/auth";

// Constants
import { ROUTER_API_URL } from "@/constants";

import { User } from "@/types";

import { addNewUser, updateDataFirestore } from "@/services";

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
  const formPassword = formData.get("password")?.toString();

  const hashPassword = await bcrypt.hash(formPassword as string, 10);
  formData.set("password", hashPassword);

  const { user, errorMessage } = await addNewUser(formData);

  if (user) {
    const { email, id, name } = user;
    await updateDataFirestore({
      data: { email, name },
      entity: "users",
      id,
    });

    return { isSuccess: true };
  }

  return { errorMessage };
}
