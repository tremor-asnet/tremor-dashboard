// Libs
import { ReactNode, FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type { Meta, StoryObj } from "@storybook/react";

// Components
import { Flex } from "@tremor/react";
import PricingInfo from "./PricingInfo";

const StorybookFormProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

const meta = {
  title: "Components/Products/EditProduct/PricingInfo",
  component: PricingInfo,
  tags: ["autodocs"],
} as Meta<typeof PricingInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PricingInfoDefault: Story = {
  render: () => (
    <StorybookFormProvider>
      <Flex className="w-full justify-center mt-10">
        <PricingInfo />
      </Flex>
    </StorybookFormProvider>
  ),
};
