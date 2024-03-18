import type { Meta, StoryObj } from "@storybook/react";
import { MdLanguage } from "react-icons/md";

// Components
import IconBox from "./IconBox";
import { IoMdPrint } from "react-icons/io";

const meta = {
  title: "Components/Common/IconBox",
  component: IconBox,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      description: "Source icon box",
    },
    bgBox: {
      description: "Background icon box",
    },
    className: {
      description: "Class of icon box",
    },
    width: {
      description: "Width of icon box",
    },
    height: {
      description: "Height of icon box",
    },
  },
} as Meta<typeof IconBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IconBoxDefault: Story = {
  args: {
    icon: <IoMdPrint color="white" size="24px" />,
    width: "16",
    height: "16",
    bgBox: "bg-gradient-arsenic",
    className: "",
  },
};

export const IconBoxSizeProps: Story = {
  args: {
    icon: <MdLanguage color="white" size="24px" />,
    width: "12",
    height: "12",
  },
};

export const IconBoxBgProps: Story = {
  args: {
    icon: <MdLanguage color="white" size="24px" />,
    width: "16",
    height: "16",
    bgBox: "bg-[linear-gradient(195deg,_#66BB6A,_#43A047)]",
  },
};
