import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "@tremor/react";

const meta = {
  title: "Components/Text",
  tags: ["autodocs"],
  component: Text,
} as Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  render: () => (
    <Text className="font-sans text-xs text-secondary font-light leading-5">
      Small
    </Text>
  ),
};

export const Medium: Story = {
  render: () => (
    <Text className="font-sans text-secondary font-light leading-6">
      Medium
    </Text>
  ),
};

export const Base: Story = {
  render: () => (
    <Text className="font-sans sm:text-base text-secondary font-light">
      Base
    </Text>
  ),
};
