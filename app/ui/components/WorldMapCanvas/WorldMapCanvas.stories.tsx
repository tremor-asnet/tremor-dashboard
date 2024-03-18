// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import WorldMapCanvas from "./";
import { Card } from "@tremor/react";

const meta = {
  title: "Components/Images/WorldMapCanvas",
  tags: ["autodocs"],
  component: WorldMapCanvas,
  argTypes: {
    svg: {
      description: "Source of world map canvas",
    },
  },
} as Meta<typeof WorldMapCanvas>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <WorldMapCanvas />,
};
