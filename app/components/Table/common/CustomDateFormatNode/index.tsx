// Constants
import { SEPARATOR } from "@/constants";

// Helpers
import { formatDateTime } from "@/helpers";

interface CustomDateFormatNodeProps {
  date: string;
}

const CustomDateFormatNode = ({ date }: CustomDateFormatNodeProps) => (
  <p className="text-xs dark:text-white font-semibold leading-[15px] tracking-[0.4px] order-dagte">
    {formatDateTime(date, SEPARATOR.COMMAS)}
  </p>
);

export default CustomDateFormatNode;
