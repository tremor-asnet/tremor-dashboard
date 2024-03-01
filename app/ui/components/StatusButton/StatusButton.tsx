import { ReactNode } from "react";

interface StatusButtonProps {
  extendedClass: string;
  icon: ReactNode;
}

const StatusButton = ({ extendedClass, icon }: StatusButtonProps) => (
  <button
    type="button"
    className={`flex shrink-0 w-9 h-9 justify-center items-center border rounded-full ${extendedClass}`}>
    {icon}
  </button>
);

export default StatusButton;
