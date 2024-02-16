"use client";

// Components
import InvoiceItem from "@/components/Invoices/InvoiceItem/InvoiceItem";

// Types
import { Invoice } from "@/types";

interface InvoicesProps {
  invoices: Invoice[];
}

const Invoices = ({ invoices }: InvoicesProps) => {
  const handleOnClick = () => {};

  const invoiceList = invoices.slice(0, 2).map(invoice => {
    const { date, code, price } = invoice;
    return (
      <InvoiceItem
        key={code}
        date={date}
        code={code}
        price={price}
        onClick={handleOnClick}
      />
    );
  });

  return (
    <div className="p-6 bg-white dark:bg-[#202940] rounded-lg shadow-md w-full min-h-[234px]">
      <div className="text-[#344767] dark:text-white flex justify-between items-center">
        <h3 className="font-semibold">Invoices</h3>
        <button className="text-xs font-semibold px-[18px] py-[6px] border border-[#344767] dark:border-white rounded-md">
          VIEW ALL
        </button>
      </div>
      <ul className="flex flex-col gap-2 mt-6">{invoiceList}</ul>
    </div>
  );
};

export default Invoices;
