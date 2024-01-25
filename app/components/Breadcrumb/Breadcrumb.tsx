// Libs
import { useParams } from "next/navigation";
import { memo } from "react";
import Link from "next/link";

// Components
import { Title } from "@tremor/react";
import { MdHome } from "react-icons/md";

// Constants
import { ROUTES } from "@/constants";

// Helpers
import { getCrumbName, isBrowser } from "@/helpers";

/**
 * Primary UI component for BreadCrumb component
 */

export interface BreadcrumbProps {
  isScrolled?: boolean;
  pathname: string;
}

const Breadcrumb = ({
  isScrolled = false,
  pathname,
}: BreadcrumbProps): JSX.Element => {
  const params = useParams();
  const isMobile = isBrowser && window.innerWidth <= 768;
  const isProjectPage = pathname === ROUTES.PROJECTS;
  const isStickyHeader = !isScrolled && isProjectPage;

  const newPath = pathname?.split("/").filter(path => path);

  const renderTitle = () => {
    if (pathname) {
      if (pathname.includes(`/order-list/`)) return "Order Details";

      if (pathname.includes(`/product-list/`)) return "Product Details";
    }

    return newPath?.slice(-1);
  };

  return (
    <nav className={`${isProjectPage ? "pl-3 z-20" : isMobile ? "pl-3" : ""}`}>
      <ol className="flex flex-wrap gap-2 items-center text-gray-400">
        <li className="text-sm flex items-center gap-2 capitalize dark:text-dark-primary tracking-[0.02857em] leading-[0]">
          <Link href={ROUTES.HOME}>
            <MdHome className="text-lg" />
          </Link>
          &#47;
        </li>
        {newPath?.map((link, index) => {
          const href = `/${newPath.slice(0, index + 1).join("/")}`;

          return (
            <>
              <li
                className={`flex gap-2 bc-link ${
                  isProjectPage && "text-white"
                } ${
                  pathname === href
                    ? "text-sm capitalize text-tremor-content-title dark:text-dark-tremor-content-title  tracking-[0.02857em] leading-[0]"
                    : "text-sm capitalize text-primary dark:text-dark-primary opacity-50  tracking-[0.02857em] leading-[0]"
                }`}>
                <Link href={href}>
                  {getCrumbName({
                    name: link,
                    path: pathname,
                    params: params?.id,
                  })}
                </Link>
                {newPath.length !== index + 1 && (
                  <span className={`${isProjectPage && "text-white"}`}>
                    &#47;
                  </span>
                )}
              </li>
            </>
          );
        })}
      </ol>
      <Title
        className={`text-tremor-content-title dark:text-dark-tremor-content-title font-bold capitalize tracking-[0.0075em] ${
          isStickyHeader ? "text-white" : "text-primary"
        }`}>
        {renderTitle()}
      </Title>
    </nav>
  );
};

export default memo(Breadcrumb);
