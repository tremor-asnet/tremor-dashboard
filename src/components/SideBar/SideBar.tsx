"use client";

// lib
import Link from "next/link";
import Image from "next/image";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { IoMdImage } from "react-icons/io";
import { useContext } from "react";
import { usePathname } from "next/navigation";

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

// Auth
// import { signOut } from "@/app/auth";

// React icons
import { MdClose } from "react-icons/md";

// Components
import Avatar from "../Avatar/Avatar";

// Constants
import { ITEMS, ITEMS_DASHBOARD, ITEMS_PROFILE } from "@/constants/sections";

import { ROUTES } from "@/constants/routes";

// Context
import { SidebarContext } from "@/contexts/SideBarContext";

// Styles
import "./styles.css";

// Components
import { LoadingIndicator } from "@/components";

interface SideBarProps {
  onSignOut: () => Promise<void>;
  isSignOutProcessing: boolean;
}
const SideBar = ({ onSignOut, isSignOutProcessing }: SideBarProps) => {
  const { isOpen, toggleSideBar } = useContext(SidebarContext);
  const pathname = usePathname();
  const isProjectPage = pathname === ROUTES.PROJECTS;
  const isProfilePage = pathname === ROUTES.PROFILE;
  const isAnalyticsPage = pathname === ROUTES.ANALYTICS;
  const isSalesPage = pathname === ROUTES.SALES;

  return (
    <div
      className={`sidebar antialiased bg-white shadow-box-sidebar bg-gradient-primary w-[250px] z-10 rounded-xl px-4 pt-6 overflow-y-auto fixed left-4 top-4 h-[calc(100vh-2rem)] transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.6,1)] delay-[0ms] ${
        isOpen
          ? "translate-x-0 xl:w-[100px]"
          : "translate-x-[-20rem] xl:translate-x-0"
      }`}>
      <Flex className="justify-normal pl-5 gap-1 pb-2 relative">
        <Image
          src="/assets/images/sidebar-logo.webp"
          width={28}
          height={28}
          alt="Logo"
        />
        <Link href={ROUTES.HOME}>
          <Metric
            className={`text-white text-tremor-default ${
              isOpen ? "xl:hidden" : ""
            }`}>
            Tremor Dashboard PRO
          </Metric>
        </Link>
        <div
          className="absolute text-gray-400 top-[-10px] right-[-5px] xl:hidden"
          onClick={toggleSideBar}>
          <MdClose />
        </div>
      </Flex>
      <div className="h-px bg-[linear-gradient(to_right,rgba(255,255,255,0),#FFFFFF,rgba(255,255,255,0))] my-4 opacity-25" />
      <AccordionList>
        <Accordion className="bg-inherit border-0">
          <AccordionHeader
            className={`flex text-[rgba(255,255,255,0.5)] py-2 ${
              isOpen ? "xl:w-[200%]" : ""
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
              className={`leading-0 text-white self-center ml-[7px] ${
                isOpen ? "xl:hidden" : ""
              }`}>
              Brooklyn Alice
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <List>
              {ITEMS.map(item => {
                const { label, href, content } = item;
                return (
                  <ListItem className="leading-[26px] !p-0" key={label}>
                    <Link
                      className="w-full flex font-normal py-3 px-6"
                      href={href}>
                      <span>{content}</span>
                      <span className={`${isOpen ? "xl:hidden" : ""}`}>
                        {label}
                      </span>
                    </Link>
                  </ListItem>
                );
              })}
              <ListItem className="leading-[26px] relative !p-0">
                <form
                  action={onSignOut}
                  className="w-full flex items-center font-normal relative">
                  <span className="absolute left-6">L</span>
                  <button
                    type="submit"
                    className={`${
                      isOpen ? "xl:hidden" : ""
                    } w-full flex gap-5 font-normal z-10 py-3 pl-14 pr-6`}>
                    Logout
                  </button>
                </form>
                {isSignOutProcessing && (
                  <Flex className="absolute left-[80%]">
                    <LoadingIndicator />
                  </Flex>
                )}
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
      </AccordionList>
      <div className="h-px bg-[linear-gradient(to_right,rgba(255,255,255,0),#FFFFFF,rgba(255,255,255,0))] my-4 opacity-25" />
      <AccordionList>
        <Accordion className="bg-inherit border-0">
          <AccordionHeader
            className={`${
              isAnalyticsPage || isSalesPage ? "bg-[rgba(255,255,255,0.2)]" : ""
            } flex text-[rgba(255,255,255,0.5)] py-1.5 rounded-md`}>
            <Icon size="lg" icon={RiLayoutMasonryFill} />
            <Text
              className={`text-white self-center ${isOpen ? "xl:hidden" : ""}`}>
              Dashboards
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <List>
              <ListItem
                className={`${
                  isAnalyticsPage ? "bg-[rgb(52,71,103)]" : ""
                } !p-0 my-[3px] leading-[26px] rounded-md hover:bg-none`}>
                <Link
                  className="font-normal w-full py-3 px-6"
                  href={ROUTES.ANALYTICS}>
                  <span>{ITEMS_DASHBOARD[0].content}</span>
                  <span className={`${isOpen ? "xl:hidden" : ""}`}>
                    {ITEMS_DASHBOARD[0].label}
                  </span>
                </Link>
              </ListItem>
              <ListItem
                className={`${
                  isSalesPage ? "bg-[rgb(52,71,103)]" : ""
                } !p-0 my-[3px] leading-[26px] rounded-md hover:bg-none`}>
                <Link
                  className="font-normal w-full py-3 px-6"
                  href={ROUTES.SALES}>
                  <span>{ITEMS_DASHBOARD[1].content}</span>
                  <span className={`${isOpen ? "xl:hidden" : ""}`}>
                    {ITEMS_DASHBOARD[1].label}
                  </span>
                </Link>
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
      </AccordionList>
      <Subtitle className="text-white text-xs leading-[15px] font-bold ml-4 mt-4 mb-2">
        PAGES
      </Subtitle>
      <AccordionList>
        <Accordion className="bg-inherit border-0 mt-1">
          <AccordionHeader
            className={`${
              isProjectPage || isProfilePage ? "bg-[rgba(255,255,255,0.2)]" : ""
            } flex text-[rgba(255,255,255,0.5)] py-1.5 rounded-md`}>
            <Icon size="lg" icon={IoMdImage} />
            <Text
              className={`text-white leading-0 self-center ml-2.5 ${
                isOpen ? "xl:hidden" : ""
              }`}>
              Pages
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <AccordionList>
              <Accordion className="bg-inherit border-0 mt-1">
                <AccordionHeader
                  className={`${
                    isProjectPage || isProfilePage
                      ? "bg-[rgba(255,255,255,0.2)]"
                      : ""
                  } flex text-[rgba(255,255,255,0.5)] rounded-md`}>
                  <Text className="text-white self-center ml-4 mt-1">
                    <span className="mr-6">P</span>
                    <span className={`${isOpen ? "xl:hidden" : ""}`}>
                      Profile
                    </span>
                  </Text>
                </AccordionHeader>
                <AccordionBody>
                  <List>
                    {ITEMS_PROFILE.map(item => {
                      const { label, href, content } = item;
                      return (
                        <ListItem
                          className={`${
                            href === pathname ? "bg-[rgb(52,71,103)]" : ""
                          } !p-0 leading-[26px] mt-1 rounded-md`}
                          key={label}>
                          <Link
                            className="font-normal w-full py-3 px-8"
                            href={href}>
                            <span>{content}</span>
                            <span className={`${isOpen ? "xl:hidden" : ""}`}>
                              {label}
                            </span>
                          </Link>
                        </ListItem>
                      );
                    })}
                  </List>
                </AccordionBody>
              </Accordion>
            </AccordionList>
          </AccordionBody>
        </Accordion>
      </AccordionList>
    </div>
  );
};

export default SideBar;
