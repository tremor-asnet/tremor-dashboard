"use client";

// Libs
import { Flex } from "@tremor/react";

// Components
const InfoInvoiceBody = dynamic(
  () => import("../InfoInvoiceBody/InfoInvoiceBody"),
);
const TableInvoice = dynamic(() => import("../TableInvoice/TableInvoice"));

// Types
import { TInvoice } from "@/types";

// Styles
import "@/styles/invoice.css";
import dynamic from "next/dynamic";

const InvoiceBody = ({
  id,
  createdAt,
  dueAt,
  products,
  totalCost,
}: TInvoice) => (
  <Flex flexDirection="col" alignItems="end" className="invoice-body">
    <InfoInvoiceBody id={id} createdAt={createdAt} dueAt={dueAt} />
    <TableInvoice details={products} totalCost={totalCost} />
  </Flex>
);

export default InvoiceBody;
