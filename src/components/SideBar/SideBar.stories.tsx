import type { Meta, StoryObj } from "@storybook/react";

// Components
import SideBar from "./SideBar";

export default { component: SideBar };
const meta = {
  title: "Components/SideBar",
  component: SideBar,
  tags: ["autodocs"],
} as Meta<typeof SideBar>;

type Story = StoryObj<typeof meta>;

export const SideBarDashboard: Story = {
  render: () => <SideBar onSignOut={() => {}} />,
};
