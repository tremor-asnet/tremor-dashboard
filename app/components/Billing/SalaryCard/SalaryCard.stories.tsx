import type { Meta, StoryObj } from "@storybook/react";

// Components
import SalaryCard from "./SalaryCard";

//Mocks
import { mockSalaryData } from "@/mocks";

const meta = {
  title: "Components/SalaryCard",
  component: SalaryCard,
  tags: ["autodocs"],
} as Meta<typeof SalaryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SalaryCardDefault: Story = {
  render: () => <SalaryCard aggregation={mockSalaryData[0]} />,
};

export const SalaryCardPaypal: Story = {
  render: () => <SalaryCard aggregation={mockSalaryData[1]} />,
};
