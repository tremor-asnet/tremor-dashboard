// Icons
import { FaRegCalendarAlt } from "react-icons/fa";

// Components
import { Text } from "@tremor/react";
import TransactionList from "../TransactionList/TransactionList";

// Types
import { OptionType, Transaction, User } from "@/types";

// Services
import { getUser } from "@/services";

// Components
import CreateTransactionContainer from "./CreateTransactionContainer";

interface TransactionsProps {
  newest: Transaction[];
  date: string;
}

const Transactions = async ({ newest, date }: TransactionsProps) => {
  const data: User[] = await getUser();

  const emailOptions: OptionType[] = data.map((user: User, index) => ({
    option: user.email,
    value: (index + 1).toString(),
  }));

  return (
    <div className="p-6 bg-white dark:bg-[#202940] rounded-lg shadow-md create-transaction-wrapper">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <h6 className="font-semibold text-primary dark:text-white">
            Your Transaction&#39;s
          </h6>
          <CreateTransactionContainer options={emailOptions} />
        </div>
        <div className="flex items-center text-secondary">
          <FaRegCalendarAlt className="dark:text-lighter" />
          <Text className="dark:text-lighter ml-2">{date}</Text>
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
