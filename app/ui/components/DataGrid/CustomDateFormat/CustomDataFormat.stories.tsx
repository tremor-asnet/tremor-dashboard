import type { Meta, StoryObj } from "@storybook/react";

// Components
import { CustomDateFormat } from ".";

const meta = {
  title: "Components/Tables/CustomDateFormat",
  component: CustomDateFormat,
  tags: ["autodocs"],
  argTypes: {
    date: { description: "Date format" },
  },
} as Meta<typeof CustomDateFormat>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomDateFormatDefault: Story = {
  render: () => (
    <div className="dark:bg-dark_blue text-primary rounded-xl p-6 shadow-box-icon-default dark:shadow-main-content">
      <CustomDateFormat date="01 Nov, 11:20 AM" />
    </div>
  ),
};
