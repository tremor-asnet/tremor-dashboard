import type { Meta, StoryObj } from "@storybook/react";

// Components
import ProfileInfo from "./ProfileInfo";

// Mocks
import { PROFILE_HEADER } from "@/mocks";

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
      name={PROFILE_HEADER.name}
      role={PROFILE_HEADER.role}
      avatarUrl={PROFILE_HEADER.avatarUrl}
    />
  ),
};
