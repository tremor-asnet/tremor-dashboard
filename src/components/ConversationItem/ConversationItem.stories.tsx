// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import ConversationItem from "./ConversationItem";
import { PROFILE_ITEM } from "@/mocks/profile";

const meta = {
  title: "Components/ConversationItem",
  tags: ["autodocs"],
  component: ConversationItem,
} as Meta<typeof ConversationItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ConversationItem
      src={PROFILE_ITEM.src}
      alt={PROFILE_ITEM.alt}
      name={PROFILE_ITEM.name}
      description={PROFILE_ITEM.description}
    />
  ),
};
