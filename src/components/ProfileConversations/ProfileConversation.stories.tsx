// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import ProfileConversations from "./ProfileConversations";

// Mocks
import { PROFILE_CONVERSATIONS } from "@/mocks/profileItem";

const meta = {
  title: "Components/ProfileConversations",
  tags: ["autodocs"],
  component: ProfileConversations,
} as Meta<typeof ProfileConversations>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ProfileConversations
      profileList={PROFILE_CONVERSATIONS}
      title="Profile Conversations"
    />
  ),
};
