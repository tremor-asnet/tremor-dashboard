// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import ConversationHistory from "./ConversationHistory";

// Mocks
import { PROFILE_CONVERSATIONS } from "@/mocks/profile";

const meta = {
  title: "Components/ConversationHistory",
  tags: ["autodocs"],
  component: ConversationHistory,
} as Meta<typeof ConversationHistory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ConversationHistory profileList={PROFILE_CONVERSATIONS} />,
};
