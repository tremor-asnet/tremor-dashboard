// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import StatusButton from "./StatusButton";

// Types
import { STATUS_LIST, TYPE_LIST } from "@/types";

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
    <StatusButton
      extendedClass="text-few border-few"
      type={STATUS_LIST.ERROR}
      status={STATUS_LIST.SUCCESS}
      value={"+ 1234"}
    />
  ),
};

export const ButtonDecrease: Story = {
  render: () => (
    <StatusButton
      extendedClass="text-attention border-attention"
      type={TYPE_LIST.DEPOSIT}
      status={STATUS_LIST.SUCCESS}
      value={"- 1234"}
    />
  ),
};

export const ButtonPending: Story = {
  render: () => (
    <StatusButton
      extendedClass="text-primary border-primary"
      status={STATUS_LIST.ERROR}
      value={"Pending"}
    />
  ),
};
