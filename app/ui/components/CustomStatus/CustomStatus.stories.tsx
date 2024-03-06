import type { Meta, StoryObj } from "@storybook/react";

// Components
import CustomStatus from "./index";

const meta = {
  title: "Components/Tables/CustomStatus",
  component: CustomStatus,
  tags: ["autodocs"],
  argTypes: {
    status: {
      description: "This is a number with 3 status are 0, 1 and 2",
    },
  },
} as Meta<typeof CustomStatus>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Paid: Story = {
  args: {
    status: 0,
  },
};

export const Canceled: Story = {
  args: {
    status: 1,
  },
};

export const Refunded: Story = {
  args: {
    status: 2,
  },
};
