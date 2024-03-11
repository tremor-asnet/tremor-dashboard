"use client";

// Components
import { StatusButton } from "@/ui/components";
import { Text } from "@tremor/react";

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
          <Text className="text-xs text-secondary dark:text-lighter">
            {formatDateTimeForTransaction(createdAt)}
          </Text>
        </div>
      </div>
      <Text className={`font-semibold text-${color} dark:text-${color}`}>
        {value}
      </Text>
    </div>
  );
};

export default TransactionItem;
