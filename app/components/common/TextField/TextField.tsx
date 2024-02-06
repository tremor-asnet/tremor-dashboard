import { TextInput, Text } from "@tremor/react";

interface TextFieldProps {
  id: string;
  label: string;
  required?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  value?: string;
  onChange: () => void;
}

const TextField = ({
  id,
  label,
  required = false,
  autoFocus = false,
  placeholder = "",
  value = "",
  onChange,
}: TextFieldProps) => {
  return (
    <>
      <Text className="text-secondary dark:text-lighter mb-0">{label}</Text>
      <TextInput
        id={id}
        required={required}
        autoFocus={autoFocus}
        placeholder={placeholder}
        value={value}
        onValueChange={onChange}
        className="py-0 sm:py-1 w-full dark:text-white hover:bg-transparent bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:bg-transparent rounded-b-none border-l-0 border-r-0 border-t-0 border-b focus:outline-none focus:border-tremor-brand-subtle dark:border-light dark:focus:border-white shadow-none hover:bg-transparent ring-0"
      />
    </>
  );
};

export default TextField;
