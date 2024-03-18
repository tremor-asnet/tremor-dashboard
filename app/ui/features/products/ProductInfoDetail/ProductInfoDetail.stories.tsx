import type { Meta, StoryObj } from "@storybook/react";

// Components
import ProductInfoDetail from "./ProductInfoDetail";

//Mocks
import { mockProductInfoDetail } from "@/mocks";

const meta = {
  title: "Components/Products/Detail/ProductInfoDetail",
  component: ProductInfoDetail,
  tags: ["autodocs"],
  argTypes: {
    id: { description: "Id of product detail" },
    productName: { description: "Name of product detail" },
    description: { description: "Description of product detail" },
    price: { description: "Price of product detail" },
    quantity: { description: "Quantity of product detail" },
  },
} as Meta<typeof ProductInfoDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProductInfoDetailDefault: Story = {
  render: () => (
    <div className="dark:bg-dark_blue text-primary rounded-xl p-6 shadow-box-icon-default dark:shadow-main-content">
      <ProductInfoDetail product={mockProductInfoDetail} />
    </div>
  ),
};
