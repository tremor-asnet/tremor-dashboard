// Libs
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

// Components
import { Text } from "@tremor/react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  placeHolder?: string;
  errorMessage?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

const InputField = ({
  id,
  label,
  placeHolder = "",
  errorMessage = "",
  ...props
}: InputFieldProps) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="text-secondary text-sm dark:text-lighter">
        {label}
      </label>
      <input
        id={id}
        placeholder={placeHolder}
        className="block py-2.5 px-0 w-full text-sm text-primary bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
        {...props}
      />
      {errorMessage && (
        <Text className="text-xs text-red-500 dark:text-red-500">
          {errorMessage.toString()}
        </Text>
      )}
    </div>
  );
};

export default InputField;
