// Libs
import { memo, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Title } from "@tremor/react";
import { MdHome } from "react-icons/md";

// Constants
import { ROUTES } from "../../constants";

// Types
import { IBreadcrumb } from "@/types";

// Helpers
import { isBrowser } from "@/helpers";

/**
 * Primary UI component for BreadCrumb component
 */

export interface BreadcrumbProps {
  isScrolled?: boolean;
}

const Breadcrumb = ({ isScrolled = false }: BreadcrumbProps): JSX.Element => {
  const pathname = usePathname();
  const isMobile = isBrowser && window.innerWidth <= 768;
  const isProjectPage = pathname === ROUTES.PROJECTS;
  const isStickyHeader = !isScrolled && isProjectPage;

  const links: IBreadcrumb[] = useMemo(() => {
    switch (true) {
      case pathname?.includes("/dashboards/"):
        return [{ name: "dashboards", url: ROUTES.ANALYTICS }];

      case pathname?.includes("/pages/profile/"):
        return [
          { name: "pages", url: ROUTES.PROFILE },
          { name: "profile", url: ROUTES.PROFILE },
        ];

      case pathname?.includes("/pages/account/"):
        return [
          { name: "pages", url: ROUTES.PROFILE },
          { name: "account", url: ROUTES.PROFILE },
        ];

      default:
        return [{ name: "dashboards", url: ROUTES.ANALYTICS }];
    }
  }, [pathname]);

  const pageName = useMemo(() => {
    switch (pathname) {
      case ROUTES.ANALYTICS:
        return "analytics";
      case ROUTES.SALES:
        return "sales";
      case ROUTES.PROFILE:
        return "my profile";
      case ROUTES.PROJECTS:
        return "all projects";
      case ROUTES.SETTING:
        return "settings";
      case ROUTES.PRODUCT_LIST:
        return "product-list";
      default:
        return "analytics";
    }
  }, [pathname]);

  const renderLinks = (): JSX.Element[] => {
    return links.map(link => (
      <li
        key={link.name}
        className={`flex items-center ${
          isStickyHeader ? "text-white opacity-[0.8]" : "text-inherit"
        }`}>
        <div className="bc-link">
          <Link
            className={`text-sm capitalize tracking-[0.02857em] leading-[0] ${
              isStickyHeader
                ? "text-white opacity-[0.8]"
                : "text-primary dark:text-dark-primary opacity-50"
            }`}
            href={link.url}>
            {link.name}
          </Link>
        </div>
        <div
          aria-hidden="true"
          className={`text-sm mx-2 ${
            isStickyHeader ? "text-white" : "text-[#6c757d]"
          }`}>
          &#47;
        </div>
      </li>
    ));
  };

  return (
    <nav className={`${isProjectPage ? "pl-3 z-20" : isMobile ? "pl-3" : ""}`}>
      <ol className="flex flex-wrap items-center text-gray-400">
        <li>
          <Link href={ROUTES.HOME} className="flex">
            <MdHome
              className={`bg-inherit border-0 py-0 hover:bg-transparent text-primary dark:text-dark-primary tracking-[0.01071em] leading-[0] ${
                isStickyHeader
                  ? "text-white opacity-[0.8]"
                  : "text-inherit opacity-50"
              }`}
            />
          </Link>
        </li>
        <li
          aria-hidden="true"
          className={`text-sm mx-2 ${
            isStickyHeader ? "text-white" : "text-[#6c757d]"
          }`}>
          &#47;
        </li>

        {renderLinks()}

        <li
          className={`text-sm text-tremor-content-title dark:text-dark-tremor-content-title capitalize tracking-[0.02857em] leading-[0] ${
            isStickyHeader ? "text-white" : "text-inherit"
          }`}>
          {pageName}
        </li>
      </ol>
      <Title
        className={`text-tremor-content-title dark:text-dark-tremor-content-title font-bold capitalize tracking-[0.0075em] ${
          isStickyHeader ? "text-white" : "text-primary"
        }`}>
        {pageName}
      </Title>
    </nav>
  );
};

export default memo(Breadcrumb);
