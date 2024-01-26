import { SelectOptionData } from "@/types";

interface SelectOptionProps {
  data: SelectOptionData[];
  onClickItem: () => void;
}

const SelectOption = ({ data, onClickItem }: SelectOptionProps) => (
  <>
    <ul className="absolute z-[1] w-[160px] right-0 shadow-tremor-cardImage dark:shadow-dark-select-option bg-secondary p-2 rounded-md dark:bg-dark-tremor-primary">
      {data.map(({ option, value }) => (
        <li
          key={option}
          value={value}
          className="w-full text-tremor-default cursor-pointer text-secondary px-4 py-[0.3rem] hover:bg-body hover:text-tremor-brand-subtle hover:rounded-md min-h-[auto] dark:text-dark-romance dark:hover:bg-dark-secondary"
          onClick={onClickItem}
          data-testid="option">
          Status: {option}
        </li>
      ))}
      <div className="h-px bg-gradient-select my-2 opacity-25 dark:bg-gradient-divider" />
      <li className="w-full text-tremor-default cursor-pointer text-attention px-4 py-[0.3rem] hover:bg-body hover:rounded-md min-h-[auto] dark:hover:bg-dark-secondary">
        Remove Filter
      </li>
    </ul>
  </>
);

export default SelectOption;
