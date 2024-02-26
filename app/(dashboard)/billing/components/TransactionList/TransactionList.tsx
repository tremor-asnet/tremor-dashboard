// Components
import TransactionItem from "../TransactionItem/TransactionItem";

// Types
import { Transaction } from "@/types";

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
  const transactionItems = transactions.map(transaction => {
    const { id, createdAt, amount, service, status, type } = transaction;
    return (
      <TransactionItem
        key={id}
        createdAt={createdAt}
        type={type}
        status={status}
        service={service}
        amount={amount}
      />
    );
  });
  return <ul>{transactionItems}</ul>;
};

export default TransactionList;
