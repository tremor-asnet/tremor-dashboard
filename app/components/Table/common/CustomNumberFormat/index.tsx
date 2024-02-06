// Constants
import { CURRENCY } from "@/constants";

// Helpers
import { formatDotsToCommasNumber } from "@/helpers";

interface CustomNumberFormatProps {
  value: number;
}

export const CustomNumberFormat = ({ value }: CustomNumberFormatProps) => (
  <p className="text-xs dark:text-lighter font-semibold leading-[15px] tracking-[0.4px] order-revenue">
    {formatDotsToCommasNumber({
      value,
      currency: CURRENCY.DOLLAR,
      positionFraction: 2,
    })}
  </p>
);
