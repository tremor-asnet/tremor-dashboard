"use client";
import { Text } from "@tremor/react";

// Types
import { SelectOptionData } from "@/types";

interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOptionData[];
  className?: string;
  name?: string;
}

const SelectField = ({
  label,
  options,
  className,
  name,
  ...props
}: SelectFieldProps) => {
  const optionList = options.map(item => {
    const { value, option } = item;
    return (
      <option
        data-testid="select-option"
        className="dark:bg-primary"
        key={value}
        value={value}>
        {option}
      </option>
    );
  });

  const defaultClass =
    "peer h-full w-full appearance-none rounded-none border-b-2 border-gray-300 bg-transparent font-sans text-sm font-normal text-primary dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100";

  return (
    <div className="w-full">
      <Text className="text-secondary text-sm dark:text-lighter">{label}</Text>
      <select
        {...props}
        className={`${defaultClass} ${className}`}
        data-testid={name}>
        {optionList}
      </select>
    </div>
  );
};

export default SelectField;
