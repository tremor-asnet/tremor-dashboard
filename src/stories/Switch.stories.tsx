// Libs
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@tremor/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

const meta = {
  title: "Components/Switch",
  decorators: [withKnobs],
  component: Switch,
} as Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Switch />,
};

export const Checked: Story = {
  render: () => <Switch checked />,
};

export const Disable: Story = {
  render: () => <Switch disabled={boolean("Disabled", true)} />,
};
