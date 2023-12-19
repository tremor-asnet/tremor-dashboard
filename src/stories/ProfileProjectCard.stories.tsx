import type { Meta, StoryObj } from "@storybook/react";

// Components
import ProfileProjectCard from "../components/ProfileProjectCard/ProfileProjectCard";

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
      ]}
    />
  ),
};
