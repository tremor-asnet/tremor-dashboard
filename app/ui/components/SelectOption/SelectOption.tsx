// Types
import { OptionType } from "@/types";

// Components
import { Button } from "@tremor/react";

// Constants
import { VARIANT_BUTTON } from "@/constants";
import { memo } from "react";

interface SelectOptionProps {
  title: string;
  data: OptionType[];
  onSelectItem: (option: string, value: string) => void;
  onSelectRemove: () => void;
}

const SelectOption = ({
  data,
  title,
  onSelectItem,
  onSelectRemove,
}: SelectOptionProps) => {
  const handleSelectItem = (option: string, value: string) =>
    onSelectItem(option, value);

  return (
    <>
      <ul>
        {data.map(({ option, value }) => {
          return (
            <li
              className="w-full text-tremor-default cursor-pointer text-secondary px-4 py-[0.3rem] hover:bg-body hover:text-tremor-brand-subtle hover:rounded-md min-h-[auto] dark:text-dark-romance dark:hover:bg-dark-secondary"
              key={option}>
              <Button
                onClick={() => handleSelectItem(option, value)}
                value={value}
                variant={VARIANT_BUTTON.LIGHT}
                data-testid={`item-filter-${value}`}
                className="text-secondary hover:text-primary dark:text-lighter dark:hover:text-lighter">
                {title}: {option}
              </Button>
            </li>
          );
        })}
      </ul>
      <div className="h-px bg-gradient-select my-2 opacity-25 dark:bg-gradient-divider" />
      <Button
        data-testid="remove-filter"
        className="w-full text-tremor-default hover:text-attention cursor-pointer justify-start text-attention dark:text-attention dark:hover:ttext-attention px-4 py-[0.3rem] hover:bg-body hover:rounded-md min-h-[auto] dark:hover:bg-dark-secondary text-left"
        onClick={onSelectRemove}
        variant={VARIANT_BUTTON.LIGHT}>
        Remove Filter
      </Button>
    </>
  );
};

export default memo(SelectOption);
