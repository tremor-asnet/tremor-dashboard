import type { Meta, StoryObj } from "@storybook/react";

// Components
import SalesByAge from ".";

// Mock data
import { SALES_AGE_CHART } from "@/mocks";

const meta = {
  title: "Components/SalesByAge",
  component: SalesByAge,
  tags: ["autodocs"],
  argTypes: {
    title: { description: "Title of sale by age" },
    data: {
      value: { description: "Value of sale by age" },
      ageRange: { description: "Age range of sale by age" },
    },
  },
} as Meta<typeof SalesByAge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SalesByAgeComponent: Story = {
  render: () => (
    <div className="sale-page">
      <SalesByAge title="Sales by Age" data={SALES_AGE_CHART} />
    </div>
  ),
};
