// Helpers
import { moneyFormat } from "@/helpers";

// Constants
import { TRANSACTION_CLASS, TRANSACTION_COLOR } from "@/constants";

// Types
import { STATUS_LIST } from "@/types";

export const getContentByProps = (
  status: number,
  type: number,
  amount: number,
) => {
  const formattedAmount = moneyFormat({ value: amount });
  const hasStatus = status !== STATUS_LIST.ERROR;
  const hasType = type !== STATUS_LIST.ERROR;

  if (!hasStatus) {
    return {
      color: TRANSACTION_COLOR.PENDING,
      classes: TRANSACTION_CLASS.PENDING,
      value: "Pending",
    };
  }

  if (hasType) {
    return {
      color: TRANSACTION_COLOR.DECREASE,
      classes: TRANSACTION_CLASS.DECREASE,
      value: `- $${formattedAmount}`,
    };
  }

  return {
    color: TRANSACTION_COLOR.INCREASE,
    classes: TRANSACTION_CLASS.INCREASE,
    value: `+ $${formattedAmount}`,
  };
};
