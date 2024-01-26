// Components
import { Checkbox } from "@/components";
import Link from "next/link";

// Constants
import { ROUTES } from "@/constants";

interface IdNodeProps {
  id: number;
  onChange: () => void;
}

const IdNode = ({ id, onChange }: IdNodeProps) => (
  <div className="flex justify-start items-center ml-2">
    <Checkbox onChange={onChange} />
    <Link
      href={`${ROUTES.ORDER_LIST}/${id}`}
      className="ml-4 text-xs dark:text-white font-semibold leading-[15px] tracking-[0.4px] order-id hover:underline">
      &#35;{id}
    </Link>
  </div>
);

export default IdNode;
