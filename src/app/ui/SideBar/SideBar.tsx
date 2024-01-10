import { useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

// lib
import Link from "next/link";
import Image from "next/image";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { IoMdImage } from "react-icons/io";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
  Flex,
  Metric,
  List,
  ListItem,
  Icon,
  Subtitle,
  Text,
} from "@tremor/react";

// Components
import { Avatar, LoadingIndicator } from "@/components";

// Constants
import { ITEMS_PROFILE, ITEMS_DASHBOARD } from "@/constants/sections";
import { ROUTES } from "@/constants/routes";

// Styles
import "./styles.css";

// Helpers
import { isBrowser } from "@/helpers";

interface SideBarProps {
  pathname: string;
  isCollapse: boolean;
  toggleSidebar: () => void;
  onSignOut: () => Promise<void>;
}
const SideBar = ({
  onSignOut,
  isCollapse,
  toggleSidebar,
  pathname,
}: SideBarProps) => {
  const sideBarRef = useRef<HTMLDivElement>(null);
  const hiddenOpenClass = isCollapse && "xl:hidden";
  const centerOpenClass = isCollapse && "xl:justify-center";
  const transitionBgClass =
    "transition-[background-color] duration-300 ease-[cubic-bezier(0.4,0,0.6,1)] delay-20";

  useEffect(() => {
    // Add event listener to the document object
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCollapse]);

  const handleClickOutside = (event: Event) => {
    if (
      sideBarRef.current &&
      !sideBarRef.current.contains(event.target as Node)
    ) {
      // Clicked outside the side navigation bar, close it
      if (isCollapse) {
        toggleSidebar();
      }
    }
  };

  // Handle case close sidebar in smaller than a desktop screen
  const handleClickSidebarItem = () => {
    if (isBrowser && window.innerWidth <= 768) {
      toggleSidebar();
    }
  };

  return (
    <div
      ref={sideBarRef}
      className={`sidebar antialiased shadow-box-sidebar dark:bg-none dark:bg-dark-gradient-primary w-[250px] rounded-xl z-20 px-4 pt-6 overflow-y-auto overflow-x-hidden fixed top-4 left-4 h-[calc(100vh-2rem)] transition-all ease-in ${
        isCollapse
          ? "translate-x-0 xl:w-[100px] delay-10 duration-300"
          : "translate-x-[-20rem] xl:translate-x-0 xl:w-[260px] delay-10 duration-300"
      }`}>
      <Flex className="justify-normal pl-5 gap-1 pb-2 flex-nowrap relative">
        <Image
          src="/assets/images/sidebar-logo.webp"
          width={28}
          height={28}
          alt="Tremor Dashboard"
        />
        <Link href={ROUTES.HOME}>
          <Metric
            className={`text-white text-tremor-default min-w-[200px] flex flex-nowrap ${hiddenOpenClass} delay-300 duration-500`}>
            Tremor Dashboard PRO
          </Metric>
        </Link>
      </Flex>
      <div className="h-px bg-[linear-gradient(to_right,rgba(255,255,255,0),#FFFFFF,rgba(255,255,255,0))] my-4 opacity-25" />
      <AccordionList>
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
              src="/images/avatar/avatar-sm.webp"
            />
            <Text
              className={`leading-0 dark:text-dark-primary min-w-[100px] flex flex-nowrap text-white self-center ml-[7px] ${hiddenOpenClass}`}>
              Brooklyn Alice
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
                  `!p-0 leading-[26px] mt-1 rounded-md `,
                  `${transitionBgClass}`,
                ].join("");
                const linkClass = `w-full flex font-normal py-3 px-6 ${centerOpenClass}`;

                return (
                  <ListItem
                    className={menuItemClass}
                    key={label}
                    onClick={handleClickSidebarItem}>
                    <Link className={linkClass} href={href}>
                      <span>{content}</span>
                      <span className={`${hiddenOpenClass}`}>{label}</span>
                    </Link>
                  </ListItem>
                );
              })}
              <ListItem className="leading-[26px] relative !p-0 mt-1">
                <form
                  action={onSignOut}
                  className="w-full flex items-center font-normal relative">
                  <span className="absolute left-6">L</span>
                  <LogoutButton isCollapse={isCollapse} />
                </form>
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
      </AccordionList>
      <div className="h-px bg-[linear-gradient(to_right,rgba(255,255,255,0),#FFFFFF,rgba(255,255,255,0))] my-4 opacity-25" />
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
          const linkClass = `font-normal w-full py-3 px-8 ${centerOpenClass}`;

          return (
            <li
              key={label}
              className={menuItemClass}
              onClick={handleClickSidebarItem}>
              <Link className={linkClass} href={href}>
                <span>{content}</span>
                <span className={`${hiddenOpenClass}`}>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

function LogoutButton({ isCollapse }: { isCollapse: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`${
        isCollapse && "xl:hidden"
      } min-h-[44px] w-full flex gap-5 font-normal z-10 py-3 pl-14 pr-6`}>
      {pending ? <LoadingIndicator width="w-5" height="w-5" /> : "Logout"}
    </button>
  );
}

export default SideBar;
