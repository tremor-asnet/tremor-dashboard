"use client";

// Components
import { StatusButton } from "@/ui/components";

// Helpers
import { formatDateTimeForTransaction, getContentByProps } from "@/helpers";
import { STATUS_LIST } from "@/types";

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
        <StatusButton
          extendedClass={classes}
          type={STATUS_LIST.ERROR}
          status={STATUS_LIST.SUCCESS}
          value={value}
        />
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