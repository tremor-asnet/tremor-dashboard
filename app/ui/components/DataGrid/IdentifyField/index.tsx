// Components

import Link from "next/link";

interface IdentifyFieldProps {
  id: number;
  link: string;
}

const IdentifyField = ({ id, link }: IdentifyFieldProps) => (
  <div className="flex justify-start items-center ml-2 w-16">
    <Link
      prefetch={true}
      href={link}
      className="text-xs dark:text-lighter font-semibold leading-[15px] tracking-[0.4px] order-id hover:underline">
      &#35;{id}
    </Link>
  </div>
);

export default IdentifyField;
