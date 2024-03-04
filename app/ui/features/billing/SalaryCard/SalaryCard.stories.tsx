import type { Meta, StoryObj } from "@storybook/react";

// Components
import SalaryCard from "./SalaryCard";

//Mocks
import { mockSalaryData } from "@/mocks";

const meta = {
  title: "Components/Billing/SalaryCard",
  component: SalaryCard,
  tags: ["autodocs"],
} as Meta<typeof SalaryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SalaryCardDefault: Story = {
  render: () => (
    <SalaryCard type={mockSalaryData[0].type} value={mockSalaryData[0].value} />
  ),
};

export const SalaryCardPaypal: Story = {
  render: () => (
    <SalaryCard type={mockSalaryData[1].type} value={mockSalaryData[1].value} />
  ),
};
