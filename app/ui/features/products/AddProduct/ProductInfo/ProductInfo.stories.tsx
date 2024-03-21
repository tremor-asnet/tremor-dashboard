import type { Meta, StoryObj } from "@storybook/react";

// Libs
import { useForm } from "react-hook-form";

// Components
import ProductInfo from "./ProductInfo";

// Types
import { NewInfo } from "@/types";

const meta = {
  title: "Components/Products/AddProduct/ProductInfo",
  component: ProductInfo,
  tags: ["autodocs"],
  argTypes: {
    control: {
      description:
        "This is control from useForm of react-hook-form with type NewInfo({productName: string, description: string, providerName: string, weight: string, category: string, quantity: string})",
    },
  },
} as Meta<typeof ProductInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

const ProductInfoFormProvider = () => {
  const { control } = useForm<NewInfo>({
    defaultValues: {
      productName: "Product A",
      description: "",
      weight: 0,
      category: 1,
      quantity: 0,
      providerName: "Provider A",
    },
  });

  return <ProductInfo control={control} />;
};

export const Default: Story = {
  render: () => <ProductInfoFormProvider />,
};
