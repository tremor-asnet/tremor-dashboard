import { SettingSwitchProps } from "@/types/profile";
import { MdEmail, MdHome, MdSettings } from "react-icons/md";

export const TABS_HEADER = [
  { name: "App", icon: <MdHome /> },
  { name: "Message", icon: <MdEmail /> },
  { name: "Setting", icon: <MdSettings /> },
];

export const ACCOUNT_SWITCH: SettingSwitchProps[] = [
  { label: "Email me when someone follows me" },
  { label: "Email me when someone answers on my post" },
  { label: "Email me when someone mentions me" },
];

export const APPLICATION_SWITCH: SettingSwitchProps[] = [
  { label: "New launches and projects" },
  { label: "Monthly product updates" },
  { label: "Subscribe to newsletter" },
];
