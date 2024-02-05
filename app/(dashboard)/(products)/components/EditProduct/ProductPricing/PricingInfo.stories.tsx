import type { Meta, StoryObj } from "@storybook/react";

// Components
import { Flex } from "@tremor/react";
import PricingInfo from "./PricingInfo";

const meta = {
  title: "Components/PricingInfo",
  component: PricingInfo,
  tags: ["autodocs"],
} as Meta<typeof PricingInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PricingInfoDefault: Story = {
  render: () => (
    <Flex className="w-full justify-center mt-10">
      <PricingInfo />
    </Flex>
  ),
};
