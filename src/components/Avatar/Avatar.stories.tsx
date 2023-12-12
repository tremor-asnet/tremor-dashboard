import type { Meta, StoryObj } from "@storybook/react";

// Components
import Avatar from "./Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} as Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AvatarExtraSmall: Story = {
  render: () => (
    <Avatar
      alt="Avatar extra small"
      className="border-2 border-white border-solid ml-[-10px]"
      height={20}
      priority
      src="/images/avatar/avatar-xs.webp"
      sizes="(max-width: 768px) 100vw, 33vw"
      width={20}
    />
  ),
};

export const AvatarSmall: Story = {
  render: () => (
    <Avatar
      alt="Avatar small"
      height={36}
      priority
      src="/images/avatar/avatar-sm.webp"
      sizes="(max-width: 768px) 100vw, 33vw"
      width={36}
    />
  ),
};

export const AvatarMedium: Story = {
  render: () => (
    <Avatar
      alt="Avatar medium"
      className="shadow-md"
      height={48}
      priority
      src="/images/avatar/avatar-md.webp"
      sizes="(max-width: 768px) 100vw, 33vw"
      width={48}
    />
  ),
};

export const AvatarLarge: Story = {
  render: () => (
    <Avatar
      alt="Avatar medium"
      className="shadow-lg"
      height={74}
      priority
      src="/images/avatar/avatar-lg.webp"
      sizes="(max-width: 768px) 100vw, 33vw"
      width={74}
    />
  ),
};
