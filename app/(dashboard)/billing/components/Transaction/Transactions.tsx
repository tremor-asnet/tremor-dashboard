// Icons
import { FaRegCalendarAlt } from "react-icons/fa";

// Components
import TransactionList from "../TransactionList/TransactionList";

// Types
import { Transaction } from "@/types";

interface TransactionsProps {
  newest: Transaction[];
  date: string;
}

const Transactions = ({ newest, date }: TransactionsProps) => {
  return (
    <div className="p-6 bg-white dark:bg-[#202940] rounded-lg shadow-md">
      <div className="flex justify-between">
        <h6 className="font-semibold text-primary dark:text-white">
          Your Transaction&#39;s
        </h6>
        <div className="flex items-center text-secondary">
          <FaRegCalendarAlt className="dark:text-lighter" />
          <p className="text-sm dark:text-lighter ml-2">{date}</p>
        </div>
      </div>
      <h6 className="transaction-list-heading dark:text-lighter">NEWEST</h6>
      <div className="overflow-y-auto max-h-[505px]">
        <TransactionList transactions={newest} />
      </div>
    </div>
  );
};

export default Transactions;
