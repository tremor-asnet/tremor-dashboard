"use client";

// Types
import { SelectOptionData } from "@/types";

interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOptionData[];
  className?: string;
}

const SelectField = ({
  label,
  options,
  className,
  ...props
}: SelectFieldProps) => {
  const optionList = options.map(item => {
    const { value, option } = item;
    return (
      <option className="dark:bg-primary" key={value} value={value}>
        {option}
      </option>
    );
  });

  const defaultClass =
    "peer h-full w-full border-b-2 border-gray-300 bg-transparent font-sans text-sm font-normal text-blue-gray-700 dark:text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100";

  return (
    <div className="relative w-full">
      <h3 className="text-tremor-default text-secondary dark:text-white">
        {label}
      </h3>
      <select {...props} className={`${defaultClass} ${className}`}>
        {optionList}
      </select>
    </div>
  );
};

export default SelectField;
