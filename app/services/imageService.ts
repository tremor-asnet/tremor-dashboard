// Helpers
import { getErrorMessage } from "@/helpers";

// Types
import { CdnResponse } from "@/types";

// Constants
import { CDN_KEY } from "@/constants";

export const uploadImage = async (raw: File): Promise<CdnResponse> => {
  const form = new FormData();
  form.append("image", raw);

  const res = await fetch(`https://api.imgbb.com/1/upload?key=${CDN_KEY}`, {
    method: "POST",
    body: form,
  });

  if (!res.ok) throw new Error(getErrorMessage(res.status, res.statusText));
  return res.json();
};
