interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isLabelTransform?: boolean;
}

const InputField = ({
  label,
  isLabelTransform = false,
  ...props
}: InputFieldProps) => (
  <div className="relative w-full">
    {isLabelTransform && (
      <label className="pointer-events-none text-tremor-default text-secondary dark:text-lighter flex h-full w-full select-none truncate font-normal leading-tight">
        {label}
      </label>
    )}
    <input
      className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 dark:text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
      placeholder={label}
      {...props}
    />
    {!isLabelTransform && (
      <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-xs peer-focus:leading-tight peer-focus:text-black dark:peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-primary dark:peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        {label}
      </label>
    )}
  </div>
);

export default InputField;
