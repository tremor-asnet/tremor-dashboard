import type { Meta, StoryObj } from "@storybook/react";

// Components
import LoadingPage from "./LoadingPage";

const meta = {
  title: "Components/Common/LoadingPage",
  component: LoadingPage,
  tags: ["autodocs"],
  argTypes: {
    width: { description: "Width of loading indicator" },
    height: { description: "Height of loading indicator" },
    fillColor: { description: "Color of loading indicator" },
  },
} as Meta<typeof LoadingPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoadingPageDefault: Story = {
  args: {
    width: 16,
    height: 16,
    fillColor: "river-bed-500",
  },
};
