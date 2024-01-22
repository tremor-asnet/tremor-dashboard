"use client";

import { Button, Text } from "@tremor/react";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const listOption = [
  { option: "Paid" },
  { option: "Refunded" },
  { option: "Canceled" },
];

const Select = () => {
  const [showListOption, setShowListOption] = useState(false);

  const handleShowOption = () => {
    setShowListOption(true);
  };

  return (
    <div>
      <Button
        icon={RiArrowDropDownLine}
        iconPosition="right"
        className="font-bold bg-transparent border-primary focus:border-primary hover:border-primary focus:opacity-75 hover:opacity-75 text-primary focus:text-white dark:text-dark-tremor-content-title hover:bg-transparent active:bg-primary focus:bg-primary rounded-lg hover:!shadow-btn-primary-hover dark:border-primary dark:bg-transparent dark:hover:border-primary dark:hover:bg-transparent"
        onClick={handleShowOption}>
        <Text className="uppercase text-xs">Filters</Text>
      </Button>
      {showListOption && (
        <ul className="flex flex-col items-start absolute z-[1] w-[200px] right-0 shadow-[rgba(0,0,0,0.1)_0rem_0.625rem_0.9375rem_-0.1875rem,rgba(0,0,0,0.05)_0rem_0.25rem_0.375rem_-0.125rem] bg-white p-2 rounded-md">
          {listOption.map(({ option }) => (
            <li
              key={option}
              className="w-full text-tremor-default cursor-pointer text-[rgb(123,128,154)] px-4 py-[0.3rem] hover:bg-[rgb(240,242,245)] hover:text-[rgb(52,71,103)] hover:rounded-md min-h-[auto]">
              Status: {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
