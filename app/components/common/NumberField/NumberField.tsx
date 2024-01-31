import { Text } from "@tremor/react";

interface NumberFieldProps {
  id: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  value?: number;
}

const NumberField = ({
  id,
  label,
  required = false,
  placeholder = "",
  value = 0,
}: NumberFieldProps) => {
  return (
    <>
      <Text className="text-secondary dark:text-lighter mb-2">{label}</Text>
      <input
        id={id}
        required={required}
        placeholder={placeholder}
        type="number"
        defaultValue={value}
        className="py-[12px] w-full text-tremor-default dark:text-white hover:bg-transparent bg-transparent dark:bg-transparent focus:bg-transparent rounded-b-none border-l-0 border-r-0 border-t-0 border-b focus:outline-none border-gray focus:border-tremor-brand-subtle dark:border-light dark:focus:border-white shadow-none hover:bg-transparent ring-0"
      />
    </>
  );
};

export default NumberField;
