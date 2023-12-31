import { ROUTES } from "./routes";

// Link items for Brooklyn
export const ITEMS = [
  { content: "M", label: "My Profile", href: ROUTES.PROFILE },
  { content: "S", label: "Settings", href: ROUTES.SETTING },
];

// Link items Dashboard list
export const ITEMS_DASHBOARD = [
  { label: "Analytics", href: ROUTES.ANALYTICS, content: "A" },
  { label: "Sales", href: ROUTES.SALES, content: "S" },
];

// Link items Profile list
export const ITEMS_PROFILE = [
  { label: "Profile Overview", href: ROUTES.PROFILE, content: "P" },
  { label: "All Projects", href: ROUTES.PROJECTS, content: "A" },
];
