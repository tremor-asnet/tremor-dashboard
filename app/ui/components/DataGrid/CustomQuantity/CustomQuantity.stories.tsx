import type { Meta, StoryObj } from "@storybook/react";

// Components
import CustomQuantity from "./index";

// Mocks
import { MOCK_ORDERS } from "@/mocks";

const meta = {
  title: "Components/Tables/CustomQuantity",
  component: CustomQuantity,
  tags: ["autodocs"],
  argTypes: {
    products: {
      description:
        "This is an array include products with a product have type OrderProduct(id: number; name: string; count?: number; price?: number; url?: string)",
    },
  },
} as Meta<typeof CustomQuantity>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    products: MOCK_ORDERS[0].products,
  },
};
