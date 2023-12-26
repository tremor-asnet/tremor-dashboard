// Types
import type { User } from "@/types";

// Constants
import { ROUTER_API_URL } from "@/constants";

/**
 * Handle get user's account by email
 * @param email: Email address
 * @returns: User's account if email is exist or undefined
 */
const getUserByEmail = async (email: string): Promise<User | undefined> => {
  if (!email) {
    return undefined;
  }

  const res = await fetch(`${ROUTER_API_URL}/users?email=${email}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user.");
  }

  const users = await res.json();

  return users[0];
};

export { getUserByEmail };
