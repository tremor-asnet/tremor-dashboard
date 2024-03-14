// Types
import { OptionType } from "@/types";

// Components
import { Button } from "@tremor/react";

// Constants
import { VARIANT_BUTTON } from "@/constants";

interface SelectOptionProps {
  title: string;
  data: OptionType[];
  onSelectItem: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSelectRemove: () => void;
}

const SelectOption = ({
  data,
  title,
  onSelectItem,
  onSelectRemove,
}: SelectOptionProps) => (
  <>
    <ul>
      {data.map(({ option, value }) => (
        <li
          className="w-full text-tremor-default cursor-pointer text-secondary px-4 py-[0.3rem] hover:bg-body hover:text-tremor-brand-subtle hover:rounded-md min-h-[auto] dark:text-dark-romance dark:hover:bg-dark-secondary"
          key={option}>
          <Button
            onClick={onSelectItem}
            value={value}
            variant={VARIANT_BUTTON.LIGHT}
            className="text-secondary hover:text-primary dark:text-lighter dark:hover:text-lighter">
            {title}: {option}
          </Button>
        </li>
      ))}
    </ul>
    <div className="h-px bg-gradient-select my-2 opacity-25 dark:bg-gradient-divider" />
    <Button
      className="w-full text-tremor-default hover:text-attention cursor-pointer justify-start text-attention dark:text-attention dark:hover:ttext-attention px-4 py-[0.3rem] hover:bg-body hover:rounded-md min-h-[auto] dark:hover:bg-dark-secondary text-left"
      onClick={onSelectRemove}
      variant={VARIANT_BUTTON.LIGHT}>
      Remove Filter
    </Button>
  </>
);

export default SelectOption;
