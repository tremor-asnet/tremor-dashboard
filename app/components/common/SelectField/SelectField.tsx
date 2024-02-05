import { Text, Select, SelectItem, Flex } from "@tremor/react";

// Types
import { SelectOptionData } from "@/types";

interface SelectFieldProps {
  id: string;
  label?: string;
  placeholder?: string;
  options: SelectOptionData[];
  value: string;
  onChange: () => void;
}

const SelectField = ({
  id,
  label,
  placeholder = "",
  options = [],
  value,
  onChange,
}: SelectFieldProps) => {
  return (
    <Flex className="flex-col items-start">
      <Text className="text-secondary h-5 mb-0 md:mb-1 dark:text-lighter">
        {label}
      </Text>
      <Select
        id={id}
        placeholder={placeholder}
        className="py-2 md:py-1 select-custom dark:text-white dark:border-light dark:focus:border-white w-full dark:text-white hover:bg-transparent bg-transparent dark:bg-transparent focus:bg-transparent rounded-b-none border-l-0 border-r-0 border-t-0 border-gray hover:border-black active:border-black focus:border-black  focus:outline-none focus:border-tremor-brand-subtle dark:border-light dark:focus:border-white shadow-none hover:bg-transparent ring-0"
        onValueChange={onChange}
        value={value}>
        {options?.map(({ value, option }: SelectOptionData) => (
          <SelectItem className="select-position" key={value} value={value}>
            {option}
          </SelectItem>
        ))}
      </Select>
    </Flex>
  );
};

export default SelectField;
