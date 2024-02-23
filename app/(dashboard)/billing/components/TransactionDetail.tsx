// Libs
import dayjs from "dayjs";

// Components
import Transactions from "./Transaction/Transactions";

// Services
import { getTransactions } from "@/services";

const TransactionDetail = async () => {
  const transactionsData = await getTransactions();
  const transactionDate = dayjs(transactionsData[0].createdAt).format(
    "MMM YYYY",
  );

  return <Transactions newest={transactionsData} date={transactionDate} />;
};

export default TransactionDetail;
