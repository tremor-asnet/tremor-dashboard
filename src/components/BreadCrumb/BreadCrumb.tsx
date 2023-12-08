// Libs
import { memo } from "react";
import Link from "next/link";
import { Title } from "@tremor/react";
import { MdHome } from "react-icons/md";

// Constants
import { ROUTES } from "../../constants";

// Types
import { IBreadCrumb } from "@/types";

// Define the props for the BreadCrumb component
interface IBreadCrumbProps {
  links: IBreadCrumb[];
  title: string;
}

/**
 * Primary UI component for BreadCrumb component
 */
const BreadCrumb = ({ links, title }: IBreadCrumbProps): JSX.Element => {
  const renderLinks = (): JSX.Element[] => {
    return links.map(link => (
      <li key={link.id} className="flex items-center">
        <div className="bc-link">
          <Link className="text-sm capitalize" href={link.url}>
            {link.name}
          </Link>
        </div>
        <div aria-hidden="true" className="text-xs mx-2">
          &#8260;
        </div>
      </li>
    ));
  };

  return (
    <nav className="block">
      <ol className="flex flex-wrap items-center text-gray-400">
        <li>
          <Link href={ROUTES.HOME} className="flex">
            <MdHome className="bg-inherit border-0 py-0 hover:bg-transparent" />
          </Link>
        </li>
        <li aria-hidden="true" className="text-xs mx-2">
          &#8260;
        </li>

        {renderLinks()}

        <li className="text-sm text-tremor-content-title capitalize">
          {title}
        </li>
      </ol>
      <Title className="text-tremor-content-title font-bold capitalize">
        {title}
      </Title>
    </nav>
  );
};

export default memo(BreadCrumb);
