import type { Meta, StoryObj } from "@storybook/react";

// Components
import DashboardHeader from "./DashboardHeader";

const meta = {
  title: "Components/DashboardHeader",
  component: DashboardHeader,
  tags: ["autodocs"],
} as Meta<typeof DashboardHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  render: () => (
    <DashboardHeader toggleSidebar={() => {}} isCollapseSidebar={false} />
  ),
};
