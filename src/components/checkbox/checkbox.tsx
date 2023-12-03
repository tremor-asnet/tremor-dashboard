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
      <input type="checkbox" id={id} {...props}/><span className="checkbox-layout"><span className="check"></span></span>
    </label>
 );
};
export default CheckBox;
