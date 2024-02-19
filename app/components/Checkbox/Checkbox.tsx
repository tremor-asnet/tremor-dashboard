interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  isDisable?: boolean;
  handleCheckBox: () => void;
}

const CheckBox = ({
  checked,
  isDisable = false,
  handleCheckBox,
  ...props
}: InputProps) => {
  return (
    <input
      className={`form-checkbox text-primary h-5 w-5 border-rarely rounded-md checked:bg-[length:90%_90%] border-[1px] checked:bg-[length:80%_80%] border-[1px] checked:bg-[length:50%_50%] border-[1px] ${
        isDisable ? "opacity-50 cursor-not-allowed" : "opacity-100"
      }`}
      type="checkbox"
      checked={checked}
      onChange={handleCheckBox}
      data-testid="checkbox"
      disabled={isDisable}
      {...props}
    />
  );
};

export default CheckBox;
