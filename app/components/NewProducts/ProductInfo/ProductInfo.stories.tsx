import type { Meta, StoryObj } from "@storybook/react";

// Components
import { Flex } from "@tremor/react";
import ProductInfo from "./ProductInfo";

const meta = {
  title: "Components/ProductInfo",
  component: ProductInfo,
  tags: ["autodocs"],
} as Meta<typeof ProductInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProductInfoDefault: Story = {
  render: () => (
    <Flex className="w-full justify-center mt-10">
      <ProductInfo />
    </Flex>
  ),
};
