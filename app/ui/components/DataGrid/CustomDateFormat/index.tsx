// Components
import { Text } from "@tremor/react";

// Constants
import { SEPARATOR } from "@/constants";

// Helpers
import { formatDateTime } from "@/helpers";

interface CustomDateFormatProps {
  date: string;
}

const CustomDateFormat = ({ date }: CustomDateFormatProps) => (
  <Text className="text-xs dark:text-lighter font-semibold leading-[15px] tracking-[0.4px] order-dagte">
    {formatDateTime(date, SEPARATOR.COMMAS)}
  </Text>
);

export default CustomDateFormat;
