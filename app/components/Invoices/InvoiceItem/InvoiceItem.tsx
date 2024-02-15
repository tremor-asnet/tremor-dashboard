// Components
import { MdPictureAsPdf } from "react-icons/md";

interface InvoiceItemProps {
  date: string;
  code: string;
  price: number;
  onClick: () => void;
}

const InvoiceItem = ({ date, code, price, onClick }: InvoiceItemProps) => (
  <li className="w-full flex justify-between p-2">
    <div>
      <p className="text-sm font-semibold text-[#344767] dark:text-white">
        {date}
      </p>
      <p className="text-xs mt-1 text-[#7b809a]">&#35;{code}</p>
    </div>
    <div className="flex gap-6 items-center">
      <p className="text-sm text-[#7b809a]">&#36;{price}</p>
      <button
        className="flex gap-1 items-center text-[#344767] dark:text-white font-semibold"
        onClick={onClick}>
        <MdPictureAsPdf />
        PDF
      </button>
    </div>
  </li>
);

export default InvoiceItem;
