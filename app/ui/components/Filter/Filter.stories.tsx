// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Constants
import { productList } from "@/constants";

// Components
import Filter from "./Filter";

const meta = {
  title: "Components/Orders/Filter",
  tags: ["autodocs"],
  component: Filter,
  argTypes: {
    statusFilter: { description: "Status of order filter" },
    removeFilter: { description: "Return back default status of order list" },
  },
} as Meta<typeof Filter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="relative text-right bg-body dark:bg-dark-primary p-6 rounded-xl">
      <Filter title="Is vailable" listOption={productList} />
    </div>
  ),
};
