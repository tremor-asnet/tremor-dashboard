"use client";

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
import Avatar from "../Avatar/Avatar";

// Constants
import {
  ITEMS,
  ITEMS_DASHBOARD,
  ITEMS_PROFILE,
} from "../../constants/sections";

// Styles
import "./styles.css";

const SideBar = () => {
  return (
    <div className="sidebar antialiased bg-gradient-primary w-[250px] h-full rounded-xl px-4 pt-6">
      <Flex className="justify-center gap-1">
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
      </Flex>
      <div className="h-px bg-[linear-gradient(to_right,rgba(255,255,255,0),#FFFFFF,rgba(255,255,255,0))] my-4 opacity-25" />
      <AccordionList>
        <Accordion className="bg-inherit border-0">
          <AccordionHeader className="flex text-[rgba(255,255,255,0.5)]">
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
          <AccordionHeader className="bg-[rgba(255,255,255,0.2)] flex text-[rgba(255,255,255,0.5)] py-2 rounded-md">
            <Icon size="lg" icon={RiLayoutMasonryFill} tooltip="Icon layout" />
            <Text className="text-white font-light self-center">
              Dashboards
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <List>
              {ITEMS_DASHBOARD.map(item => {
                const { label, href, content } = item;
                return (
                  <ListItem className="mt-[3px] leading-[26px]" key={label}>
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
      <Subtitle className="text-white text-xs leading-[15px] font-bold ml-4 mt-4 mb-2">
        PAGES
      </Subtitle>
      <AccordionList>
        <Accordion className="bg-inherit border-0">
          <AccordionHeader className="flex text-[rgba(255,255,255,0.5)] py-2">
            <Icon size="lg" icon={IoMdImage} tooltip="Icon images" />
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
