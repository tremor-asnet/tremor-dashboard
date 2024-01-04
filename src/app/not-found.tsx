import Link from "next/link";

// Constants
import { ROUTES } from "@/constants";

// Icons
import { MdOutlineSentimentVeryDissatisfied } from "react-icons/md";

const NotFound = () => {
  return (
    <main className="absolute flex flex-col inset-0 items-center justify-center">
      <MdOutlineSentimentVeryDissatisfied
        size="64"
        className="w-10 text-gray-400"
      />
      <h2 className="text-xl font-semibold">404 | Not Found</h2>
      <p>Can not find the page</p>
      <Link
        href={ROUTES.HOME}
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400">
        Back to Home
      </Link>
    </main>
  );
};

export default NotFound;
