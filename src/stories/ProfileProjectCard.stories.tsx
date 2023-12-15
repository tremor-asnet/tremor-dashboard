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
      projectSrc="/assets/images/profile-project.webp"
      avatarSrc="/images/avatar/avatar-xs.webp"
      name="modern"
      desc="As Uber works through a huge amount of internal management turmoil."
      hashtag="#1"
    />
  ),
};
