"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { RefObject, useState } from "react";

// Components
import { Button, Text } from "@tremor/react";
import { SelectOption } from "@/ui/components";

// Icons
import { RiArrowDropDownLine } from "react-icons/ri";

// Constants
import { orderListOption } from "@/constants";

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

  const handleClickFilter = () => {
    setShowListOption(true);
  };

  const handleSelectFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.target as HTMLInputElement;
    const status = value.toString();

    if (currentStatus !== status) {
      newParams.set("status", status);
      newParams.set("page", "1");
    }

    const query = newParams ? `${newParams}` : "";
    router.push(`${pathName}?${query}`);

    setShowListOption(false);
  };

  const handleRemoveFilter = () => {
    newParams.delete("status");
    router.push(`${pathName}?${newParams.toString()}`);
    setShowListOption(false);
  };

  return (
    <div>
      <Button
        icon={RiArrowDropDownLine}
        iconPosition="right"
        variant="secondary"
        className="py-[9px] px-[26px] font-bold bg-transparent border-primary hover:text-light dark:hover:text-light focus:border-primary hover:border-primary text-primary focus:text-white dark:text-white hover:bg-transparent focus:bg-dark-secondary rounded-lg  dark:border-primary dark:bg-transparent dark:hover:border-primary dark:hover:bg-transparent dark:focus:bg-dark-secondary box-shadow-transparent"
        onClick={handleClickFilter}>
        <Text className="uppercase text-xs text-inherit dark:text-inherit tracking-wide">
          {title}
        </Text>
      </Button>
      {showListOption && (
        <div
          ref={selectRef as RefObject<HTMLDivElement>}
          className="absolute z-[2] w-[176px] right-0 shadow-tremor-cardImage dark:shadow-dark-select-option bg-secondary p-2 rounded-md dark:bg-dark-tremor-primary">
          <SelectOption
            title="Status"
            data={orderListOption}
            onSelectItem={handleSelectFilter}
            onSelectRemove={handleRemoveFilter}
          />
        </div>
      )}
    </div>
  );
};

export default OrderFilter;
