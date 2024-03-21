// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import HeaderCellContents from "./HeaderCellContents";
import { Card } from "@tremor/react";

const meta = {
  title: "Components/Tables/HeaderCellContents",
  tags: ["autodocs"],
  component: HeaderCellContents,
  argTypes: {
    title: {
      description: "Title of header cell content",
    },
    keyColumn: {
      description: "Type of key column",
    },
    sortKey: {
      description: "Type of sort key",
    },
    sortDirection: {
      description: "Sort direction by increase or decrease",
    },
    isSortable: {
      description: "Have or not isSortable by set it as true or false",
    },
  },
} as Meta<typeof HeaderCellContents>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeaderCellContentsHaveSortDefault: Story = {
  render: () => (
    <Card className="h-full dark:text-lighter bg-tremor-primary dark:bg-dark-tremor-primary p-6 border-none ring-0">
      <HeaderCellContents title="Product" isSortable={true} />
    </Card>
  ),
};

export const HeaderCellContentsHaveSortIncrese: Story = {
  render: () => (
    <Card className="h-full dark:text-lighter bg-tremor-primary dark:bg-dark-tremor-primary p-6 border-none ring-0">
      <HeaderCellContents title="Product" sortType="asc" isSortable={true} />
    </Card>
  ),
};

export const HeaderCellContentsHaveSortDecrease: Story = {
  render: () => (
    <Card className="h-full dark:text-lighter bg-tremor-primary dark:bg-dark-tremor-primary p-6 border-none ring-0">
      <HeaderCellContents title="Product" sortType="desc" isSortable={true} />
    </Card>
  ),
};

export const HeaderCellContentsHaveNoSort: Story = {
  render: () => (
    <Card className="h-full dark:text-lighter bg-tremor-primary dark:bg-dark-tremor-primary p-6 border-none ring-0">
      <HeaderCellContents title="Product" isSortable={false} />
    </Card>
  ),
};
