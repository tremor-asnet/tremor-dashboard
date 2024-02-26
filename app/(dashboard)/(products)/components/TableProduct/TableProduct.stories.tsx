import type { Meta, StoryObj } from "@storybook/react";

// Components
import TableProduct from "./TableProduct";

// Mocks
import { MOCK_PRODUCTS } from "@/mocks";

const meta = {
  title: "Components/Tables/TableProduct",
  component: TableProduct,
  tags: ["autodocs"],
} as Meta<typeof TableProduct>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <TableProduct
      products={MOCK_PRODUCTS}
      isAvailable="isAvailable"
      keyword="productName"
      total={50}
      currentPage={0}
    />
  ),
};
