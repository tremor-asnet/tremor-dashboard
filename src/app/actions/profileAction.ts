"use server";

const baseURLProfileConversations =
  "https://fine-rose-cygnet-hem.cyclic.app/api";

export const getProfileConversations = async () => {
  const res = await fetch(`${baseURLProfileConversations}/profile`, {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });

  if (!res.ok) {
    const message = `An error has occured: ${res.status} - ${res.statusText}`;
    throw new Error(message);
  }

  return res.json();
};

const baseURLProfileProject = "https://fine-rose-cygnet-hem.cyclic.app/api";

export const getProfileProject = async () => {
  const res = await fetch(`${baseURLProfileProject}/project`, {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });

  if (!res.ok) {
    const message = `An error has occured: ${res.status} - ${res.statusText}`;
    throw new Error(message);
  }

  return res.json();
};
