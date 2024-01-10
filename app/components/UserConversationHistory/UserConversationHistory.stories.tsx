// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import UserConversationHistory from "./UserConversationHistory";
import { PROFILE_ITEM } from "@/mocks/profile";

const meta = {
  title: "Components/UserConversationHistory",
  tags: ["autodocs"],
  component: UserConversationHistory,
} as Meta<typeof UserConversationHistory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UserConversationHistory
      avatar={PROFILE_ITEM.avatar}
      name={PROFILE_ITEM.name}
      lastConversation={PROFILE_ITEM.lastConversation}
    />
  ),
};
