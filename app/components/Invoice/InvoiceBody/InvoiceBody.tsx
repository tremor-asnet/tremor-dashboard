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

const InvoiceBody = ({ id, createdAt, dueDate, details }: TInvoice) => (
  <Flex className="invoice-body flex-col items-end">
    <InfoInvoiceBody id={id} createdAt={createdAt} dueDate={dueDate} />
    <TableInvoice details={details} />
  </Flex>
);

export default InvoiceBody;
