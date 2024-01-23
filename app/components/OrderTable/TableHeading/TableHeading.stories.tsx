import type { Meta, StoryObj } from "@storybook/react";
import TableHeading from ".";

const meta = {
  title: "Components/OrderTable/TableHeading",
  component: TableHeading,
  tags: ["autodocs"],
} as Meta<typeof TableHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PaginationDefault: Story = {
  render: () => <TableHeading />,
};
