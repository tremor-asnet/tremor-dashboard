import type { Meta, StoryObj } from "@storybook/react";

// Components
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";

// Constants
import { ROUTES } from "../constants";

const meta = {
  title: "Components/BreadCrumb",
  component: BreadCrumb,
  tags: ["autodocs"],
} as Meta<typeof BreadCrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  render: () => <BreadCrumb />,
};
