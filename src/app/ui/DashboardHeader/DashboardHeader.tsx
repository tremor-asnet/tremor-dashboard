"use client";

import { useEffect, useState } from "react";

// Libs
import { usePathname } from "next/navigation";

// Components
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import Link from "next/link";
import {
  MdMenu,
  MdMenuOpen,
  MdAccountCircle,
  MdSettings,
  MdNotifications,
} from "react-icons/md";

// Constant
import { ROUTES } from "@/constants";

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
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();
  const isMobile = isBrowser && window.innerWidth <= 768;
  const isAllProjectPage = pathname === ROUTES.PROJECTS;
  // Check the condition if it is page All Project then display the white color
  const color = (!isScrolled || !isMobile) && isAllProjectPage && "white";

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
  const activeStickyScroll =
    isScrolled && (isMobile || !isAllProjectPage)
      ? `sticky top-0 py-2 z-50 bg-lighter box-header-sticky ${stickyTransition} backdrop-saturate-[200%] backdrop-blur-[1.875rem] bg-[rgba(255,255,255,0.8)] min-h-[5rem] rounded-xl top-3 shadow-box-header-sticky`
      : `${stickyTransition}`;

  const activeIconColor =
    isScrolled && (isMobile || !isAllProjectPage)
      ? "text-primary"
      : "text-tremor-content";

  return (
    <div
      className={`${activeStickyScroll} h-32 md:h-20 mb-3.5 md:flex items-center justify-between px-2 md:px-4 py-1 ${
        isAllProjectPage &&
        `absolute top-10 md:top-9 pl-1 pr-2 ${
          activeStickyScroll && isMobile ? "w-full" : "w-[93%]"
        } ${
          isCollapseSidebar
            ? "xl:w-[calc(100%_-_165px)]"
            : "xl:w-[calc(100%_-_330px)]"
        }`
      }`}>
      <div className="flex items-center">
        <Breadcrumb isScrolled={isScrolled} />
        <div
          className="hidden xl:block cursor-pointer mx-16"
          onClick={toggleSidebar}>
          {isCollapseSidebar ? (
            <MdMenuOpen
              className="text-tremor-content text-2xl"
              color={color}
            />
          ) : (
            <MdMenu className="text-tremor-content text-2xl" color={color} />
          )}
        </div>
      </div>
      <div className="flex items-center justify-between md:items-center mt-4 md:mt-0 md:justify-end">
        <div className="flex flex-wrap item-center gap-y-1">
          <Link
            href={ROUTES.SIGN_IN}
            aria-label="Link to homepage"
            className="p-2 flex items-center">
            <MdAccountCircle
              className={`${activeIconColor} text-xl`}
              color={color}
            />
          </Link>
          <div
            className="sm:block xl:hidden p-2 flex items-center cursor-pointer"
            onClick={toggleSidebar}>
            {isCollapseSidebar ? (
              <MdMenu
                className={`${activeIconColor}  text-2xl`}
                color={color}
              />
            ) : (
              <MdMenuOpen
                className={`${activeIconColor} text-2xl`}
                color={color}
              />
            )}
          </div>
          <div className="relative p-2 flex items-center">
            <MdSettings
              className={`${activeIconColor} text-xl cursor-pointer`}
              color={color}
            />
          </div>
          <div className="relative p-2 flex items-center">
            <MdNotifications
              className={`${activeIconColor} text-xl cursor-pointer`}
              color={color}
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
