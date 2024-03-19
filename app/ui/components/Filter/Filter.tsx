"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { RefObject, useState } from "react";

// Components
import { Button, Text } from "@tremor/react";
import { SelectOption } from "@/ui/components";

// Icons
import { RiArrowDropDownLine } from "react-icons/ri";

// Hooks
import { useOutsideClick } from "@/hooks";

// Types
import { OptionType } from "@/types";

interface ProductFilterProps {
  title: string;
  listOption: OptionType[];
}

const Filter = ({ title, listOption }: ProductFilterProps) => {
  const searchParams = useSearchParams();

  const [showListOption, setShowListOption] = useState(false);
  const [filterSelected, setFilterSelected] = useState("");

  const router = useRouter();

  const newParams = new URLSearchParams(searchParams.toString());
  const pathName = usePathname();

  let currentOption = "filter";

  const currentStatus = newParams.get(currentOption);

  const selectRef = useOutsideClick(() => {
    setShowListOption(false);
  });

  const handleClickFilter = () => {
    setShowListOption(true);
  };

  const handleSelectFilter = (option: string, value: string) => {
    setFilterSelected(option);

    if (currentStatus !== value) {
      newParams.set(currentOption, value);
      newParams.set("page", "1");
    }

    const query = newParams ? `${newParams}` : "";
    router.push(`${pathName}?${query}`);

    setShowListOption(false);
  };

  const handleRemoveFilter = () => {
    setFilterSelected("");
    newParams.delete(currentOption);
    router.push(`${pathName}?${newParams.toString()}`);
    setShowListOption(false);
  };

  return (
    <div className="relative max-w-[220px]">
      <Button
        icon={RiArrowDropDownLine}
        iconPosition="right"
        variant="secondary"
        className="uppercase py-[9px] px-[26px] font-bold bg-transparent border-primary hover:text-light dark:hover:text-light focus:border-primary hover:border-primary text-primary focus:text-white dark:text-white hover:bg-transparent focus:bg-dark-secondary rounded-lg  dark:border-primary dark:bg-transparent dark:hover:border-primary dark:hover:bg-transparent dark:focus:bg-dark-secondary box-shadow-transparent"
        onClick={handleClickFilter}
        data-testid="toggle-filter">
        {filterSelected ? `${title}: ${filterSelected}` : "Filters"}
      </Button>
      {showListOption && (
        <div
          data-testid="list-option"
          ref={selectRef as RefObject<HTMLDivElement>}
          className="absolute z-[2] w-[176px] right-0 shadow-tremor-cardImage dark:shadow-select-option bg-secondary p-2 rounded-md dark:bg-dark-tremor-primary">
          <SelectOption
            title={title}
            data={listOption}
            onSelectItem={handleSelectFilter}
            onSelectRemove={handleRemoveFilter}
          />
        </div>
      )}
    </div>
  );
};

export default Filter;
