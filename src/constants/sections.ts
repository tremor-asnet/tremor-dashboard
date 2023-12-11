// Link items for Brooklyn
export const LINKS = {
  MY_PROFILE: "/",
  SETTING: "/",
  LOGOUT: "/",
};

export const ITEMS = [
  { content: "M", label: "My Profile", href: LINKS.MY_PROFILE },
  { content: "S", label: "Settings", href: LINKS.SETTING },
  { content: "L", label: "Logout", href: LINKS.LOGOUT },
];

// Link items for dashboard
export const DASHBOARD_LINKS = {
  ANALYTICS: "",
  SALES: "",
};

export const ITEMS_DASHBOARD = [
  { label: "Analytics", href: DASHBOARD_LINKS.ANALYTICS, content: "A" },
  { label: "Sales", href: DASHBOARD_LINKS.SALES, content: "S" },
];

// Link items for Profile
export const PROFILE_LINKS = {
  PROFILE_OVERVIEW: "/",
  ALL_PROJECT: "/",
};

export const ITEMS_PROFILE = [
  { label: "profile", href: PROFILE_LINKS.PROFILE_OVERVIEW, content: "P" },
  { label: "All Project", href: PROFILE_LINKS.ALL_PROJECT, content: "A" },
];
