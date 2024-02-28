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
  const { color, classes, value } = getContentByProps(status, type, amount);

  return (
    <div className="flex pr-4 py-4 justify-between items-center">
      <div className="flex gap-4 items-center">
        <StatusButton extendedClass={classes} status={0} type={0} />
        <div>
          <h6 className="text-sm font-semibold text-primary dark:text-white mb-1">
            {service}
          </h6>
          <p className="text-xs text-secondary dark:text-lighter">
            {formatDateTimeForTransaction(createdAt)}
          </p>
        </div>
      </div>
      <p className={`text-sm font-semibold text-${color}`}>{value}</p>
    </div>
  );
};

export default TransactionItem;
