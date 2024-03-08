import type { Meta, StoryObj } from "@storybook/react";

// Components
import PricingForm from "./PricingForm";

const meta = {
  title: "Components/Products/Forms/PricingForm",
  component: PricingForm,
  tags: ["autodocs"],
  argTypes: {
    price: {
      description: "This is price type number",
    },
    currency: {
      description: "This is currency type number",
    },
    sku: {
      description: "This is sku type string",
    },
    tags: {
      description:
        "This is tags type array number with value by SelectOptionData:{value: number; option: string;} with value 1: option is Black Friday, 2: Expired, 3: Out of Stock, 4: In Stock, 5: Sale",
    },
    onBack: {
      description: "This is func to back step prev",
    },
    onSubmit: {
      description: "This is func to submit data",
    },
  },
} as Meta<typeof PricingForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    price: 90,
    currency: 0,
    sku: "71283476591",
    tags: [1, 2, 3],
    onBack: () => {},
    onSubmit: () => {},
  },
};
