"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, RefObject, useState } from "react";
import { Button, Text } from "@tremor/react";

// Icons
import { RiArrowDropDownLine } from "react-icons/ri";

// Constants
import { listOption } from "@/constants";

// Hooks
import { useOutsideClick } from "@/hooks";

interface OrderFilterProps {
  title: string;
}

const OrderFilter = ({ title }: OrderFilterProps) => {
  const searchParams = useSearchParams();

  const [showListOption, setShowListOption] = useState(false);

  const router = useRouter();

  const newParams = new URLSearchParams(searchParams.toString());
  const pathName = usePathname();
  const currentStatus = newParams.get("status");

  const selectRef = useOutsideClick(() => {
    setShowListOption(false);
  });

  const handleClickOption = () => {
    setShowListOption(true);
  };

  const handleClickItem = (status: string) => {
    if (currentStatus !== status) {
      newParams.set("status", status);
    }

    const query = newParams ? `${newParams}` : "";
    router.push(`${pathName}?${query}`);

    setShowListOption(false);
  };

  const handleRemoveFilter = () => {
    newParams.delete("status");
    setShowListOption(false);
  };

  return (
    <div>
      <Button
        icon={RiArrowDropDownLine}
        iconPosition="right"
        variant="secondary"
        className="py-[9px] px-[26px] font-bold bg-transparent border-primary hover:text-light dark:hover:text-light focus:border-primary hover:border-primary focus:opacity-75 hover:opacity-75 text-primary focus:text-white dark:text-white hover:bg-transparent active:bg-primary focus:bg-primary rounded-lg hover:!shadow-btn-primary-hover dark:border-primary dark:bg-transparent dark:hover:border-primary dark:hover:bg-transparent"
        onClick={handleClickOption}>
        <Text className="uppercase text-xs text-inherit dark:text-inherit">
          {title}
        </Text>
      </Button>
      {showListOption && (
        <div ref={selectRef as RefObject<HTMLDivElement>}>
          <ul className="absolute z-[1] w-[160px] right-0 shadow-tremor-cardImage dark:shadow-dark-select-option bg-secondary p-2 rounded-md dark:bg-dark-tremor-primary">
            {listOption.map(({ option, value }) => (
              <li
                key={option}
                value={value}
                className="w-full text-tremor-default cursor-pointer text-secondary px-4 py-[0.3rem] hover:bg-body hover:text-tremor-brand-subtle hover:rounded-md min-h-[auto] dark:text-dark-romance dark:hover:bg-dark-secondary"
                onClick={() => handleClickItem(value.toString())}
                data-testid="option">
                Status: {option}
              </li>
            ))}
            <div className="h-px bg-gradient-select my-2 opacity-25 dark:bg-gradient-divider" />
            <li
              className="w-full text-tremor-default cursor-pointer text-attention px-4 py-[0.3rem] hover:bg-body hover:rounded-md min-h-[auto] dark:hover:bg-dark-secondary"
              onClick={handleRemoveFilter}>
              Remove File
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrderFilter;
