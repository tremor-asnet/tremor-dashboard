// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import UserConversationHistory from "./UserConversationHistory";
import { PROFILE_ITEM } from "@/mocks/profile";

const meta = {
  title: "Components/Profiles/UserConversationHistory",
  tags: ["autodocs"],
  component: UserConversationHistory,
  argTypes: {
    avatar: { description: "User avatar of conversation history" },
    name: { description: "User name of conversation history" },
    lastConversation: {
      description: "User last conersation of conversation history",
    },
  },
} as Meta<typeof UserConversationHistory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="bg-white dark:bg-dark-primary p-6 rounded-xl shadow-md">
      <UserConversationHistory
        avatar={PROFILE_ITEM.avatar}
        name={PROFILE_ITEM.name}
        lastConversation={PROFILE_ITEM.lastConversation}
      />
    </div>
  ),
};
