// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import CheckBox from "./Checkbox";

// Styles
import "./checkbox.css";

const meta = {
  title: "Components/CheckBox",
  component: CheckBox,
} as Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <CheckBox id="checkbox" />,
};

export const Checked: Story = {
  render: () => <CheckBox id="checkbox" checked />,
};

export const Disabled: Story = {
  render: () => <CheckBox id="checkbox" disabled />,
};
