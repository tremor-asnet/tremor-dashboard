import type { Meta, StoryObj } from "@storybook/react";

// Components
import { Text, Flex } from "@tremor/react";
import InputSearch from "./InputSearch";

const meta = {
  title: "Components/InputSearch",
  component: InputSearch,
  tags: ["autodocs"],
} as Meta<typeof InputSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputSearchDefault: Story = {
  render: () => (
    <Flex className="w-full justify-center mt-10">
      <InputSearch onSearch={() => {}} />
    </Flex>
  ),
};
