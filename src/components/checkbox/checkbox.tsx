// Styles
import './checkbox.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

const CheckBox = ({
  id,
  className = '',
  ...props
}: InputProps) => {
  return (
    <label htmlFor={id}>
      <input
        className="opacity-0 absolute z-[-1] w-0 h-0 overflow-hidden pointer-events-none m-0 left-0"
        type="checkbox" id={id} {...props}
      />
        <span className="checkbox-layout align-middle relative">
        <span className="check relative inline-block w-5 h-5 border opacity-25 overflow-hidden z-[1] rounded-md border-solid border-[primary]">
        </span></span>
    </label>
 );
};
export default CheckBox;
