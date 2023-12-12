interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  checked?: boolean;
  handleCheckBox?: () => void;
}
const CheckBox = ({
  id,
  tabIndex,
  checked,
  handleCheckBox,
  ...props
}: InputProps) => {
  return (
    <label htmlFor={id}>
      <input
        className={`form-checkbox text-[#344767] h-5 w-5 border-[#dee2e6] rounded-md checked:bg-[length:90%_90%] border-[1px] checked:bg-[length:80%_80%] border-[1px] checked:bg-[length:50%_50%] border-[1px]`}
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleCheckBox}
        autoFocus
        onKeyPress={handleCheckBox}
        tabIndex={tabIndex}
        {...props}
      />
    </label>
  );
};

export default CheckBox;
