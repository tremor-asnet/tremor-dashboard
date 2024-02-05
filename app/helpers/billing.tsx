// Icons
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { BsExclamationLg } from "react-icons/bs";

export const getContentByProps = (
  status: number,
  type: number,
  amount: number,
) => {
  if (status === 0)
    return {
      color: "#5d6c85",
      classes: "text-[#5d6c85] border-[#5d6c85]",
      icon: <BsExclamationLg />,
      value: "Pending",
    };
  return type === 0
    ? {
        color: "#4CAF50",
        classes: "text-[#4CAF50] border-[#4CAF50]",
        icon: <BiChevronUp />,
        value: `+ $ ${amount}`,
      }
    : {
        color: "#F44335",
        classes: "text-[#F44335] border-[#F44335]",
        icon: <BiChevronDown />,
        value: `- $ ${amount}`,
      };
};
