import type { Meta, StoryObj } from "@storybook/react";

// Components
import { Text, Flex } from "@tremor/react";
import Popover from "./Popover";

const meta = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {
    content: { description: "Content of pop over" },
    className: { description: "Class name of pop over" },
  },
} as Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PopoverDefault: Story = {
  render: () => (
    <Flex className="w-full justify-center mt-10 bg-white dark:bg-dark-primary p-6 rounded-xl shadow-md">
      <Popover content="Content popover" className="min-w-[200px]">
        <Text>Hover to show content</Text>
      </Popover>
    </Flex>
  ),
};
