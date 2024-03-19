// Types
import type { User } from "@/types";

// Constants
import { EMAIL_REGEX, ROUTER_API_URL } from "@/constants";

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

  const data: User[] = await res.json();

  if (!res.ok || !data || data.length === 0) {
    throw new Error("Failed to create new account. Please try again!");
  }

  return data[0];
};

export { addNewUser, getUserByEmail };
