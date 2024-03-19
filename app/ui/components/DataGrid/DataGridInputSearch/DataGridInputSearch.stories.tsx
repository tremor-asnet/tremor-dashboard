import type { Meta, StoryObj } from "@storybook/react";

// Components
import DataGridInputSearch from "./DataGridInputSearch";

const meta = {
  title: "Components/Common/DataGridInputSearch",
  component: DataGridInputSearch,
  tags: ["autodocs"],
  argTypes: {
    field: { description: "keyword of input search" },
  },
} as Meta<typeof DataGridInputSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DataGridInputSearchDefault: Story = {
  args: {
    field: "Product",
  },
};
