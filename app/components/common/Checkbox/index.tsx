import { TiTick } from "react-icons/ti";

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: () => void;
}

const Checkbox = ({ onChange, ...props }: CheckBoxProps) => {
  return (
    <div className="relative inline-flex items-center">
      <input
        type="checkbox"
        className="before:content[''] peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:bg-primary checked:before:bg-primary hover:before:opacity-10"
        onChange={onChange}
        {...props}
      />
      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <TiTick />
      </span>
    </div>
  );
};

export default Checkbox;
