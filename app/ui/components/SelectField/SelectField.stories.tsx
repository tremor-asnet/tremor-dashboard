// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import SelectField from "./SelectField";

// Constants
import { TYPE_PRICE } from "@/constants";

const meta = {
  title: "Components/SelectField",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "SelectField to apply for ui select option",
      },
    },
  },
  component: SelectField,
} as Meta<typeof SelectField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <SelectField label="Currency" options={TYPE_PRICE} className="py-2.5" />
  ),
};
