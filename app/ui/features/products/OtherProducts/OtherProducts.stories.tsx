import type { Meta, StoryObj } from "@storybook/react";

// Components
import OtherProducts from "./OtherProducts";

// Mocks
import { MOCK_PRODUCTS } from "@/mocks";

const meta = {
  title: "Components/Products/Detail/OtherProducts",
  component: OtherProducts,
  tags: ["autodocs"],
} as Meta<typeof OtherProducts>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <OtherProducts products={MOCK_PRODUCTS} />,
};
