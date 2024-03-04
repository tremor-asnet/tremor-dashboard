"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { RefObject, useState } from "react";

// Components
import { Button, Text } from "@tremor/react";
import { SelectOption } from "@/ui/components";

// Icons
import { RiArrowDropDownLine } from "react-icons/ri";

// Constants
import { ProductList } from "@/constants";

// Hooks
import { useOutsideClick } from "@/hooks";

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

  const handleSelectFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.target as HTMLInputElement;
    const isAvailable = value.toString();

    if (currentIsAvailable !== isAvailable) {
      newParams.set("isAvailable", isAvailable);
    }

    const query = newParams ? `${newParams}` : "";
    router.push(`${pathName}?${query}`);

    setShowListOption(false);
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
        className="py-[9px] px-[26px] font-bold bg-transparent border-primary hover:text-light dark:hover:text-light focus:border-primary hover:border-primary text-primary focus:text-white dark:text-white hover:bg-transparent focus:bg-dark-secondary rounded-lg dark:border-primary dark:bg-transparent dark:hover:border-primary dark:hover:bg-transparent box-shadow-transparent"
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
            title="Is Available"
            data={ProductList}
            onSelectItem={handleSelectFilter}
            onSelectRemove={handleRemoveFilter}
          />
        </div>
      )}
    </div>
  );
};

export default ProductFilter;
