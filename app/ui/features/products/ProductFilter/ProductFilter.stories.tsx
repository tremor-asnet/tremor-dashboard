import type { Meta, StoryObj } from "@storybook/react";

// Components
import ProductFilter from "./index";

const meta = {
  title: "Components/Products/ProductFilter",
  component: ProductFilter,
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "This is label of button filters with type is string",
    },
  },
} as Meta<typeof ProductFilter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Filters",
  },
};
