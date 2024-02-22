"use client";

// Libs
import { Flex } from "@tremor/react";

// Components
import InfoInvoiceBody from "./InfoInvoiceBody/InfoInvoiceBody";
import TableInvoice from "./TableInvoice/TableInvoice";

// Types
import { TInvoice } from "@/types";

// Styles
import "@/styles/invoice.css";

const InvoiceBody = ({
  id,
  createdAt,
  dueAt,
  products,
  totalCost,
}: TInvoice) => (
  // <Flex className="invoice-body flex-col items-end">
  <div className="block">
    <InfoInvoiceBody id={id} createdAt={createdAt} dueAt={dueAt} />
    <TableInvoice details={products} totalCost={totalCost} />
  </div>
  // </Flex>
);

export default InvoiceBody;
