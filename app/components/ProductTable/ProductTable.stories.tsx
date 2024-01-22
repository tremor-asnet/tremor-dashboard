import type { Meta, StoryObj } from "@storybook/react";

// Components
import ProductTable from "./ProductTable";

// Mock data
import { TABLE_LIST_DATA } from "@/mocks";

const meta = {
  title: "Components/TableList",
  component: ProductTable,
  tags: ["autodocs"],
} as Meta<typeof ProductTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <ProductTable data={TABLE_LIST_DATA} />,
};
