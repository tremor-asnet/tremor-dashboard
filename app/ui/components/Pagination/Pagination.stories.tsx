// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import Pagination from "./";

const meta = {
  title: "Components/Common/Pagination",
  tags: ["autodocs"],
  component: Pagination,
} as Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Pagination
      currentPage={1}
      pageSize={3}
      totalCount={20}
      onPageChange={() => {}}
    />
  ),
};
