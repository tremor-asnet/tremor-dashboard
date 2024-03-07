import type { Meta, StoryObj } from "@storybook/react";

// Libs
import { useForm } from "react-hook-form";

// Components
import Pricing from "./Pricing";

// Types
import { NewPricing } from "@/types";

const meta = {
  title: "Components/Products/AddProduct/Pricing",
  component: Pricing,
  tags: ["autodocs"],
  argTypes: {
    control: {
      description:
        "This is control from useForm of react-hook-form with type NewPricing(price: number, sku: string, currency: number, tags: array type (SelectOptionData {option: string;value: string;}))",
    },
  },
} as Meta<typeof Pricing>;

export default meta;

type Story = StoryObj<typeof meta>;

const PricingFormProvider = () => {
  const { control } = useForm<NewPricing>({
    defaultValues: {
      price: 0,
      sku: "71283476591",
      currency: 2,
      tags: ["Black Friday", "Expired", "Out of Stock", "In Stock", "Sale"],
    },
  });

  return <Pricing control={control} />;
};

export const Default: Story = {
  render: () => <PricingFormProvider />,
};
