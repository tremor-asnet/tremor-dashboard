// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import StatusButton from "./StatusButton";

// Icons
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { BsExclamationLg } from "react-icons/bs";

const meta = {
  title: "Components/StatusButton",
  tags: ["autodocs"],
  component: StatusButton,
  argTypes: {
    extendedClass: {
      description: "Class of button",
    },
    icon: {
      description: "Icon of button",
    },
  },
} as Meta<typeof StatusButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonIncrease: Story = {
  render: () => (
    <StatusButton extendedClass="text-few border-few" icon={<BiChevronUp />} />
  ),
};

export const ButtonDecrease: Story = {
  render: () => (
    <StatusButton
      extendedClass="text-attention border-attention"
      icon={<BiChevronDown />}
    />
  ),
};

export const ButtonPending: Story = {
  render: () => (
    <StatusButton
      extendedClass="text-primary border-primary"
      icon={<BsExclamationLg />}
    />
  ),
};