import { Profile } from "@/types/profile";

export const PROFILE_HEADER = {
  avatarUrl: "/images/avatar/avatar-lg.webp",
  alt: "image",
  name: "Richard Davis",
  role: "CEO / Co-Founder",
};

export const PROFILE_ITEM = {
  src: "/images/avatar/avatar-md.webp",
  alt: "image",
  name: "Sophie.B",
  description: "Hi! I need more information..",
};

export const PROFILE_CONVERSATIONS: Profile[] = [
  {
    avatar: "/images/avatar/avatar-md.webp",
    alt: "image",
    name: "Anne Marie",
    lastConversation: "Awesome work, can you..",
  },
  {
    avatar: "/images/avatar/avatar-lg.webp",
    alt: "image",
    name: "Ivanna",
    lastConversation: "About files I can..",
  },
  {
    avatar: "/images/avatar/avatar-xs.webp",
    alt: "image",
    name: "Peterson",
    lastConversation: "Have a great afternoon..",
  },
  {
    avatar: "/images/avatar/avatar-md.webp",
    alt: "image",
    name: "Sophie.B",
    lastConversation: "Hi! I need more information..",
  },
  {
    avatar: "/images/avatar/avatar-sm.webp",
    alt: "image",
    name: "Nick Daniel",
    lastConversation: "Hi! I need more information..",
  },
];

export const PROFILE_INFO_PROJECT_CARD = [
  {
    id: 1,
    cover: "/assets/images/profile-project.webp",
    participants: [
      { avatar: "/images/avatar/avatar-xs.webp" },
      { avatar: "/images/avatar/avatar-xs.webp" },
    ],
    primaryName: "modern",
    description:
      "As Uber works through a huge amount of internal management turmoil.",
    secondaryName: "#1",
  },
  {
    id: 2,
    cover: "/assets/images/profile-project.webp",
    participants: [
      { avatar: "/images/avatar/avatar-xs.webp" },
      { avatar: "/images/avatar/avatar-xs.webp" },
    ],
    primaryName: "scandinavian",
    description:
      "As Uber works through a huge amount of internal management turmoil.",
    secondaryName: "#2",
  },
  {
    id: 3,
    cover: "/assets/images/profile-project.webp",
    participants: [
      { avatar: "/images/avatar/avatar-xs.webp" },
      { avatar: "/images/avatar/avatar-xs.webp" },
    ],
    primaryName: "minimalist",
    description:
      "Different people have different taste, and various types of music.",
    secondaryName: "#2",
  },
  {
    id: 4,
    cover: "/assets/images/profile-project.webp",
    participants: [
      { avatar: "/images/avatar/avatar-xs.webp" },
      { avatar: "/images/avatar/avatar-xs.webp" },
    ],
    primaryName: "gothic",
    description:
      "Why would anyone pick blue over pink? Pink is obviously a better color.",
    secondaryName: "#4",
  },
];
