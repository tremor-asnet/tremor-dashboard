import type { Meta, StoryObj } from "@storybook/react";

// Components
import { Text, Flex } from "@tremor/react";
import Pagination from "./Pagination";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
} as Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PaginationDefault: Story = {
  render: () => (
    <Flex className="w-full justify-center mt-10">
      <Pagination totalCount={5} />
    </Flex>
  ),
};
