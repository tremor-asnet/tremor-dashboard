import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@tremor/react";
import { TiHome } from "react-icons/ti";

const meta = {
  title: "Components/Button",
  tags: ["autodocs"],
  component: Button,
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <Button className="font-sans font-bold bg-primary hover:bg-primary border-transparent text-xs">
      Primary
    </Button>
  ),
};

export const Secondary: Story = {
  render: () => (
    <Button
      className="font-sans font-bold bg-inherit text-tremor-content-seldom text-xs hover:bg-transparent hover:opacity-75"
      variant="secondary">
      Secondary
    </Button>
  ),
};

export const Light: Story = {
  render: () => (
    <Button
      className="font-sans font-bold text-tremor-content-title text-xs hover:text-tremor-content-title px-6 py-2.5"
      variant="light">
      Light
    </Button>
  ),
};
export const Icon: Story = {
  render: () => (
    <Button
      className="font-sans font-bold bg-inherit text-tremor-content-title border-0 border-inherit hover:bg-transparent text-xs"
      icon={TiHome}>
      App
    </Button>
  ),
};

export const Disable: Story = {
  render: () => (
    <Button
      disabled
      className="font-sans font-bold bg-primary hover:bg-primary border-transparent text-xs">
      Primary
    </Button>
  ),
};
