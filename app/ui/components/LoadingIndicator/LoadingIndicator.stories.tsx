import type { Meta, StoryObj } from "@storybook/react";

// Components
import LoadingIndicator from "./LoadingIndicator";

const meta = {
  title: "Components/Common/LoadingIndicator",
  component: LoadingIndicator,
  tags: ["autodocs"],
  argTypes: {
    width: { description: "Width of loading indicator" },
    height: { description: "Height of loading indicator" },
    fillColor: { description: "Color of loading indicator" },
  },
} as Meta<typeof LoadingIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoadingIndicatorDefault: Story = {
  args: {
    width: 5,
    height: 5,
    fillColor: "river-bed-500",
  },
};
