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
  argTypes: {
    options: { description: "Option of select field" },
    className: { description: "Class name of select field" },
    label: { description: "Label of select field" },
  },
  component: SelectField,
} as Meta<typeof SelectField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="dark:bg-dark_blue text-primary rounded-xl p-6 shadow-box-icon-default dark:shadow-main-content">
      <SelectField label="Currency" options={TYPE_PRICE} className="py-2.5" />
    </div>
  ),
};
