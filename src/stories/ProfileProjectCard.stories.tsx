import type { Meta, StoryObj } from "@storybook/react";

// Components
import ProfileProjectCard from "../components/ProfileProjectCard/ProfileProjectCard";

// Constants
import { ROUTES } from "../constants";

const meta = {
  title: "Components/ProfileProjectCard",
  component: ProfileProjectCard,
  tags: ["autodocs"],
} as Meta<typeof ProfileProjectCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  render: () => (
    <ProfileProjectCard
      links={[
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
          desc: "Different people have different taste, and various types of music.",
          hashtag: "#3",
        },
        {
          projectSrc: "/assets/images/profile-project.webp",
          avatarSrc: "/images/avatar/avatar-xs.webp",
          name: "gothic",
          desc: "Why would anyone pick blue over pink? Pink is obviously a better color.",
          hashtag: "#4",
        },
      ]}
    />
  ),
};
