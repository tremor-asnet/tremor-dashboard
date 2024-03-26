import { Text, TextInput } from "@tremor/react";
import { memo } from "react";

// Icons
import { BsCurrencyDollar } from "react-icons/bs";

interface DecimalNumberInputGroupProps {
  label?: string;
  errorMessage?: string;
}

const DecimalNumberInputGroup = ({
  label = "",
  errorMessage = "",
}: DecimalNumberInputGroupProps) => (
  <div className="flex flex-col gap-2">
    <div className="flex flex-col gap-2 px-2 py-4 border-solid border-tremor-default border-2 rounded-lg dark:bg-dark-tremor-background dark:border-none">
      <Text className="ml-4">{label}</Text>
      <TextInput
        className="border-none"
        icon={BsCurrencyDollar}
        placeholder="0.00"
      />
    </div>
    {errorMessage && (
      <Text className="text-xs text-red-500 dark:text-red-500">
        {errorMessage}
      </Text>
    )}
  </div>
);

export default memo(DecimalNumberInputGroup);
