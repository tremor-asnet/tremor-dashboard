"use client";

import { useContext, useEffect, useState } from "react";

// Libs
import { usePathname } from "next/navigation";
import { Button } from "@tremor/react";

// Components
import { Breadcrumb } from "@/ui/components";

// Icons
import { MdMenu, MdMenuOpen, MdNotifications } from "react-icons/md";
import { HiMiniMoon } from "react-icons/hi2";
import { IoSunny } from "react-icons/io5";

// Constant
import { ROUTES, VARIANT_BUTTON } from "@/constants";

// Contexts
import { ThemeContext } from "@/context/theme";

interface DashboardHeaderProps {
  toggleSidebar: () => void;
  isCollapseSidebar: boolean;
}

const DashboardHeader = ({
  isCollapseSidebar,
  toggleSidebar,
}: DashboardHeaderProps): JSX.Element => {
  const pathname = usePathname();
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
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
    ? `sticky top-0 py-4 sm:py-2 z-40 bg-lighter dark:bg-dark-gradient-primary/30 dark:bg-dark-gradient-primary/80 box-header-sticky ${stickyTransition} backdrop-saturate-[200%] backdrop-blur-[1.875rem] bg-[rgba(255,255,255,0.8)] min-h-[5rem] rounded-xl top-3 shadow-box-header-sticky dark:shadow-box-header`
    : `${stickyTransition}`;

  const activeIconColor = isScrolled
    ? "text-primary dark:text-dark-primary"
    : "text-tremor-content";

  const activeAllProjectPage = isAllProjectPage && `pl-1 pr-2`;

  return (
    <div
      className={`print:hidden mb-4 ${activeStickyScroll} ${activeAllProjectPage}`}>
      <div className="h-16 flex items-center justify-between px-2 px-4">
        <div className="flex items-center">
          <Button
            variant={VARIANT_BUTTON.LIGHT}
            className={`block xl:hidden cursor-pointer ${
              isAllProjectPage ? "z-20" : "mr-2"
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
          </Button>
          <Breadcrumb isScrolled={isScrolled} pathname={pathname} />
        </div>
        <div className="flex items-center justify-end md:items-center pl-6 xl:pl-0 min-w-[100px]">
          <div className="flex flex-wrap item-center gap-y-1">
            <Button
              variant={VARIANT_BUTTON.LIGHT}
              className="relative p-2 flex items-center"
              onClick={toggleTheme}>
              {isDarkTheme ? (
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
            </Button>
            <div className="relative p-2 flex items-center">
              <MdNotifications
                className={`${activeIconColor} text-xl cursor-pointer`}
                color={colorIconCaseProject}
              />
              <div
                className={`absolute top-0 -right-0.5 text-white rounded-full bg-red-500 text-[10px] font-bold py-1 px-2 cursor-pointer leading-none ${
                  isAllProjectPage &&
                  "text-inherit md:text-white md:opacity-[0.8]"
                }`}>
                9
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
