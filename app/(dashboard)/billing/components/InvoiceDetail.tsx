// Components
import Invoices from "./Invoices/Invoices";

// Services
import { getInvoices } from "@/services";

const InvoiceDetail = async () => {
  const invoicesData = await getInvoices();

  return <Invoices invoices={invoicesData} />;
};

export default InvoiceDetail;
