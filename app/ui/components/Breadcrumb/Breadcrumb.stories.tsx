import type { Meta, StoryObj } from "@storybook/react";

// Components
import Breadcrumb from "./Breadcrumb";

const meta = {
  title: "Components/Common/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  argTypes: {
    isScrolled: { description: "Scrolled for sticky header or not" },
    pathname: { description: "Path name of page" },
  },
} as Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  args: {
    isScrolled: false,
    pathname: "/analytics",
  },
};
