// Components
import Invoices from "../InvoiceList/InvoiceList";

// Types
import { Invoice } from "@/types";

interface InvoicesDataProps {
  invoices: Invoice[];
}

const InvoiceDetail = ({ invoices }: InvoicesDataProps) => {
  return <Invoices invoices={invoices} />;
};

export default InvoiceDetail;
