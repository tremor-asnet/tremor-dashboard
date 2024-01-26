// Components
import { Checkbox } from "@/components";
import Link from "next/link";

interface CustomCheckboxFieldProps {
  id: number;
  link: string;
  onChange: () => void;
}

const CustomCheckBoxField = ({
  id,
  link,
  onChange,
}: CustomCheckboxFieldProps) => (
  <div className="flex justify-start items-center ml-2">
    <Checkbox onChange={onChange} />
    <Link
      href={link}
      className="ml-4 text-xs dark:text-white font-semibold leading-[15px] tracking-[0.4px] order-id hover:underline">
      &#35;{id}
    </Link>
  </div>
);

export default CustomCheckBoxField;
