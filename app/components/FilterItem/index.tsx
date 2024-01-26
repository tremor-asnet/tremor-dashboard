interface FilterItemProps {
  title: string;
  option: string;
  value: number;
  className: string;
  onSelectFilter: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FilterItem = ({
  title,
  option,
  value,
  className,
  onSelectFilter,
}: FilterItemProps) => {
  return (
    <li className={className}>
      <button onClick={onSelectFilter} value={value}>
        {title}: {option}
      </button>
    </li>
  );
};

export default FilterItem;
