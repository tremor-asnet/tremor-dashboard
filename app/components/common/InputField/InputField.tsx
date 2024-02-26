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
    <div className="relative w-full">
      <input
        id={id}
        placeholder={placeHolder}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute text-gray-500 text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
        {label}
      </label>
      {errorMessage && (
        <p className="text-[11px] xs:text-xs text-red-500">
          {errorMessage.toString()}
        </p>
      )}
    </div>
  );
};

export default InputField;
