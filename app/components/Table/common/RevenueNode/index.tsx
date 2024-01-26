// Constants
import { CURRENCY } from "@/constants";

// Helpers
import { formatDotsToCommasNumber } from "@/helpers";

interface RevenueNodeProps {
  revenue: number;
}

const RevenueNode = ({ revenue }: RevenueNodeProps) => (
  <p className="text-xs dark:text-white font-semibold leading-[15px] tracking-[0.4px] order-revenue">
    {formatDotsToCommasNumber({
      value: revenue,
      currency: CURRENCY.DOLLAR,
      positionFraction: 2,
    })}
  </p>
);

export default RevenueNode;
