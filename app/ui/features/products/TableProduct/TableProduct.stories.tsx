import type { Meta, StoryObj } from "@storybook/react";

// Components
import TableProduct from "./TableProduct";

// Mocks
import { MOCK_PRODUCTS } from "@/mocks";

const meta = {
  title: "Components/Products/Tables/TableProduct",
  component: TableProduct,
  tags: ["autodocs"],
  argTypes: {
    products: { description: "Product data of table product" },
    total: { description: "Total item of table product" },
    currentPage: { description: "Current page of table product" },
  },
} as Meta<typeof TableProduct>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    products: MOCK_PRODUCTS,
    total: 50,
    currentPage: 2,
  },
};
