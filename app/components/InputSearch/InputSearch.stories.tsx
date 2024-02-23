import type { Meta, StoryObj } from "@storybook/react";

// Components
import InputSearch from "./InputSearch";

const meta = {
  title: "Components/InputSearch",
  component: InputSearch,
  tags: ["autodocs"],
} as Meta<typeof InputSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputSearchDefault: Story = {
  render: () => <InputSearch />,
};
