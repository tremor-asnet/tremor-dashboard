import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { BsExclamationLg } from "react-icons/bs";

// Components
import { Flex } from "@tremor/react";

interface StatusButtonProps {
  extendedClass: string;
  status?: number;
  type?: number;
  value: string;
}
// TODO: will refactor change name this component and remove props don't use
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
    <Flex
      justifyContent="center"
      className={`shrink-0 w-9 h-9 border rounded-full ${extendedClass}`}>
      {renderIcon}
    </Flex>
  );
};

export default StatusButton;
