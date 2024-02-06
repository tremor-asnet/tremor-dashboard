// Icons
import { FaCalendarAlt } from "react-icons/fa";

// Components
import TransactionList from "@/components/Transaction/TransactionList/TransactionList";

// Types
import { Transaction } from "@/types";

interface TransactionsProps {
  newest: Transaction[];
  yesterday: Transaction[];
  date: string;
}

const Transactions = ({ newest, yesterday, date }: TransactionsProps) => {
  return (
    <div className="p-6 bg-white dark:bg-[#202940] rounded-lg shadow-md">
      <div className="flex justify-between">
        <h6 className="font-semibold text-[#344767] dark:text-white">
          Your Transactions
        </h6>
        <div className="flex items-center text-[#7b809a]">
          <FaCalendarAlt />
          <p className="text-sm ml-2">{date}</p>
        </div>
      </div>
      <h6 className="transaction-list-heading">NEWEST</h6>
      <TransactionList transactions={newest} />
      <h6 className="transaction-list-heading">YESTERDAY</h6>
      <TransactionList transactions={yesterday} />
    </div>
  );
};

export default Transactions;
