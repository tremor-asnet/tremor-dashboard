import type { Meta, StoryObj } from "@storybook/react";

// Components
import InputField from "./InputField";

const meta = {
  title: "Components/Common/InputField",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {
    id: {
      description: "Id of input field",
    },
    label: { description: "Label of input field" },
    type: { description: "Type of input field" },
  },
} as Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputFieldTextType: Story = {
  args: {
    id: "edit-fb",
    label: "Facebook Account",
    type: "text",
  },
};

export const InputFieldNumberType: Story = {
  args: {
    id: "add-product-price",
    label: "Price",
    type: "number",
  },
};
