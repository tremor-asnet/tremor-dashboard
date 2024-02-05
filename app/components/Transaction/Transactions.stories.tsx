// Components
import Transactions from "./Transactions";

// Mocks
import { MOCK_TRANSACTIONS } from "@/mocks/transaction";

export default {
  component: Transactions,
  title: "Components/Transactions",
  tags: ["autodocs"],
};

const newest = MOCK_TRANSACTIONS.slice(0, 2);
const yesterday = MOCK_TRANSACTIONS.slice(2);

export const DefaultTransactions = {
  args: {
    newest: newest,
    yesterday: yesterday,
    date: "23 - 30 March 2020",
  },
};
