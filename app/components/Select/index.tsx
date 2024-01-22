"use client";

import { listOption } from "@/constants";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Button, Text } from "@tremor/react";
import { RefObject, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Select = () => {
  const [showListOption, setShowListOption] = useState(false);
  const selectRef = useOutsideClick(() => {
    setShowListOption(false);
  });

  return (
    <div>
      <Button
        icon={RiArrowDropDownLine}
        iconPosition="right"
        className="font-bold bg-transparent border-primary focus:border-primary hover:border-primary focus:opacity-75 hover:opacity-75 text-primary focus:text-white dark:text-dark-tremor-content-title hover:bg-transparent active:bg-primary focus:bg-primary rounded-lg hover:!shadow-btn-primary-hover dark:border-primary dark:bg-transparent dark:hover:border-primary dark:hover:bg-transparent"
        onClick={() => setShowListOption(true)}>
        <Text className="uppercase text-xs">Filters</Text>
      </Button>
      {showListOption && (
        <div ref={selectRef as RefObject<HTMLDivElement>}>
          <ul className="absolute z-[1] w-[160px] right-0 shadow-tremor-cardImage dark:shadow-dark-select-option bg-secondary p-2 rounded-md dark:bg-dark-tremor-primary">
            {listOption.map(({ option }) => (
              <li
                key={option}
                className="w-full text-tremor-default cursor-pointer text-secondary px-4 py-[0.3rem] hover:bg-body hover:text-tremor-brand-subtle hover:rounded-md min-h-[auto] dark:text-dark-romance dark:hover:bg-dark-secondary">
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

export default Select;
