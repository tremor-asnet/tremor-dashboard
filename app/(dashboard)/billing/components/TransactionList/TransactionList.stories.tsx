import type { Meta, StoryObj } from "@storybook/react";

// Components
import TransactionList from "./TransactionList";

// Mocks
import { MOCK_TRANSACTIONS } from "@/mocks/transaction";

const meta = {
  title: "Components/TransactionList",
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
} as Meta<typeof TransactionList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <TransactionList transactions={MOCK_TRANSACTIONS} />,
};
