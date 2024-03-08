import type { Meta, StoryObj } from "@storybook/react";

// Components
import CustomNumberFormat from "./index";

const meta = {
  title: "Components/Tables/CustomNumberFormat",
  component: CustomNumberFormat,
  tags: ["autodocs"],
  argTypes: {
    value: {
      description: "This is a value type number",
    },
  },
} as Meta<typeof CustomNumberFormat>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 2024,
  },
};
