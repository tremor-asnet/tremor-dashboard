"use client";

// Libs
import { Flex } from "@tremor/react";

// Components
import InfoInvoiceBody from "./InfoInvoiceBody/InfoInvoiceBody";
import TableInvoiceBody from "./TableInvoiceBody/TableInvoiceBody";

// Types
import { TInvoice } from "@/types";

// Styles
import "@/styles/invoice.css";

const InvoiceBody = ({ id, created_at, dueDate, details }: TInvoice) => (
  <Flex className="invoice-body flex-col items-end">
    <InfoInvoiceBody id={id} created_at={created_at} dueDate={dueDate} />
    <TableInvoiceBody details={details} />
  </Flex>
);

export default InvoiceBody;
