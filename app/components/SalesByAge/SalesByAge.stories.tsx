import type { Meta, StoryObj } from "@storybook/react";

// Components
import SalesByAge from ".";

// Mock data
import { SALES_AGE_CHART } from "@/mocks";

const meta = {
  title: "Components/SalesByAge",
  component: SalesByAge,
  tags: ["autodocs"],
} as Meta<typeof SalesByAge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SalesByAgeComponent: Story = {
  render: () => <SalesByAge title="Sales by Age" data={SALES_AGE_CHART} />,
};
