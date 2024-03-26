"use client";

import { Select, SelectItem } from "@tremor/react";

// Types
import { OptionType } from "@/types";

interface SelectFieldProps {
  options: OptionType[];
  label?: string;
  className?: string;
  value?: string;
  placeholder?: string;
  onChange?: () => void;
  name?: string;
}

const SelectField = ({
  options,
  label = "",
  className,
  value,
  placeholder = "Select...",
  name,
  onChange,
  ...props
}: SelectFieldProps) => {
  return (
    <div className="w-full">
      <label className="text-secondary text-sm dark:text-lighter">
        {label}
      </label>
      <Select
        className="select-custom dark:text-white dark:border-light dark:focus:border-white pt-[6px]"
        value={value}
        onValueChange={onChange}
        enableClear={false}
        placeholder={placeholder}
        id={name}
        {...props}>
        {options.map((item: OptionType) => (
          <SelectItem
            key={item.value}
            value={item.value}
            data-testid="select-option">
            {item.option}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectField;
