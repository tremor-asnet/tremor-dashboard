import type { Meta, StoryObj } from "@storybook/react";

// Components
import ProfileInfo from "../components/ProfileInfo/ProfileInfo";

// Constants
import { ROUTES } from "../constants";

const meta = {
  title: "Components/ProfileInfo",
  component: ProfileInfo,
  tags: ["autodocs"],
} as Meta<typeof ProfileInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProfileInfoHeader: Story = {
  render: () => (
    <ProfileInfo
      isOnHeader
      name="Richard Davis"
      role="CEO / Co-Founder"
      src="/images/avatar/avatar-lg.webp"
    />
  ),
};

export const ProfileInfoMain: Story = {
  render: () => (
    <ProfileInfo
      isOnHeader={false}
      name="Sophie B."
      role="Hi! I need more information about files I can"
      src="/images/avatar/avatar-md.webp"
    />
  ),
};
