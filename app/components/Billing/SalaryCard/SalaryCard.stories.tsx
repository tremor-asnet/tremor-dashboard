import type { Meta, StoryObj } from "@storybook/react";
import { LuLandmark } from "react-icons/lu";

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
  render: () => <SalaryCard salaryData={mockSalaryData[0]} />,
};

export const SalaryCardPaypal: Story = {
  render: () => <SalaryCard salaryData={mockSalaryData[1]} />,
};
