// Types
import { Project } from "@/types";

// Components
import {
  SlackIcon,
  SpotifyIcon,
  DesignIcon,
  AsanaIcon,
  InvisionIcon,
  AtlassianIcon,
} from "@/components/index";

//Constans
import { URL_AVATAR_PROJECT } from "@/constants/index";

export const PROJECT_DATA: Project[] = [
  {
    id: "1",
    avatars: URL_AVATAR_PROJECT,
    title: "Slack Bot",
    date: "02.03.22",
    participant: 5,
    description:
      "If everything I did failed - which it doesn't, I think that it actually succeeds.",
    icon: <SlackIcon />,
  },
  {
    id: "2",
    avatars: URL_AVATAR_PROJECT,
    title: "Premium Support",
    date: "22.11.21",
    participant: 3,
    description:
      "Pink is obviously a better color. Everyone’s born confident, and everything’s taken away from you.",
    icon: <SpotifyIcon />,
  },
  {
    id: "3",
    avatars: URL_AVATAR_PROJECT,
    title: "Design Tools",
    date: "06.03.20",
    participant: 4,
    description:
      "Constantly growing. We’re constantly making mistakes from which we learn and improve.",
    icon: <DesignIcon />,
  },
  {
    id: "4",
    avatars: URL_AVATAR_PROJECT,
    title: "Looking Great",
    date: "14.03.24",
    participant: 6,
    description:
      "You have the opportunity to play this game of life you need to appreciate every moment.",
    icon: <AsanaIcon />,
  },
  {
    id: "5",
    avatars: URL_AVATAR_PROJECT,
    title: "Developer First",
    date: "16.01.22",
    participant: 4,
    description:
      "For standing out. But the time is now to be okay to be the greatest you.",
    icon: <InvisionIcon />,
  },
  {
    id: "6",
    avatars: URL_AVATAR_PROJECT,
    title: "Product Development",
    date: "16.01.22",
    participant: 4,
    description:
      "We strive to embrace and drive change in our industry. We are happy to work at such a project.",
    icon: <AtlassianIcon />,
  },
];
