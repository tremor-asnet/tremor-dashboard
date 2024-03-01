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
  argTypes: {
    createdAt: { description: "Created date of transaction item" },
    service: { description: "Service of transaction item" },
    amount: { description: "Amount of transaction item" },
    type: { description: "Type of transaction item" },
    status: { description: "Status of transaction item" },
  },
} as Meta<typeof TransactionItem>;

export default meta;

type Story = StoryObj<typeof meta>;

const { createdAt, service, amount, type, status } = MOCK_TRANSACTIONS[0];

export const Default: Story = {
  render: () => (
    <div className="dark:bg-dark_blue text-primary rounded-xl p-6 shadow-box-icon-default dark:shadow-main-content">
      <TransactionItem
        createdAt={createdAt}
        service={service}
        amount={amount}
        type={type}
        status={status}
      />
    </div>
  ),
};
