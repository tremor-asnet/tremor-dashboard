"use client";

import { RefObject, useState } from "react";
import { Button, Text } from "@tremor/react";

// Icons
import { RiArrowDropDownLine } from "react-icons/ri";

// Constants
import { listOption } from "@/constants";

// Hooks
import { useOutsideClick } from "@/hooks";

// Components
import { SelectOption } from "@/components";

interface OrderFilterProps {
  title: string;
}

const OrderFilter = ({ title }: OrderFilterProps) => {
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
        className="uppercase text-xs text-primary font-bold border-primary focus:border-primary hover:border-primary focus:opacity-75 hover:opacity-75 text-primary focus:!text-white dark:!text-dark-tremor-content-title hover:bg-transparent active:bg-primary focus:bg-primary rounded-lg hover:!shadow-btn-primary-hover dark:border-primary dark:bg-transparent dark:hover:border-primary dark:hover:bg-transparent hover:text-primary"
        onClick={handleClickOption}>
        {title}
      </Button>
      {showListOption && (
        <div ref={selectRef as RefObject<HTMLDivElement>}>
          <SelectOption data={listOption} onClickItem={handleClickItem} />
        </div>
      )}
    </div>
  );
};

export default OrderFilter;
