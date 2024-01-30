import { Text, Select, SelectItem } from "@tremor/react";

// Types
import { SelectOptionData } from "@/types";

interface SelectFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  selectData: SelectOptionData[];
}

const SelectField = ({
  id,
  label,
  placeholder = "",
  selectData = [],
}: SelectFieldProps) => {
  return (
    <>
      <Text className="text-secondary mb-3 dark:text-lighter mb-2">
        {label}
      </Text>
      <Select
        id={id}
        placeholder={placeholder}
        className="select-custom dark:text-white dark:border-light dark:focus:border-white">
        {selectData?.map((item: SelectOptionData) => (
          <SelectItem key={item.value} value={item.value}>
            {item.option}
          </SelectItem>
        ))}
      </Select>
    </>
  );
};

export default SelectField;
