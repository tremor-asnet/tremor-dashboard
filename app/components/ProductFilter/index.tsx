"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { RefObject, useState } from "react";
import { Button, Text } from "@tremor/react";

// Icons
import { RiArrowDropDownLine } from "react-icons/ri";

// Constants
import { ProductListOption } from "@/constants";

// Hooks
import { useOutsideClick } from "@/hooks";

// Components
import { FilterItem } from "@/components";

interface ProductFilterProps {
  title: string;
}

const ProductFilter = ({ title }: ProductFilterProps) => {
  const searchParams = useSearchParams();

  const [showListOption, setShowListOption] = useState(false);

  const router = useRouter();

  const newParams = new URLSearchParams(searchParams.toString());
  const pathName = usePathname();
  const currentIsAvailable = newParams.get("isAvailable");

  const selectRef = useOutsideClick(() => {
    setShowListOption(false);
  });

  const handleClickFilter = () => {
    setShowListOption(true);
  };

  const handleClickItem = (isAvailable: string) => {
    if (currentIsAvailable !== isAvailable) {
      newParams.set("isAvailable", isAvailable);
    }

    const query = newParams ? `${newParams}` : "";
    router.push(`${pathName}?${query}`);

    setShowListOption(false);
  };

  const handleSelectFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.target as HTMLInputElement;
    handleClickItem(value.toString());
  };

  const handleRemoveFilter = () => {
    newParams.delete("isAvailable");
    router.push(`${pathName}?${newParams.toString()}`);
    setShowListOption(false);
  };

  return (
    <div>
      <Button
        icon={RiArrowDropDownLine}
        iconPosition="right"
        variant="secondary"
        className="py-[9px] px-[26px] font-bold bg-transparent border-primary hover:text-light dark:hover:text-light focus:border-primary hover:border-primary focus:opacity-75 hover:opacity-75 text-primary focus:text-white dark:text-white hover:bg-transparent active:bg-primary focus:bg-primary rounded-lg hover:!shadow-btn-primary-hover dark:border-primary dark:bg-transparent dark:hover:border-primary dark:hover:bg-transparent"
        onClick={handleClickFilter}>
        <Text className="uppercase text-xs text-inherit dark:text-inherit">
          {title}
        </Text>
      </Button>
      {showListOption && (
        <div ref={selectRef as RefObject<HTMLDivElement>}>
          <ul className="absolute z-[1] w-[160px] right-0 shadow-tremor-cardImage dark:shadow-dark-select-option bg-secondary p-2 rounded-md dark:bg-dark-tremor-primary">
            <ul>
              {ProductListOption.map(({ option, value }) => (
                <FilterItem
                  key={option}
                  title="Is Available"
                  option={option}
                  value={value}
                  additionalClass="w-full text-tremor-default cursor-pointer text-secondary px-4 py-[0.3rem] hover:bg-body hover:text-tremor-brand-subtle hover:rounded-md min-h-[auto] dark:text-dark-romance dark:hover:bg-dark-secondary"
                  onSelectFilter={handleSelectFilter}
                />
              ))}
            </ul>
            <div className="h-px bg-gradient-select my-2 opacity-25 dark:bg-gradient-divider" />
            <li
              className="w-full text-tremor-default cursor-pointer text-attention px-4 py-[0.3rem] hover:bg-body hover:rounded-md min-h-[auto] dark:hover:bg-dark-secondary"
              onClick={handleRemoveFilter}>
              Remove Filter
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;
