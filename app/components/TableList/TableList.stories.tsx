import type { Meta, StoryObj } from "@storybook/react";

// Components
import TableList from "./TableList";

// Mock data
import { TABLE_LIST_DATA } from "@/mocks";

const meta = {
  title: "Components/TableList",
  component: TableList,
  tags: ["autodocs"],
} as Meta<typeof TableList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <TableList data={TABLE_LIST_DATA} handleCheckBox={() => {}} />,
};
