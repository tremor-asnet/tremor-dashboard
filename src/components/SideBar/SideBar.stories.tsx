import type { Meta, StoryObj } from "@storybook/react";

// Components
import SideBar from "./SideBar";

const meta = {
  title: "Components/SideBar",
  component: SideBar,
  tags: ["autodocs"],
} as Meta<typeof SideBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SideBarDashboard: Story = {
  render: () => (
    <SideBar
      onSignOut={function (): Promise<void> {
        throw new Error("Function not implemented.");
      }}
    />
  ),
};
