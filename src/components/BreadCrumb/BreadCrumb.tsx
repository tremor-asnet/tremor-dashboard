// Libs
import { memo, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Title } from "@tremor/react";
import { MdHome } from "react-icons/md";

// Constants
import { ROUTES } from "../../constants";

// Types
import { IBreadCrumb } from "@/types";

/**
 * Primary UI component for BreadCrumb component
 */
const BreadCrumb = (): JSX.Element => {
  const pathname = usePathname();

  const links: IBreadCrumb[] = useMemo(() => {
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
        return "profile overview";
      case ROUTES.PROJECTS:
        return "all projects";
      case ROUTES.SETTING:
        return "settings";
      default:
        return "analytics";
    }
  }, [pathname]);

  const isProjectPage = pathname === ROUTES.PROJECTS;

  const renderLinks = (): JSX.Element[] => {
    return links.map(link => (
      <li
        key={link.name}
        className={`flex items-center ${
          isProjectPage ? "text-white opacity-[0.8]" : "text-inherit"
        }`}>
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
            <MdHome
              className={`bg-inherit border-0 py-0 hover:bg-transparent ${
                isProjectPage ? "text-white opacity-[0.8]" : "text-inherit"
              }`}
            />
          </Link>
        </li>
        <li aria-hidden="true" className="text-xs mx-2">
          &#8260;
        </li>

        {renderLinks()}

        <li
          className={`text-sm text-tremor-content-title capitalize ${
            isProjectPage ? "text-white opacity-[0.8]" : "text-inherit"
          }`}>
          {pageName}
        </li>
      </ol>
      <Title
        className={`text-tremor-content-title font-bold capitalize ${
          isProjectPage ? "text-white" : "text-primary"
        }`}>
        {pageName}
      </Title>
    </nav>
  );
};

export default memo(BreadCrumb);
