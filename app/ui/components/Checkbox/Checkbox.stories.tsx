// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import CheckBox from "./Checkbox";

const meta = {
  title: "Components/CheckBox",
  tags: ["autodocs"],
  component: CheckBox,
} as Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <CheckBox handleCheckBox={() => {}} checked={false} />,
};

export const Checked: Story = {
  render: () => <CheckBox handleCheckBox={() => {}} checked />,
};
