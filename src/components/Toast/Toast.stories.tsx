import type { Meta, StoryObj } from "@storybook/react";

// Components
import Toast from "./Toast";
import { SIGN_UP_MESSAGE } from "@/constants";

const meta = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
} as Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ToastDefault: Story = {
  render: () => <Toast message={SIGN_UP_MESSAGE.SUCCESS} />,
};
