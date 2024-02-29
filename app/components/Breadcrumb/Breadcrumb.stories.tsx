import type { Meta, StoryObj } from "@storybook/react";

// Components
import Breadcrumb from "./Breadcrumb";

const mockProps = {
  isScrolled: false,
  pathname: "/analytics",
};

const meta = {
  title: "Components/Breadcrumb",
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
  render: () => (
    <div className="bg-body dark:bg-dark-primary p-6 rounded-xl">
      <Breadcrumb {...mockProps} />
    </div>
  ),
};
