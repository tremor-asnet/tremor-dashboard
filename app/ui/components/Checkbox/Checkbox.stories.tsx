import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from ".";

const meta = {
  title: "Components/common/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      description: "Handle checkbox change",
    },
  },
} as Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CheckboxDefault: Story = {
  args: {
    onChange: () => {},
  },
};
