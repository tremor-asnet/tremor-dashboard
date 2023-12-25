import { SettingSwitchProps } from "@/types/profile";
import { MdEmail, MdHome, MdSettings } from "react-icons/md";

export const TABS_HEADER = [
  { name: "App", icon: <MdHome /> },
  { name: "Message", icon: <MdEmail /> },
  { name: "Setting", icon: <MdSettings /> },
];

export const ACCOUNT_SWITCH: SettingSwitchProps[] = [
  { label: "Email me when someone follows me", field: "emailMentions" },
  {
    label: "Email me when someone answers on my post",
    field: "emailFollowing",
  },
  { label: "Email me when someone mentions me", field: "emailAnswerPost" },
];

export const APPLICATION_SWITCH: SettingSwitchProps[] = [
  { label: "New launches and projects", field: "newLaunchesProject" },
  { label: "Monthly product updates", field: "monthlyProductUpdate" },
  { label: "Subscribe to newsletter", field: "subscribeToNewsletter" },
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
