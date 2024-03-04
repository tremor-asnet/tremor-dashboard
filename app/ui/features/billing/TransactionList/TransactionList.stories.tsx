import type { Meta, StoryObj } from "@storybook/react";

// Components
import TransactionList from "./TransactionList";

// Mocks
import { MOCK_TRANSACTIONS } from "@/mocks/transaction";

const meta = {
  title: "Components/Billing/TransactionList",
  component: TransactionList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "TransactionList is a component use for transactions component",
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
} as Meta<typeof TransactionList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="dark:bg-dark_blue text-primary rounded-xl p-6 shadow-box-icon-default dark:shadow-main-content">
      <TransactionList transactions={MOCK_TRANSACTIONS} />
    </div>
  ),
};
