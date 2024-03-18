import type { Meta, StoryObj } from "@storybook/react";

// Components
import TopSellingProducts from "./TopSellingProducts";

// Mock data
import { TOP_SELLING_PRODUCTS_DATA } from "@/mocks";

const meta = {
  title: "Components/Sales/TopSellingProducts",
  component: TopSellingProducts,
  tags: ["autodocs"],
} as Meta<typeof TopSellingProducts>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <TopSellingProducts
      title="Top Selling Products"
      data={TOP_SELLING_PRODUCTS_DATA}
    />
  ),
};
