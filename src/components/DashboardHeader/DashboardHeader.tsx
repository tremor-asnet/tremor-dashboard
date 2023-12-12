"use client";

// Libs
import { useState } from "react";

// Components
import BreadCrumb from "../BreadCrumb/BreadCrumb";
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

const DashboardHeader = (): JSX.Element => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const toggleNavBarOpen = (): void => {
    setIsNavBarOpen(prev => !prev);
  };

  return (
    <div className="md:flex items-center justify-between px-4 py-1 xl:ml-[270px]">
      <div className="flex items-center">
        <div className="mr-16">
          <BreadCrumb />
        </div>
        <div
          className="hidden xl:block cursor-pointer"
          onClick={toggleNavBarOpen}>
          {isNavBarOpen ? (
            <MdMenuOpen className="text-tremor-content text-2xl" />
          ) : (
            <MdMenu className="text-tremor-content text-2xl" />
          )}
        </div>
      </div>
      <div className="flex items-center mt-4 md:mt-0 mr-3">
        <div className="mr-4">
          <TextInput
            id="search"
            placeholder="Search here"
            type="text"
            autoFocus
            className="py-0.5 w-full bg-transparent hover:bg-transparent focus:bg-transparent"
          />
        </div>
        <Link href={ROUTES.SIGN_IN} aria-label="Link to homepage">
          <MdAccountCircle className="text-tremor-content text-xl" />
        </Link>
        <div
          className="sm:block xl:hidden cursor-pointer ml-4"
          onClick={toggleNavBarOpen}>
          {isNavBarOpen ? (
            <MdMenuOpen className="text-tremor-content text-2xl" />
          ) : (
            <MdMenu className="text-tremor-content text-2xl" />
          )}
        </div>
        <div className="relative">
          <MdSettings className="text-tremor-content text-xl mx-4 cursor-pointer" />
        </div>
        <div className="relative">
          <MdNotifications className="text-tremor-content text-xl cursor-pointer" />
          <div className="absolute -top-3 -right-3 text-white rounded-full bg-red-500 text-[10px] font-bold py-1 px-2 cursor-pointer">
            9
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
