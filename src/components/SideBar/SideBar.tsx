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

// Components
import Avatar from "../Avatar/Avatar";

// Constants
import {
  ITEMS,
  ITEMS_DASHBOARD,
  ITEMS_PROFILE,
  DASHBOARD_LINKS,
} from "../../constants/sections";

// Context
import { SidebarContext } from "@/contexts";

// Styles
import "./styles.css";
import { MdClose } from "react-icons/md";

const SideBar = () => {
  const { isOpen, toggleSideBar } = useContext(SidebarContext);

  return (
    <div
      className={`sidebar antialiased bg-gradient-primary w-[250px] z-10 rounded-xl px-4 pt-6 overflow-y-auto fixed left-4 top-4 h-[calc(100vh-2rem)] transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.6,1)] delay-[0ms] ${
        isOpen ? "translate-x-0" : "translate-x-[-20rem]"
      }`}>
      <Flex className="justify-center gap-1 pb-2 relative">
        <Image
          src="/assets/images/sidebar-logo.webp"
          width={28}
          height={28}
          alt="Logo"
        />
        <Link href="/">
          <Metric className="text-white text-tremor-default">
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
          <AccordionHeader className="flex text-[rgba(255,255,255,0.5)] py-2">
            <Avatar
              alt="Avatar small"
              width={36}
              height={36}
              priority
              src="/images/avatar/avatar-sm.webp"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <Text className="leading-0 text-white font-light self-center ml-[7px]">
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
                      <span>{label}</span>
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          </AccordionBody>
        </Accordion>
      </AccordionList>
      <div className="h-px bg-[linear-gradient(to_right,rgba(255,255,255,0),#FFFFFF,rgba(255,255,255,0))] my-4 opacity-25" />
      <AccordionList>
        <Accordion className="bg-inherit border-0">
          <AccordionHeader className="bg-[rgba(255,255,255,0.2)] flex text-[rgba(255,255,255,0.5)] py-1.5 rounded-md">
            <Icon size="lg" icon={RiLayoutMasonryFill} />
            <Text className="text-white font-light self-center">
              Dashboards
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <List>
              <ListItem className="bg-[rgb(52,71,103)] my-[3px] leading-[26px] rounded-md hover:bg-none">
                <Link href={DASHBOARD_LINKS.ANALYTICS}>
                  <span>{ITEMS_DASHBOARD[0].content}</span>
                  <span>{ITEMS_DASHBOARD[0].label}</span>
                </Link>
              </ListItem>
              <ListItem>
                <Link href={DASHBOARD_LINKS.SALES}>
                  <span>{ITEMS_DASHBOARD[1].content}</span>
                  <span>{ITEMS_DASHBOARD[1].label}</span>
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
            <Text className="text-white font-light leading-0 self-center ml-2.5">
              Pages
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <AccordionList>
              <Accordion className="bg-inherit border-0">
                <AccordionHeader className="flex text-[rgba(255,255,255,0.5)]">
                  <Text className="text-white font-light self-center ml-[10px] mt-1">
                    Profile
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
                            <span>{label}</span>
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
