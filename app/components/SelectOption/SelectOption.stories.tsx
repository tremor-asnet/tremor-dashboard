// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import { SelectOption } from "@/components";

// Constants
import { orderListOption } from "@/constants";

const meta = {
  title: "Components/SelectOption",
  tags: ["autodocs"],
  component: SelectOption,
} as Meta<typeof SelectOption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SelectOption data={orderListOption} onClickItem={() => {}} />,
};
