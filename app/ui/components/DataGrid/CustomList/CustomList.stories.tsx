import type { Meta, StoryObj } from "@storybook/react";

// Components
import CustomList from "./index";

const meta = {
  title: "Components/Tables/CustomList",
  component: CustomList,
  tags: ["autodocs"],
  argTypes: {
    products: {
      description:
        "This is an array include products with a product have type OrderProduct(id: number; name: string; count: number; price?: number; url?: string)",
    },
  },
} as Meta<typeof CustomList>;

export default meta;

type Story = StoryObj<typeof meta>;

const products = [
  {
    id: 1,
    name: "Premium Support",
    count: 2,
  },
  {
    id: 2,
    name: "Metror Dashboard",
    count: 5,
  },
  {
    id: 3,
    name: "Parts for service",
    count: 2,
  },
];

export const Default: Story = {
  args: {
    products: products,
  },
};
