import type { Meta, StoryObj } from "@storybook/react";

// Components
import InputField from "./InputField";

const meta = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
} as Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputFieldNumberType: Story = {
  render: () => (
    <InputField id="add-product-price" label="Price" type="number" />
  ),
};

export const InputFieldTextType: Story = {
  render: () => (
    <InputField id="edit-fb" label="Facebook Account" type="text" />
  ),
};
