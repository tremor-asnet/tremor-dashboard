// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import SelectOption from "./";

// Constants
import { ProductList } from "@/constants";

const meta = {
  title: "Components/SelectOption",
  tags: ["autodocs"],
  component: SelectOption,
  parameters: {
    docs: {
      description: {
        component: "SelectOption to apply for ui filters option",
      },
    },
  },
} as Meta<typeof SelectOption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <SelectOption
      title="Is Available"
      data={ProductList}
      onSelectItem={() => {}}
      onSelectRemove={() => {}}
    />
  ),
};
