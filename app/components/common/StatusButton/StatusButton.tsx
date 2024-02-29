import { formattedNumber } from "@/helpers";
import { ReactNode } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { BsExclamationLg } from "react-icons/bs";

interface StatusButtonProps {
  extendedClass: string;
  status?: number;
  type?: number;
  value: string;
}

const StatusButton = ({
  extendedClass,
  type,
  status,
  value,
}: StatusButtonProps) => {
  const renderIcon =
    value === "Pending" ? (
      <BsExclamationLg />
    ) : value.includes("+") ? (
      <BiChevronUp />
    ) : (
      <BiChevronDown />
    );
  return (
    <button
      type="button"
      className={`flex shrink-0 w-9 h-9 justify-center items-center border rounded-full ${extendedClass}`}>
      {renderIcon}
    </button>
  );
};

export default StatusButton;
