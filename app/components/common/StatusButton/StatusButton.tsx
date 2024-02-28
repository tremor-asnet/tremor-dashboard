import { ReactNode } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { BsExclamationLg } from "react-icons/bs";

interface StatusButtonProps {
  extendedClass: string;
  status: number;
  type: number;
}

const StatusButton = ({ extendedClass, status, type }: StatusButtonProps) => {
  let icon = <BiChevronDown />;

  switch (true) {
    case status === 0:
      icon = <BsExclamationLg />;
      break;
    case type === 0:
      icon = <BiChevronUp />;
      break;
    default:
      break;
  }

  return (
    <button
      type="button"
      className={`flex shrink-0 w-9 h-9 justify-center items-center border rounded-full ${extendedClass}`}>
      {icon}
    </button>
  );
};

export default StatusButton;
