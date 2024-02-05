// Icons
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { BsExclamationLg } from "react-icons/bs";

// Helpers
import { formattedNumber } from "@/helpers";

// Constants
import { TRANSACTION_COLOR } from "@/constants/colors";

export const getContentByProps = (
  status: number,
  type: number,
  amount: number,
) => {
  const formattedAmount = formattedNumber({ value: amount });
  if (status === 0)
    return {
      color: `${TRANSACTION_COLOR.PENDING}`,
      classes: `text-[${TRANSACTION_COLOR.PENDING}] border-[${TRANSACTION_COLOR.PENDING}]`,
      icon: <BsExclamationLg />,
      value: "Pending",
    };
  return type === 0
    ? {
        color: `${TRANSACTION_COLOR.INCREASE}`,
        classes: `text-[${TRANSACTION_COLOR.INCREASE}] border-[${TRANSACTION_COLOR.INCREASE}]`,
        icon: <BiChevronUp />,
        value: `+ $ ${formattedAmount}`,
      }
    : {
        color: `${TRANSACTION_COLOR.DECREASE}`,
        classes: `text-[${TRANSACTION_COLOR.DECREASE}] border-[${TRANSACTION_COLOR.DECREASE}]`,
        icon: <BiChevronDown />,
        value: `- $ ${formattedAmount}`,
      };
};
