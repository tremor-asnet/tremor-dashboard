// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import SelectOption from "./SelectOption";

// Constants
import { productList } from "@/constants";

const meta = {
  title: "Components/Common/SelectOption",
  tags: ["autodocs"],
  component: SelectOption,
  parameters: {
    docs: {
      description: {
        component: "SelectOption to apply for ui filters option",
      },
    },
  },
  argTypes: {
    title: {
      description: "Collapse or expand sidebar of select option",
    },
    onSelectItem: { description: "On select of select option" },
    onSelectRemove: { description: "On remove of select option" },
    data: [
      {
        option: { description: "opgtion of select option" },
        value: { description: "value of select option" },
      },
    ],
  },
} as Meta<typeof SelectOption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Is Available",
    onSelectItem: () => {},
    onSelectRemove: () => {},
    data: productList,
  },
};
