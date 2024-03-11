// Types
import { OptionType } from "@/types";

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
          <button onClick={onSelectItem} value={value}>
            {title}: {option}
          </button>
        </li>
      ))}
    </ul>
    <div className="h-px bg-gradient-select my-2 opacity-25 dark:bg-gradient-divider" />
    <button
      className="w-full text-tremor-default cursor-pointer text-attention px-4 py-[0.3rem] hover:bg-body hover:rounded-md min-h-[auto] dark:hover:bg-dark-secondary text-left"
      onClick={onSelectRemove}>
      Remove Filter
    </button>
  </>
);

export default SelectOption;
