// Components

import Link from "next/link";

interface CustomCheckboxFieldProps {
  id: number;
  link: string;
  onChange: () => void;
}

export const CustomCheckBoxField = ({
  id,
  link,
  onChange,
}: CustomCheckboxFieldProps) => (
  <div className="flex justify-start items-center ml-2 w-16">
    <Link
      prefetch={true}
      href={link}
      className="text-xs dark:text-lighter font-semibold leading-[15px] tracking-[0.4px] order-id hover:underline">
      &#35;{id}
    </Link>
  </div>
);

export default CustomCheckBoxField;
