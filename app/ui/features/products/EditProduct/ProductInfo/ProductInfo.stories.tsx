// Libs
import { ReactNode, FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type { Meta, StoryObj } from "@storybook/react";

// Components
import ProductInfo from "./ProductInfo";

const StorybookFormProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

const meta = {
  title: "Components/Products/EditProduct/ProductInfo",
  component: ProductInfo,
  tags: ["autodocs"],
} as Meta<typeof ProductInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <StorybookFormProvider>
      <ProductInfo />
    </StorybookFormProvider>
  ),
};
