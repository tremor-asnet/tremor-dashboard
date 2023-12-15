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

export const LIST_PROJECTS = [
  {
    projectSrc: "/assets/images/profile-project.webp",
    avatarSrc: "/images/avatar/avatar-xs.webp",
    name: "modern",
    desc: "As Uber works through a huge amount of internal management turmoil.",
    hashtag: "#1",
  },
  {
    projectSrc: "/assets/images/profile-project.webp",
    avatarSrc: "/images/avatar/avatar-xs.webp",
    name: "scandinavian",
    desc: "Music is something that everyone has their own specific opinion about.",
    hashtag: "#2",
  },
  {
    projectSrc: "/assets/images/profile-project.webp",
    avatarSrc: "/images/avatar/avatar-xs.webp",
    name: "minimalist",
    desc: "As Uber works through a huge amount of internal management turmoil.",
    hashtag: "#3",
  },
  {
    projectSrc: "/assets/images/profile-project.webp",
    avatarSrc: "/images/avatar/avatar-xs.webp",
    name: "gothic",
    desc: "Why would anyone pick blue over pink? Pink is obviously a better color.",
    hashtag: "#4",
  },
];
