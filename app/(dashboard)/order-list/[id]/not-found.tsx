import { ROUTES } from "@/constants";
import Link from "next/link";

// Icons
import { FaRegFaceDizzy } from "react-icons/fa6";

const NotFound = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaRegFaceDizzy className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 | Not Found</h2>
      <p>Could not find the order</p>
      <Link
        href={ROUTES.ORDER_LIST}
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400">
        Back to Order List
      </Link>
    </main>
  );
};

export default NotFound;
