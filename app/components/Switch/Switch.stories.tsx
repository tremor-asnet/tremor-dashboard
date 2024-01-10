// Libs
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@tremor/react";
import { withKnobs } from "@storybook/addon-knobs";

const meta = {
  title: "Components/Switch",
  decorators: [withKnobs],
  tags: ["autodocs"],
  component: Switch,
} as Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Switch color="zinc" />,
};

export const Checked: Story = {
  render: () => <Switch checked color="zinc" />,
};

export const Disable: Story = {
  render: () => <Switch disabled color="zinc" />,
};
