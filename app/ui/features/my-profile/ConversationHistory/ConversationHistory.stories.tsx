// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import ConversationHistory from "./ConversationHistory";

// Mocks
import { PROFILE_CONVERSATIONS } from "@/mocks/profile";

const meta = {
  title: "Components/Profiles/ConversationHistory",
  tags: ["autodocs"],
  argTypes: {
    id: { description: "Id of conversation" },
    avatar: { description: "User avatar of conversation" },
    name: { description: "User name of conversation" },
    lastConversation: { description: "Last conversation of user" },
  },
  component: ConversationHistory,
} as Meta<typeof ConversationHistory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="bg-white dark:bg-dark-primary p-6 rounded-xl shadow-md">
      <ConversationHistory conversationHistory={PROFILE_CONVERSATIONS} />
    </div>
  ),
};
