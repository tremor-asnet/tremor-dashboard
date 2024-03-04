import type { Meta, StoryObj } from "@storybook/react";

// Components
import { CustomAvatarName } from ".";

// Constants
import { AVATAR_SRC } from "@/constants";

const meta = {
  title: "Components/Tables/CustomAvatarName",
  component: CustomAvatarName,
  tags: ["autodocs"],
  argTypes: {
    text: { description: "Name of avatar" },
    avatar: { description: "The image source" },
  },
} as Meta<typeof CustomAvatarName>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomAvatarNameDefault: Story = {
  render: () => <CustomAvatarName text="Default" />,
};

export const CustomAvatarNameHasAvatar: Story = {
  render: () => <CustomAvatarName text="Default" avatar={AVATAR_SRC.lg} />,
};
