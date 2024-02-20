"use client";

// Components
import StatusButton from "@/components/common/StatusButton/StatusButton";

// Helpers
import { formatDateTimeForTransaction, getContentByProps } from "@/helpers";

interface TransactionItemProps {
  createdAt: string;
  service: string;
  amount: number;
  type: number;
  status: number;
}

const TransactionItem = ({
  createdAt,
  service,
  amount,
  type,
  status,
}: TransactionItemProps) => {
  const { color, classes, icon, value } = getContentByProps(
    status,
    type,
    amount,
  );

  return (
    <div className="flex p-4 justify-between items-center">
      <div className="flex gap-4 items-center">
        <StatusButton extendedClass={classes} icon={icon} />
        <div>
          <h6 className="text-sm font-semibold text-[#344767] dark:text-white mb-1">
            {service}
          </h6>
          <p className="text-xs text-[#7b809a]">
            {formatDateTimeForTransaction(createdAt)}
          </p>
        </div>
      </div>
      <p className={`text-sm font-semibold text-${color}`}>{value}</p>
    </div>
  );
};

export default TransactionItem;
