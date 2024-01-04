import type { Meta, StoryObj } from "@storybook/react";

// Components
import LoadingIndicator from "./LoadingIndicator";

export default { component: LoadingIndicator };
const meta = {
  title: "Components/LoadingIndicator",
  component: LoadingIndicator,
  tags: ["autodocs"],
} as Meta<typeof LoadingIndicator>;

type Story = StoryObj<typeof meta>;

export const LoadingIndicatorDefault: Story = {
  render: () => <LoadingIndicator width="w-5" height="w-5" />,
};
