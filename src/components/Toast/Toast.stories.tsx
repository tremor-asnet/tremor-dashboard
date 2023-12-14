import type { Meta, StoryObj } from "@storybook/react";

// Components
import Toast from "./Toast";

export default { component: Toast };
const meta = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
} as Meta<typeof Toast>;

type Story = StoryObj<typeof meta>;

export const ToastDefault: Story = {
  render: () => <Toast content="Create account successfully." />,
};
