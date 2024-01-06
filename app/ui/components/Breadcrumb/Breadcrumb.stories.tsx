import type { Meta, StoryObj } from "@storybook/react";

// Components
import Breadcrumb from "./Breadcrumb";

const meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
} as Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  render: () => <Breadcrumb />,
};
