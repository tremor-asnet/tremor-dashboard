import type { Meta, StoryObj } from "@storybook/react";

// Components
import InputField from "./InputField";

const meta = {
  title: "Components/Common/InputField",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {
    type: { description: "Type of input field" },
  },
} as Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputFieldTextType: Story = {
  args: {
    type: "text",
  },
};

export const InputFieldNumberType: Story = {
  args: {
    type: "number",
  },
};
