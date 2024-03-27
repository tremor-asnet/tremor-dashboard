import { ChangeEvent, memo } from "react";
import { Text, TextInput } from "@tremor/react";

// Utils
import { formatAmountNumber, isNaNFormat } from "@/utils";

// Icons
import { BsCurrencyDollar } from "react-icons/bs";

interface DecimalNumberInputGroupProps {
  value?: string;
  label?: string;
  errorMessage?: string;
  onChange: (value?: string) => void;
}

const DecimalNumberInputGroup = ({
  value = "",
  label = "",
  errorMessage = "",
  onChange,
}: DecimalNumberInputGroupProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;

    if (isNaNFormat(value)) return;

    // Remove non-numeric characters and leading zeros
    const sanitizedValue = formatAmountNumber(value);

    onChange(sanitizedValue);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 px-2 py-4 border-solid border-tremor-default border-2 rounded-lg dark:bg-dark-tremor-background dark:border-none">
        <Text className="ml-4">{label}</Text>
        <TextInput
          className="border-none"
          icon={BsCurrencyDollar}
          placeholder="0.00"
          value={value}
          onChange={handleChange}
        />
      </div>
      {errorMessage && (
        <Text className="text-xs text-red-500 dark:text-red-500">
          {errorMessage}
        </Text>
      )}
    </div>
  );
};

export default memo(DecimalNumberInputGroup);
