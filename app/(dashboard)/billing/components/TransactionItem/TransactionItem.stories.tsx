import type { Meta, StoryObj } from "@storybook/react";

// Components
import TransactionItem from "./TransactionItem";

// Mocks
import { MOCK_TRANSACTIONS } from "@/mocks/transaction";

const meta = {
  title: "Components/TransactionItem",
  component: TransactionItem,
  tags: ["autodocs"],
} as Meta<typeof TransactionItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TransactionItem
      createdAt={MOCK_TRANSACTIONS[0].createdAt}
      service={MOCK_TRANSACTIONS[0].service}
      amount={MOCK_TRANSACTIONS[0].amount}
      type={MOCK_TRANSACTIONS[0].type}
      status={MOCK_TRANSACTIONS[0].status}
    />
  ),
};
