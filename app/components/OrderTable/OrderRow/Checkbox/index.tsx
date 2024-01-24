interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: () => void;
}

const Checkbox = ({ onChange, ...props }: CheckBoxProps) => {
  return (
    <input
      type="checkbox"
      className="w-5 h-5 accent-primary checked:bg-blue-500 rounded-3xl"
      onChange={onChange}
      {...props}
    />
  );
};

export default Checkbox;
