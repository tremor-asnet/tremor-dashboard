"use client";

import { RefObject, useState } from "react";
import { Button, Text } from "@tremor/react";

// Icons
import { RiArrowDropDownLine } from "react-icons/ri";

// Constants
import { listOption } from "@/constants";

// Hooks
import { useOutsideClick } from "@/hooks";

interface SelectProps {
  title: string;
}

const OrderFilter = ({ title }: SelectProps) => {
  const [showListOption, setShowListOption] = useState(false);
  const selectRef = useOutsideClick(() => {
    setShowListOption(false);
  });

  const handleClickOption = () => {
    setShowListOption(true);
  };

  const handleClickItem = () => {
    setShowListOption(false);
  };

  return (
    <div>
      <Button
        icon={RiArrowDropDownLine}
        iconPosition="right"
        variant="secondary"
        className="font-bold border-primary focus:border-primary hover:border-primary focus:opacity-75 hover:opacity-75 text-primary focus:text-white dark:text-dark-tremor-content-title hover:bg-transparent active:bg-primary focus:bg-primary rounded-lg hover:!shadow-btn-primary-hover dark:border-primary dark:bg-transparent dark:hover:border-primary dark:hover:bg-transparent"
        onClick={handleClickOption}>
        <Text className="uppercase text-xs text-primary">{title}</Text>
      </Button>
      {showListOption && (
        <div ref={selectRef as RefObject<HTMLDivElement>}>
          <ul className="absolute z-[1] w-[160px] right-0 shadow-tremor-cardImage dark:shadow-dark-select-option bg-secondary p-2 rounded-md dark:bg-dark-tremor-primary">
            {listOption.map(({ option, value }) => (
              <li
                key={option}
                value={value}
                className="w-full text-tremor-default cursor-pointer text-secondary px-4 py-[0.3rem] hover:bg-body hover:text-tremor-brand-subtle hover:rounded-md min-h-[auto] dark:text-dark-romance dark:hover:bg-dark-secondary"
                onClick={handleClickItem}>
                Status: {option}
              </li>
            ))}
            <div className="h-px bg-gradient-select my-2 opacity-25 dark:bg-gradient-divider" />
            <li className="w-full text-tremor-default cursor-pointer text-attention px-4 py-[0.3rem] hover:bg-body hover:rounded-md min-h-[auto] dark:hover:bg-dark-secondary">
              Remove File
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrderFilter;
