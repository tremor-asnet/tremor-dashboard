"use client";

// lib
import Link from "next/link";
import Image from "next/image";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { IoMdImage } from "react-icons/io";
import { useContext } from "react";

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
import {
  ITEMS,
  ITEMS_DASHBOARD,
  ITEMS_PROFILE,
} from "../../constants/sections";

import { ROUTES } from "../../constants/routes";

// Context
import { SidebarContext } from "../../contexts/SideBarContext";

// Styles
import "./styles.css";

interface SideBarProps {
  onSignOut: () => void;
}
const SideBar = ({ onSignOut }: SideBarProps) => {
  const { isOpen, toggleSideBar } = useContext(SidebarContext);

  const handleSignOut = async () => {
    await onSignOut();
  };

  return (
    <div
      className={`sidebar antialiased bg-gradient-primary w-[250px] z-10 rounded-xl px-4 pt-6 overflow-y-auto fixed left-4 top-4 h-[calc(100vh-2rem)] transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.6,1)] delay-[0ms] ${
        isOpen
          ? "translate-x-0 lg:w-[100px]"
          : "translate-x-[-20rem] lg:translate-x-0"
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
              isOpen ? "lg:hidden" : ""
            }`}>
            Tremor Dashboard PRO
          </Metric>
        </Link>
        <div
          className="absolute text-gray-400 top-[-10px] right-[-5px] lg:hidden"
          onClick={toggleSideBar}>
          <MdClose />
        </div>
      </Flex>
      <div className="h-px bg-[linear-gradient(to_right,rgba(255,255,255,0),#FFFFFF,rgba(255,255,255,0))] my-4 opacity-25" />
      <AccordionList>
        <Accordion className="bg-inherit border-0">
          <AccordionHeader
            className={`flex text-[rgba(255,255,255,0.5)] py-2 ${
              isOpen ? "lg:w-[200%]" : ""
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
              className={`leading-0 text-white font-light self-center ml-[7px] ${
                isOpen ? "lg:hidden" : ""
              }`}>
              Brooklyn Alice
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <List>
              {ITEMS.map(item => {
                const { label, href, content } = item;
                return (
                  <ListItem className="leading-[26px]" key={label}>
                    <Link className="w-full flex" href={href}>
                      <span>{content}</span>
                      <span className={`${isOpen ? "lg:hidden" : ""}`}>
                        {label}
                      </span>
                    </Link>
                  </ListItem>
                );
              })}
              <ListItem className="leading-[26px]">
                <form action={handleSignOut} className="w-full flex gap-[20px]">
                  <span>L</span>
                  <button
                    type="submit"
                    className={`${isOpen ? "lg:hidden" : ""}`}>
                    Logout
                  </button>
                </form>
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
      </AccordionList>
      <div className="h-px bg-[linear-gradient(to_right,rgba(255,255,255,0),#FFFFFF,rgba(255,255,255,0))] my-4 opacity-25" />
      <AccordionList>
        <Accordion className="bg-inherit border-0">
          <AccordionHeader className="bg-[rgba(255,255,255,0.2)] flex text-[rgba(255,255,255,0.5)] py-1.5 rounded-md">
            <Icon size="lg" icon={RiLayoutMasonryFill} />
            <Text
              className={`text-white font-light self-center ${
                isOpen ? "lg:hidden" : ""
              }`}>
              Dashboards
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <List>
              <ListItem className="bg-[rgb(52,71,103)] my-[3px] leading-[26px] rounded-md hover:bg-none">
                <Link href={ROUTES.ANALYTICS}>
                  <span>{ITEMS_DASHBOARD[0].content}</span>
                  <span className={`${isOpen ? "lg:hidden" : ""}`}>
                    {ITEMS_DASHBOARD[0].label}
                  </span>
                </Link>
              </ListItem>
              <ListItem>
                <Link href={ROUTES.SALES}>
                  <span>{ITEMS_DASHBOARD[1].content}</span>
                  <span className={`${isOpen ? "lg:hidden" : ""}`}>
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
        <Accordion className="bg-inherit border-0">
          <AccordionHeader className="flex text-[rgba(255,255,255,0.5)] py-1.5">
            <Icon size="lg" icon={IoMdImage} />
            <Text
              className={`text-white font-light leading-0 self-center ml-2.5 ${
                isOpen ? "lg:hidden" : ""
              }`}>
              Pages
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <AccordionList>
              <Accordion className="bg-inherit border-0">
                <AccordionHeader className="flex text-[rgba(255,255,255,0.5)]">
                  <Text className="text-white font-light self-center ml-4 mt-1">
                    <span className="mr-6">P</span>
                    <span className={`${isOpen ? "lg:hidden" : ""}`}>
                      Profile
                    </span>
                  </Text>
                </AccordionHeader>
                <AccordionBody>
                  <List>
                    {ITEMS_PROFILE.map(item => {
                      const { label, href, content } = item;
                      return (
                        <ListItem className="leading-[26px]" key={label}>
                          <Link href={href}>
                            <span>{content}</span>
                            <span className={`${isOpen ? "lg:hidden" : ""}`}>
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
