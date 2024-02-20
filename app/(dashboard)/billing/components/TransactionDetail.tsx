// Components
import Transactions from "./Transaction/Transactions";

// Services
import { getTransactions } from "@/services";

const TransactionDetail = async () => {
  const transactionsData = await getTransactions();
  return <Transactions newest={transactionsData} date="23 - 30 March 2020" />;
};

export default TransactionDetail;
