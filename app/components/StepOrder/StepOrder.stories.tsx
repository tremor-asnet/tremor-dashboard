import type { Meta, StoryObj } from "@storybook/react";

// Components
import StepOrder from ".";

// Icons
import { IoMdCheckmark } from "react-icons/io";

const meta = {
  title: "Components/StepOrder",
  component: StepOrder,
  tags: ["autodocs"],
} as Meta<typeof StepOrder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <StepOrder
      backgroundColor="bg-few"
      iconInfo={<IoMdCheckmark />}
      titleInfo="Order delivered"
    />
  ),
};
