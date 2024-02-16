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
  if (status === 0)
    return {
      color: `${TRANSACTION_COLOR.PENDING}`,
      classes: `${TRANSACTION_CLASS.PENDING}`,
      icon: <BsExclamationLg />,
      value: "Pending",
    };
  return type === 0
    ? {
        color: `${TRANSACTION_COLOR.INCREASE}`,
        classes: `${TRANSACTION_CLASS.INCREASE}`,
        icon: <BiChevronUp />,
        value: `+ $${formattedAmount}`,
      }
    : {
        color: `${TRANSACTION_COLOR.DECREASE}`,
        classes: `${TRANSACTION_CLASS.DECREASE}`,
        icon: <BiChevronDown />,
        value: `- $${formattedAmount}`,
      };
};
