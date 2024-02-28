import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

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
      <label htmlFor={id} className="text-gray-500 text-sm dark:text-gray-400">
        {label}
      </label>
      <input
        id={id}
        placeholder={placeHolder}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
        {...props}
      />
      {errorMessage && (
        <p className="text-[11px] xs:text-xs text-red-500">
          {errorMessage.toString()}
        </p>
      )}
    </div>
  );
};

export default InputField;
