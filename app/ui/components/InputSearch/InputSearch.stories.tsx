import type { Meta, StoryObj } from "@storybook/react";

// Components
import InputSearch from "./InputSearch";

const meta = {
  title: "Components/Common/InputSearch",
  component: InputSearch,
  tags: ["autodocs"],
  argTypes: {
    field: { description: "keyword of input search" },
  },
} as Meta<typeof InputSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputSearchDefault: Story = {
  args: {
    value: "Product",
  },
  argTypes: {
    onChange: { action: "onChange" },
    onReset: { action: "onClick" },
  },
};
