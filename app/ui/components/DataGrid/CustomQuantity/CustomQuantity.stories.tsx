import type { Meta, StoryObj } from "@storybook/react";

// Components
import CustomQuantity from "./index";

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

const products = [
  {
    id: 1,
    name: "Premium Support",
    count: 10,
  },
  {
    id: 2,
    name: "Metror Dashboard",
    count: 8,
  },
  {
    id: 3,
    name: "Parts for service",
    count: 15,
  },
];

export const Default: Story = {
  args: {
    products: products,
  },
};
