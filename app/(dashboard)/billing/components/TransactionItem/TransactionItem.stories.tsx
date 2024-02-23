import type { Meta, StoryObj } from "@storybook/react";

// Components
import TransactionItem from "./TransactionItem";

// Mocks
import { MOCK_TRANSACTIONS } from "@/mocks/transaction";

const meta = {
  title: "Components/TransactionItem",
  component: TransactionItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "TransactionItem is a component use for TransactionList component",
      },
    },
  },
} as Meta<typeof TransactionItem>;

export default meta;

type Story = StoryObj<typeof meta>;

const { createdAt, service, amount, type, status } = MOCK_TRANSACTIONS[0];

export const Default: Story = {
  render: () => (
    <TransactionItem
      createdAt={createdAt}
      service={service}
      amount={amount}
      type={type}
      status={status}
    />
  ),
};
