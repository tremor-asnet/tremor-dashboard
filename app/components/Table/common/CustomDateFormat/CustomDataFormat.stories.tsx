import type { Meta, StoryObj } from "@storybook/react";

// Components
import { CustomDateFormat } from ".";

const meta = {
  title: "Components/CustomDateFormat",
  component: CustomDateFormat,
  tags: ["autodocs"],
} as Meta<typeof CustomDateFormat>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomDateFormatDefault: Story = {
  render: () => <CustomDateFormat date="01 Nov, 11:20 AM" />,
};
