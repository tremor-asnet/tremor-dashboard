import type { Meta, StoryObj } from "@storybook/react";

// Components
import Avatar from "./Avatar";

// Constants
import { AVATAR_SRC } from "@/constants";

const meta = {
  title: "Components/Common/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    alt: { description: "Alt of avatar" },
    className: { description: "Class name of avatar" },
    height: { description: "Height of avatar" },
    priority: {
      description:
        "The image will be considered high priority and preload if true and lazyload if false",
    },
    src: { description: "Source of avatar" },
    sizes: { description: "Sizes of avatar" },
    width: { description: "Width of avatar" },
  },
} as Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AvatarExtraSmall: Story = {
  args: {
    alt: "Avatar extra small",
    className:
      "relative cursor-pointer hover:z-10 border-2 border-white border-solid ml-[-10px]",
    height: 20,
    priority: true,
    src: AVATAR_SRC.xs,
    sizes: "(max-width: 768px) 100vw, 33vw",
    width: 20,
  },
};

export const AvatarSmall: Story = {
  args: {
    alt: "Avatar small",
    className: "",
    height: 36,
    priority: true,
    src: AVATAR_SRC.sm,
    sizes: "(max-width: 768px) 100vw, 33vw",
    width: 36,
  },
};

export const AvatarMedium: Story = {
  args: {
    alt: "Avatar medium",
    className: "shadow-md",
    height: 48,
    priority: true,
    src: AVATAR_SRC.md,
    sizes: "(max-width: 768px) 100vw, 33vw",
    width: 48,
  },
};

export const AvatarLarge: Story = {
  args: {
    alt: "Avatar large",
    className: "shadow-lg",
    height: 74,
    priority: true,
    src: AVATAR_SRC.lg,
    sizes: "(max-width: 768px) 100vw, 33vw",
    width: 74,
  },
};
