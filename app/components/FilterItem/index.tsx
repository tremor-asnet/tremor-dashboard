interface FilterItemProps {
  title: string;
  option: string;
  value: number;
  additionalClass: string;
  onSelectFilter: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FilterItem = ({
  title,
  option,
  value,
  additionalClass,
  onSelectFilter,
}: FilterItemProps) => {
  return (
    <li className={additionalClass}>
      <button onClick={onSelectFilter} value={value}>
        {title}: {option}
      </button>
    </li>
  );
};

export default FilterItem;
