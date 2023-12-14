import { ROUTES } from "./routes";
// Link items for Brooklyn
export const LINKS = {
  MY_PROFILE: "/",
  SETTING: "/",
};

// Link items for Brooklyn
export const ITEMS = [
  { content: "M", label: "My Profile", href: LINKS.MY_PROFILE },
  { content: "S", label: "Settings", href: LINKS.SETTING },
];

// Link items Dashboard list
export const ITEMS_DASHBOARD = [
  { label: "Analytics", href: ROUTES.ANALYTICS, content: "A" },
  { label: "Sales", href: ROUTES.SALES, content: "S" },
];

// Link items Profile list
export const ITEMS_PROFILE = [
  { label: "Profile Overview", href: ROUTES.PROFILE, content: "P" },
  { label: "All Project", href: ROUTES.PROJECTS, content: "A" },
];
