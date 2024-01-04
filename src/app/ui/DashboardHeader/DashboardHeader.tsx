"use client";

// Libs
import { useContext } from "react";
import { usePathname } from "next/navigation";

// Components
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import { TextInput } from "@tremor/react";
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
  const pathname = usePathname();
  const isProjectPage = pathname === ROUTES.PROJECTS;

  return (
    <div
      className={`md:flex items-center justify-between px-2 md:px-4 py-1 ${
        isProjectPage &&
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
              color={`${isProjectPage && "white"}`}
            />
          ) : (
            <MdMenu
              className="text-tremor-content text-2xl"
              color={`${isProjectPage && "white"}`}
            />
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
              color={`${isProjectPage && "white"}`}
            />
          </Link>
          <div
            className="sm:block xl:hidden p-2 flex items-center cursor-pointer"
            onClick={toggleSidebar}>
            {isCollapseSidebar ? (
              <MdMenu
                className="text-tremor-content text-2xl"
                color={`${isProjectPage && "white"}`}
              />
            ) : (
              <MdMenuOpen
                className="text-tremor-content text-2xl"
                color={`${isProjectPage && "white"}`}
              />
            )}
          </div>
          <div className="relative p-2 flex items-center">
            <MdSettings
              className="text-tremor-content text-xl cursor-pointer"
              color={`${isProjectPage && "white"}`}
            />
          </div>
          <div className="relative p-2 flex items-center">
            <MdNotifications
              className="text-tremor-content text-xl cursor-pointer"
              color={`${isProjectPage && "white"}`}
            />
            <div
              className={`absolute top-0 -right-0.5 text-white rounded-full bg-red-500 text-[10px] font-bold py-1 px-2 cursor-pointer leading-none ${
                isProjectPage ? "text-white opacity-[0.8]" : "text-inherit"
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
