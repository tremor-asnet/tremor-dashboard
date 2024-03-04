// Components
import Invoices from "../Invoices/Invoices";

// Types
import { Invoice } from "@/types";

interface InvoicesDataProps {
  invoices: Invoice[];
}

const InvoiceDetail = ({ invoices }: InvoicesDataProps) => {
  return <Invoices invoices={invoices} />;
};

export default InvoiceDetail;
