import type { Meta, StoryObj } from "@storybook/react";
import { Button, Text } from "@tremor/react";
import { TiHome } from "react-icons/ti";
import { RiArrowDropDownLine } from "react-icons/ri";

const meta = {
  title: "Components/Common/Button",
  tags: ["autodocs"],
  component: Button,
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <Button className="font-bold bg-primary hover:bg-primary border-transparent text-xs">
      Primary
    </Button>
  ),
};

export const Secondary: Story = {
  render: () => (
    <Button
      className="font-bold bg-inherit text-tremor-content-seldom text-xs hover:bg-transparent hover:opacity-75"
      variant="secondary">
      Secondary
    </Button>
  ),
};

export const Light: Story = {
  render: () => (
    <Button
      className="font-bold text-tremor-content-title text-xs hover:text-tremor-content-title px-6 py-2.5"
      variant="light">
      Light
    </Button>
  ),
};
export const Icon: Story = {
  render: () => (
    <Button
      className="font-bold bg-inherit text-tremor-content-title border-0 border-inherit hover:bg-transparent text-xs"
      icon={TiHome}>
      App
    </Button>
  ),
};

export const Disable: Story = {
  render: () => (
    <Button
      disabled
      className="font-bold bg-primary hover:bg-primary border-transparent text-xs">
      Primary
    </Button>
  ),
};

export const NewOder: Story = {
  render: () => (
    <Button className="antialiased min-w-[64px] py-[12px] text-center uppercase sm:px-[21px] bg-gradient-primary dark:bg-gradient-pickled px-6 py-2.5 rounded-lg border-0">
      <Text className="items-center uppercase py-[2px] text-xs font-bold font-primary text-white dark:text-dark-tremor-content-title tracking-wide">
        New Order
      </Text>
    </Button>
  ),
};

export const Filters: Story = {
  render: () => (
    <Button
      icon={RiArrowDropDownLine}
      iconPosition="right"
      className="antialiased flex items-center uppercase font-bold min-w-[64px] bg-transparent text-center border-primary focus:border-primary hover:border-primary focus:opacity-75 hover:opacity-75 uppercase sm:px-[26px] text-primary focus:text-white dark:text-dark-tremor-content-title hover:bg-transparent active:bg-primary focus:bg-primary dark:bg-gradient-pickled px-6 py-[9px] rounded-lg hover:!shadow-btn-primary-hover">
      <Text className="text-inherit text-xs">Filters</Text>
    </Button>
  ),
};
