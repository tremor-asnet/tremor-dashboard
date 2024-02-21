// Libs
import { useParams } from "next/navigation";
import { memo } from "react";
import Link from "next/link";

// Components
import { Title } from "@tremor/react";
import { MdHome } from "react-icons/md";

// Constants
import {
  INVOICE_REGEX,
  ORDER_LIST_REGEX,
  PRODUCT_LIST_REGEX,
  ROUTES,
} from "@/constants";

// Helpers
import { getCrumbName, handleMatchPath, isBrowser } from "@/helpers";

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

  const renderTitle = (path?: string) => {
    handleMatchPath(path);

    return newPath?.pop()?.replace("-", " ");
  };

  const renderCrumb = () => {
    return (
      <>
        {newPath?.map((link, index) => {
          const href = `/${newPath.slice(0, index + 1).join("/")}`;
          const crumbItemTextWhite =
            isProjectPage && isStickyHeader
              ? "text-white dark:text-white"
              : "text-primary";
          const activeCrumb =
            pathname === href
              ? "text-tremor-content-title dark:text-dark-tremor-content-title  "
              : "text-primary dark:text-dark-primary opacity-50  ";

          return (
            <li
              key={href}
              className={`flex gap-2 bc-link text-sm capitalize tracking-[0.02857em] ${crumbItemTextWhite} ${activeCrumb}`}>
              <Link href={href}>
                {getCrumbName({
                  name: link,
                  path: href,
                  params: params?.id,
                })}
              </Link>
              {newPath.length !== index + 1 && (
                <span className={`${isProjectPage && "text-white"}`}>
                  &#47;
                </span>
              )}
            </li>
          );
        })}
      </>
    );
  };

  return (
    <nav className={`${isProjectPage ? "pl-3 z-20" : isMobile ? "pl-3" : ""}`}>
      <ol
        className={`flex flex-wrap gap-2 items-center ${
          isProjectPage && isStickyHeader
            ? "text-lighter"
            : "text-gray-400 dark:text-white"
        }`}>
        <li className="text-sm flex items-center gap-2 capitalize dark:text-dark-primary tracking-[0.02857em]">
          <Link href={ROUTES.HOME}>
            <MdHome className="text-lg" />
          </Link>
          &#47;
        </li>
        {renderCrumb()}
      </ol>
      <Title
        className={`text-tremor-content-title dark:text-dark-tremor-content-title font-bold capitalize tracking-[0.0075em] mt-1 ${
          isStickyHeader ? "text-white" : "text-primary"
        }`}>
        {renderTitle(pathname)}
      </Title>
    </nav>
  );
};

export default memo(Breadcrumb);
