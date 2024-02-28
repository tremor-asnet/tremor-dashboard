// Icons
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { BsExclamationLg } from "react-icons/bs";

// Helpers
import { formattedNumber } from "@/helpers";

// Constants
import { TRANSACTION_CLASS, TRANSACTION_COLOR } from "@/constants";

export const getContentByProps = (
  status: number,
  type: number,
  amount: number,
) => {
  const formattedAmount = formattedNumber({ value: amount });
  const hasStatus = status !== 0;
  const hasType = type !== 0;

  return {
    color: `${
      hasStatus
        ? hasType
          ? TRANSACTION_COLOR.DECREASE
          : TRANSACTION_COLOR.INCREASE
        : TRANSACTION_COLOR.PENDING
    }`,

    classes: `${
      hasStatus
        ? hasType
          ? TRANSACTION_CLASS.DECREASE
          : TRANSACTION_CLASS.INCREASE
        : TRANSACTION_CLASS.PENDING
    }`,

    value: `${
      hasStatus
        ? hasType
          ? `- $${formattedAmount}`
          : `+ $${formattedAmount}`
        : "Pending"
    }`,
  };
};
