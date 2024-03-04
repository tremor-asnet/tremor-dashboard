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
  render: () => (
    <Card className="h-full bg-tremor-primary dark:bg-dark-tremor-primary p-0 border-none ring-0">
      <WorldMapCanvas />
    </Card>
  ),
};
