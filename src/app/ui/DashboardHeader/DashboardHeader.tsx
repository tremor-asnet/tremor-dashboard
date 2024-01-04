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
  const isAllProjectPage = pathname === ROUTES.PROJECTS;
  // Check the condition if it is page All Project then display the white color
  const color = isAllProjectPage && "white";

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

  const activeStickyScroll =
    isScrolled && !isAllProjectPage
      ? "sticky top-3 backdrop-blur-md bg-white/30 z-10 rounded-xl bg-white/80 bg-neutral-100 shadow-xl"
      : "";

  return (
    <div
      className={`${activeStickyScroll} h-32 md:h-20 mb-3.5 md:flex items-center justify-between px-2 md:px-4 py-1 ${
        isAllProjectPage &&
        `absolute top-10 md:top-9 pl-7 pr-2 w-[93%] ${
          isCollapseSidebar
            ? "xl:w-[calc(100%_-_165px)]"
            : "xl:w-[calc(100%_-_330px)]"
        }`
      }`}>
      <div className="flex items-center">
        <Breadcrumb />
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
      <div className="flex items-center justify-between md:items-center mt-4 md:mt-0 mr-3 md:justify-end">
        <div className="flex flex-wrap item-center gap-y-1">
          <Link
            href={ROUTES.SIGN_IN}
            aria-label="Link to homepage"
            className="p-2 flex items-center">
            <MdAccountCircle
              className="text-tremor-content text-xl"
              color={color}
            />
          </Link>
          <div
            className="sm:block xl:hidden p-2 flex items-center cursor-pointer"
            onClick={toggleSidebar}>
            {isCollapseSidebar ? (
              <MdMenu className="text-tremor-content text-2xl" color={color} />
            ) : (
              <MdMenuOpen
                className="text-tremor-content text-2xl"
                color={color}
              />
            )}
          </div>
          <div className="relative p-2 flex items-center">
            <MdSettings
              className="text-tremor-content text-xl cursor-pointer"
              color={color}
            />
          </div>
          <div className="relative p-2 flex items-center">
            <MdNotifications
              className="text-tremor-content text-xl cursor-pointer"
              color={color}
            />
            <div
              className={`absolute top-0 -right-0.5 text-white rounded-full bg-red-500 text-[10px] font-bold py-1 px-2 cursor-pointer leading-none ${
                isAllProjectPage ? "text-white opacity-[0.8]" : "text-inherit"
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
