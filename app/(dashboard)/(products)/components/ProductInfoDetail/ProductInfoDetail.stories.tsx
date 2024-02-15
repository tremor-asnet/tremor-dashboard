import type { Meta, StoryObj } from "@storybook/react";

// Components
import ProductInfoDetail from "./ProductInfoDetail";

//Mocks
import { mockProductInfoDetail } from "@/mocks";

const meta = {
  title: "Components/ProductInfoDetail",
  component: ProductInfoDetail,
  tags: ["autodocs"],
} as Meta<typeof ProductInfoDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProductInfoDetailDefault: Story = {
  render: () => <ProductInfoDetail product={mockProductInfoDetail} />,
};
