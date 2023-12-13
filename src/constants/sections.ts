import { ROUTES } from "./routes";

// Link items for Brooklyn
export const ITEMS = [
  { content: "M", label: "My Profile", href: ROUTES.PROFILE },
  { content: "S", label: "Settings", href: ROUTES.SETTING },
  { content: "L", label: "Logout", href: ROUTES.SIGN_IN },
];

// Link items Dashboard list
export const ITEMS_DASHBOARD = [
  { label: "Analytics", href: ROUTES.ANALYTICS, content: "A" },
  { label: "Sales", href: ROUTES.SALES, content: "S" },
];

// Link items Profile list
export const ITEMS_PROFILE = [
  { label: "profile", href: ROUTES.PROFILE, content: "P" },
  { label: "All Project", href: ROUTES.PROJECTS, content: "A" },
];
