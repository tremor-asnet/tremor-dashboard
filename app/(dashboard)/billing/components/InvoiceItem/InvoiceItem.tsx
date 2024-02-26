// Libs
import Link from "next/link";
import { MdPictureAsPdf } from "react-icons/md";

// Constants
import { ROUTES, SEPARATOR } from "@/constants";

// Helpers
import { formatNewDate } from "@/helpers";

interface InvoiceItemProps {
  id: number;
  date: string;
  invoicePrefix: string;
  price: number;
}

const InvoiceItem = ({ id, date, invoicePrefix, price }: InvoiceItemProps) => (
  <li className="w-full flex justify-between py-2 pr-2">
    <div>
      <p className="text-sm font-semibold text-primary dark:text-white">
        {formatNewDate(date, SEPARATOR.COMMAS)}
      </p>
      <p className="text-xs mt-1 text-secondary">
        &#35;{invoicePrefix}-{id}
      </p>
    </div>
    <div className="flex gap-6 items-center">
      <p className="text-sm text-secondary">&#36;{price}</p>
      <Link
        className="flex gap-1 items-center text-primary dark:text-white font-semibold"
        href={`${ROUTES.INVOICE_LIST}/${id}`}>
        <MdPictureAsPdf />
        PDF
      </Link>
    </div>
  </li>
);

export default InvoiceItem;
