import type { Meta, StoryObj } from "@storybook/react";

// Components
import TransactionDetail from "./TransactionDetail";

// Mocks
import { MOCK_TRANSACTIONS } from "@/mocks/transaction";

const meta = {
  title: "Components/TransactionDetail",
  component: TransactionDetail,
  tags: ["autodocs"],
} as Meta<typeof TransactionDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

const transactionsData = MOCK_TRANSACTIONS;

export const Default: Story = {
  render: () => <TransactionDetail transactionsData={transactionsData} />,
};
