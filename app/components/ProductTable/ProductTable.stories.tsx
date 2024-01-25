import type { Meta, StoryObj } from "@storybook/react";

// Components
import ProductTable from "./ProductTable";

// Mock data
import { MOCK_PRODUCTS } from "@/mocks";

const meta = {
  title: "Components/TableList",
  component: ProductTable,
  tags: ["autodocs"],
} as Meta<typeof ProductTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <ProductTable data={MOCK_PRODUCTS} />,
};
