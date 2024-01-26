import { SEPARATOR } from "@/constants";
import { formatDateTime } from "@/helpers";

interface FormatDateNodeProps {
  date: string;
}

const FormatDateNode = ({ date }: FormatDateNodeProps) => (
  <p className="text-xs dark:text-white font-semibold leading-[15px] tracking-[0.4px] order-dagte">
    {formatDateTime(date, SEPARATOR.COMMAS)}
  </p>
);

export default FormatDateNode;
