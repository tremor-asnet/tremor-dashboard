import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "@tremor/react";

const meta = {
  title: "Components/Common/Text",
  tags: ["autodocs"],
  component: Text,
  argTypes: {
    className: { description: "Class name of text" },
  },
} as Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  render: () => (
    <div className="bg-white dark:bg-dark-primary p-6 rounded-xl shadow-md">
      <Text className="text-xs text-secondary font-light leading-5">Small</Text>
    </div>
  ),
};

export const Medium: Story = {
  render: () => (
    <div className="bg-white dark:bg-dark-primary p-6 rounded-xl shadow-md">
      <Text className="text-secondary font-light leading-6">Medium</Text>
    </div>
  ),
};

export const Base: Story = {
  render: () => (
    <div className="bg-white dark:bg-dark-primary p-6 rounded-xl shadow-md">
      <Text className="sm:text-base text-secondary font-light">Base</Text>
    </div>
  ),
};
