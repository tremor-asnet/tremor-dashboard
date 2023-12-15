// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import ProfileItem from "./ProfileItem";
import { PROFILE_ITEM } from "@/mocks/profileItem";

const meta = {
  title: "Components/ProfileItem",
  tags: ["autodocs"],
  component: ProfileItem,
} as Meta<typeof ProfileItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ProfileItem
      src={PROFILE_ITEM.src}
      alt={PROFILE_ITEM.alt}
      name={PROFILE_ITEM.name}
      description={PROFILE_ITEM.description}
      onClick={() => {}}
    />
  ),
};
