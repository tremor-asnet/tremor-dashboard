// Libs
import dayjs from "dayjs";

// Components
import Transactions from "../Transaction/Transactions";

// Types
import { Transaction } from "@/types";

interface TransactionDetailProps {
  transactionsData: Transaction[];
}

const TransactionDetail = ({ transactionsData }: TransactionDetailProps) => {
  const transactionDate = dayjs(transactionsData[0].createdAt).format(
    "MMM YYYY",
  );

  return <Transactions newest={transactionsData} date={transactionDate} />;
};

export default TransactionDetail;
