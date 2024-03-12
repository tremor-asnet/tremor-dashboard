"use client";

import { useEffect, useRef } from "react";

// lib
import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
  Flex,
  Metric,
  List,
  ListItem,
  Text,
} from "@tremor/react";

// Components
import { Avatar, CustomImage } from "@/ui/components";

// Constants
import { ITEMS_PROFILE, ITEMS_DASHBOARD, ROUTES, LOGO_SRC } from "@/constants";
import { BREAKPOINTS } from "@/constants/breakpoints";

// Styles
import "./styles.css";

// Helpers
import { isBrowser } from "@/helpers";

interface SideBarProps {
  avatarUrl: string;
  name: string;
  pathname: string;
  isCollapse: boolean;
  toggleSidebar: () => void;
  onSignOut: () => Promise<void>;
}

const SideBar = ({
  avatarUrl,
  name,
  isCollapse,
  toggleSidebar,
  pathname,
  onSignOut,
}: SideBarProps) => {
  const sideBarRef = useRef<HTMLDivElement>(null);
  const hiddenOpenClass = isCollapse && "xl:hidden";
  const centerOpenClass = isCollapse && "xl:justify-center";
  const transitionBgClass =
    "transition-[background-color] duration-300 ease-[cubic-bezier(0.4,0,0.6,1)] delay-20";

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const currentRef = sideBarRef.current;

      if (currentRef && !currentRef.contains(event.target as Node)) {
        // Clicked outside the side navigation bar, close it
        if (isCollapse) {
          toggleSidebar();
        }
      }
    };

    // Add event listener to the document object
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCollapse, toggleSidebar]);

  // Handle case close sidebar in smaller than a desktop screen
  const handleClickSidebarItem = () => {
    if (isBrowser && window.innerWidth <= BREAKPOINTS.XL) {
      toggleSidebar();
    }
  };

  return (
    <>
      <div
        ref={sideBarRef}
        className={`sidebar antialiased shadow-box-sidebar bg-gradient-primary dark:bg-none dark:bg-dark-gradient-primary w-[250px] rounded-xl z-50 px-4 pt-6 overflow-y-auto overflow-x-hidden fixed top-4 left-4 h-[calc(100vh-2rem)] transition-all ease-in ${
          isCollapse
            ? "translate-x-0 xl:w-[100px] delay-10 duration-300"
            : "translate-x-[-20rem] xl:translate-x-0 xl:w-[260px] delay-10 duration-300"
        }`}>
        <Flex justifyContent="end">
          <div
            className="border p-1 rounded-s-md -mr-4 bg-white cursor-pointer"
            onClick={toggleSidebar}>
            {isCollapse ? <FaAngleLeft /> : <FaAngleRight />}
          </div>
        </Flex>
        <Link href={ROUTES.HOME}>
          <Flex className="justify-normal pl-5 gap-1 pb-2 flex-nowrap relative">
            <CustomImage
              src={LOGO_SRC.logo}
              width={28}
              height={28}
              alt="Tremor Dashboard"
            />
            <Metric
              className={`text-white text-tremor-default min-w-[200px] flex flex-nowrap ${hiddenOpenClass} delay-300 duration-500`}>
              Tremor Dashboard PRO
            </Metric>
          </Flex>
        </Link>
        <div className="h-px bg-gradient-divider my-4 opacity-25" />
        <AccordionList className="bg-transparent shadow-none border-0">
          <Accordion className="bg-inherit dark:bg-none dark:bg-dark-gradient-primary border-0 rounded-md">
            <AccordionHeader
              className={`min-w-[210px] flex text-[rgba(255,255,255,0.5)] py-2 ${
                isCollapse && "xl:w-[200%]"
              }`}>
              <Avatar
                alt="Avatar small"
                className="flex items-center justify-center"
                width={36}
                height={36}
                priority
                src={avatarUrl}
              />
              <Text
                className={`leading-0 dark:text-dark-primary min-w-[100px] flex flex-nowrap text-white self-center ml-[7px] ${hiddenOpenClass}`}>
                {name}
              </Text>
            </AccordionHeader>
            <AccordionBody>
              <List>
                {ITEMS_PROFILE.map(item => {
                  const { label, href, content } = item;
                  const isActive = href === pathname;
                  const itemBackground = isActive
                    ? "bg-primary hover:!bg-primary"
                    : "hover:bg-none";

                  const menuItemClass = [
                    `${itemBackground} `,
                    `!p-0 leading-[26px] mt-1 rounded-md text-center`,
                    `${transitionBgClass}`,
                  ].join("");

                  return (
                    <ListItem
                      className={menuItemClass}
                      key={label}
                      onClick={handleClickSidebarItem}>
                      <Link href={href}>
                        <Flex
                          className={`w-full gap-6 font-normal py-3 px-7 ${centerOpenClass}`}>
                          <span className="w-5">{content}</span>
                          <span
                            className={`${hiddenOpenClass} w-full text-start`}>
                            {label}
                          </span>
                        </Flex>
                      </Link>
                    </ListItem>
                  );
                })}
                <ListItem className="leading-[26px] relative !p-0 mt-1">
                  <Flex
                    className={`w-full gap-6 font-normal py-3 px-7 ${centerOpenClass}`}>
                    <span className="w-5">L</span>
                    <button
                      onClick={onSignOut}
                      className={`${hiddenOpenClass} w-full text-start`}>
                      Logout
                    </button>
                  </Flex>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
        </AccordionList>
        <div className="h-px bg-gradient-divider my-4 opacity-25" />
        <ul>
          {ITEMS_DASHBOARD.map(({ label, content, href }) => {
            const isActive = href === pathname;
            const itemBackground = isActive
              ? "bg-primary hover:!bg-primary"
              : "hover:bg-none";

            const menuItemClass = [
              `tremor-ListItem-root w-full flex justify-between items-center truncate text-tremor-default !p-0 leading-[26px] rounded-md my-[3px] text-center `,
              `${itemBackground} `,
              `!p-0 leading-[26px] mt-1 rounded-md `,
              `${transitionBgClass}`,
            ].join("");
            const linkClass = `font-normal w-full py-3 px-7 ${centerOpenClass}`;

            return (
              <li
                key={label}
                className={menuItemClass}
                onClick={handleClickSidebarItem}>
                <Link className={linkClass} href={href}>
                  <span className="w-5">{content}</span>
                  <span className={`${hiddenOpenClass} pl-2`}>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
