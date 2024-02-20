// Components
import Transactions from "./Transactions";

// Mocks
import { MOCK_TRANSACTIONS } from "@/mocks/transaction";

export default {
  component: Transactions,
  title: "Components/Transactions",
  tags: ["autodocs"],
};

const newest = MOCK_TRANSACTIONS;

export const DefaultTransactions = {
  args: {
    newest: newest,
    date: "23 - 30 March 2020",
  },
};
