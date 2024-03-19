import type { Meta, StoryObj } from "@storybook/react";

// Components
import InputDebounce from "./InputDebounce";

const meta = {
  title: "Components/Common/InputDebounce",
  component: InputDebounce,
  tags: ["autodocs"],
  argTypes: {
    field: { description: "keyword of input search" },
  },
} as Meta<typeof InputDebounce>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputDebounceDefault: Story = {
  args: {
    field: "Product",
    param: "page",
    valueParam: "1",
  },
};
