"use server";

// Types
import type { User } from "@/types";

// Constants
import {
  ADD_USER_MESSAGE,
  EMAIL_REGEX,
  ROUTER_API_URL,
  UID_KEY,
} from "@/constants";
import { cookies } from "next/headers";

/**
 * Handle get user's account by email
 * @param email: Email address
 * @returns: User's account if email is exist or undefined
 */
const getUserByEmail = async (email: string): Promise<User | undefined> => {
  if (!email.match(EMAIL_REGEX)) {
    return undefined;
  }

  const res = await fetch(`${ROUTER_API_URL}/users?email=${email}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user.");
  }

  const users = await res.json();

  if (users.length === 0) {
    throw new Error("User not found!");
  }

  return users[0];
};

const addNewUser = async (formData: FormData) => {
  let errorMessage;

  try {
    const res = await fetch(`${ROUTER_API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      cache: "no-store",
      // @ts-ignore
      body: new URLSearchParams(formData),
    });

    if (res.status === 403) {
      errorMessage = ADD_USER_MESSAGE.MAIL_EXISTS;
    }

    const data: User[] = await res.json();

    if (!res.ok || !data || data.length <= 0) {
      errorMessage = ADD_USER_MESSAGE.ADD_FAILED;
    }

    return { user: data[0], errorMessage };
  } catch (error) {
    errorMessage = error instanceof Error ? `${error.message}` : `${error}`;
    return { user: null, errorMessage };
  }
};

const updatePinCode = async (codes: number) => {
  const id = cookies().get(UID_KEY)?.value;

  if (!id) {
    throw new Error("Not found User!");
  }

  const res = await fetch(`${ROUTER_API_URL}/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify({ pinCode: codes }),
  });

  const { message } = await res.json();

  if (res.ok) {
    return { isSuccess: true };
  }

  return { errorMessage: message };
};

const getUserById = async (id: number): Promise<User> => {
  const res = await fetch(`${ROUTER_API_URL}/users/${id}`, {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch user.");
  }
  const user: User = await res.json();
  return user;
};

const getPinCode = async () => {
  const id = cookies().get(UID_KEY)?.value;

  if (!id) {
    throw new Error("Not found User!");
  }

  const { pinCode } = await getUserById(parseInt(id));

  return pinCode;
};

export { addNewUser, getUserByEmail, getPinCode, updatePinCode };
