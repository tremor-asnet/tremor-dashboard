"use client";

import { useContext, useEffect, useState } from "react";

// Libs
import { usePathname } from "next/navigation";

// Components
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

// Icons
import { MdMenu, MdMenuOpen, MdNotifications } from "react-icons/md";
import { HiMiniMoon } from "react-icons/hi2";
import { IoSunny } from "react-icons/io5";

// Constant
import { ROUTES } from "@/constants";

// Contexts
import { ThemeContext } from "@/context/theme";

// Helpers
import { isBrowser } from "@/helpers";

interface DashboardHeaderProps {
  toggleSidebar: () => void;
  isCollapseSidebar: boolean;
}

const DashboardHeader = ({
  isCollapseSidebar,
  toggleSidebar,
}: DashboardHeaderProps): JSX.Element => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();
  const isMobile = isBrowser && window.innerWidth <= 768;
  const isAllProjectPage = pathname === ROUTES.PROJECTS;
  // Check the condition if it is page All Project then display the white color
  const colorIconCaseProject =
    (!isScrolled && isAllProjectPage && "white") || "";

  useEffect(() => {
    const scrollDashboardHeader = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollDashboardHeader);

    return () => {
      window.removeEventListener("scroll", scrollDashboardHeader);
    };
  }, []);
  const stickyTransition = "transition-all duration-300 ease-in delay-20";
  const activeStickyScroll = isScrolled
    ? `sticky top-0 py-2 z-40 bg-lighter dark:bg-dark-gradient-primary/30 dark:bg-dark-gradient-primary/80 box-header-sticky ${stickyTransition} backdrop-saturate-[200%] backdrop-blur-[1.875rem] bg-[rgba(255,255,255,0.8)] min-h-[5rem] rounded-xl top-3 shadow-box-header-sticky dark:shadow-box-header`
    : `${stickyTransition}`;

  const activeIconColor = isScrolled
    ? "text-primary dark:text-dark-primary"
    : "text-tremor-content";

  return (
    <div
      className={`${activeStickyScroll} h-32 sm:h-20 mb-3.5 sm:flex items-center justify-between px-2 sm:px-4 py-1 ${
        isAllProjectPage && `pl-1 pr-2`
      }`}>
      <div className="flex items-center">
        <div
          className={`block xl:hidden cursor-pointer ${
            isAllProjectPage ? "" : "mr-2"
          }`}
          onClick={toggleSidebar}>
          {isCollapseSidebar ? (
            <MdMenuOpen
              className="text-2xl text-secondary dark:text-white"
              color={colorIconCaseProject}
            />
          ) : (
            <MdMenu
              className="text-2xl text-secondary dark:text-white"
              color={colorIconCaseProject}
            />
          )}
        </div>
        <Breadcrumb isScrolled={isScrolled} />
      </div>
      <div className="flex items-center justify-between md:items-center mt-4 md:mt-0 md:justify-end pl-6 xl:pl-0">
        <div className="flex flex-wrap item-center gap-y-1">
          <div className="relative p-2 flex items-center" onClick={toggleTheme}>
            {theme ? (
              <IoSunny
                className={`${activeIconColor} text-xl cursor-pointer`}
                color={colorIconCaseProject}
              />
            ) : (
              <HiMiniMoon
                className={`${activeIconColor} text-xl cursor-pointer`}
                color={colorIconCaseProject}
              />
            )}
          </div>
          <div className="relative p-2 flex items-center">
            <MdNotifications
              className={`${activeIconColor} text-xl cursor-pointer`}
              color={colorIconCaseProject}
            />
            <div
              className={`absolute top-0 -right-0.5 text-white rounded-full bg-red-500 text-[10px] font-bold py-1 px-2 cursor-pointer leading-none ${
                isAllProjectPage && !isMobile
                  ? "text-white opacity-[0.8]"
                  : "text-inherit"
              }`}>
              9
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
