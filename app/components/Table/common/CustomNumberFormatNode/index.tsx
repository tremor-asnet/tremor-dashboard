// Constants
import { CURRENCY } from "@/constants";

// Helpers
import { formatDotsToCommasNumber } from "@/helpers";

interface CustomNumberFormatNodeProps {
  value: number;
}

export const CustomNumberFormatNode = ({
  value,
}: CustomNumberFormatNodeProps) => (
  <p className="text-xs dark:text-white font-semibold leading-[15px] tracking-[0.4px] order-revenue">
    {formatDotsToCommasNumber({
      value,
      currency: CURRENCY.DOLLAR,
      positionFraction: 2,
    })}
  </p>
);
