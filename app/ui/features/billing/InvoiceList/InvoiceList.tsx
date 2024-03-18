"use client";

// Components
import { Button, Text } from "@tremor/react";
import InvoiceItem from "../InvoiceItem/InvoiceItem";

// Types
import { Invoice } from "@/types";

interface InvoicesProps {
  invoices: Invoice[];
}

const Invoices = ({ invoices }: InvoicesProps) => {
  const invoiceListDeskTop = invoices.slice(0, 2).map(invoice => {
    const { id, invoicePrefix, createdAt, totalCost } = invoice;
    return (
      <InvoiceItem
        key={id}
        id={id}
        date={createdAt}
        invoicePrefix={invoicePrefix}
        price={totalCost}
      />
    );
  });

  const invoiceList = invoices.slice(0, 5).map(invoice => {
    const { id, invoicePrefix, createdAt, totalCost } = invoice;
    return (
      <InvoiceItem
        key={id}
        id={id}
        date={createdAt}
        invoicePrefix={invoicePrefix}
        price={totalCost}
      />
    );
  });

  return (
    <div className="p-6 bg-white dark:bg-dark-tremor-primary rounded-lg shadow-md w-full min-h-[234px]">
      <div className="text-primary dark:text-white flex justify-between items-center">
        <h3 className="font-semibold">Invoices</h3>
        <Button
          variant="light"
          className="uppercase font-bold px-4 py-1.5 border border-primary dark:border-white rounded-md tracking-wide">
          <Text className="text-xs text-primary">view all</Text>
        </Button>
      </div>
      <ul className="flex flex-col gap-2 mt-6 hidden xl:block">
        {invoiceListDeskTop}
      </ul>
      <ul className="flex flex-col gap-2 mt-6 xl:hidden">{invoiceList}</ul>
    </div>
  );
};

export default Invoices;
