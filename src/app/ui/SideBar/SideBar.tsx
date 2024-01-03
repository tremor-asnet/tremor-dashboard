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
import { ITEMS, ITEMS_DASHBOARD, ITEMS_PROFILE } from "@/constants/sections";
import { ROUTES } from "@/constants/routes";

// Styles
import "./styles.css";

interface SideBarProps {
  pathname: string;
  isCollapse: boolean;
  onSignOut: () => Promise<void>;
  isSignOutProcessing: boolean;
}
const SideBar = ({
  onSignOut,
  isSignOutProcessing,
  isCollapse,
  pathname,
}: SideBarProps) => {
  return (
    <div
      className={`sidebar antialiased shadow-box-sidebar bg-gradient-primary w-[250px] rounded-xl z-10 px-4 pt-6 overflow-y-auto fixed top-4 left-4 h-[calc(100vh-2rem)] transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.6,1)] delay-[0ms] ${
        isCollapse
          ? "translate-x-0 xl:w-[100px]"
          : "translate-x-[-20rem] xl:translate-x-0"
      }`}>
      <Flex className="justify-normal pl-5 gap-1 pb-2 relative">
        <Image
          src="/assets/images/sidebar-logo.webp"
          width={28}
          height={28}
          alt="Tremor Dashboard"
        />
        <Link href={ROUTES.HOME}>
          <Metric
            className={`text-white text-tremor-default ${
              isCollapse && "xl:hidden"
            }`}>
            Tremor Dashboard PRO
          </Metric>
        </Link>
      </Flex>
      <div className="h-px bg-[linear-gradient(to_right,rgba(255,255,255,0),#FFFFFF,rgba(255,255,255,0))] my-4 opacity-25" />
      <AccordionList>
        <Accordion className="bg-inherit border-0">
          <AccordionHeader
            className={`flex text-[rgba(255,255,255,0.5)] py-2 ${
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
              className={`leading-0 text-white self-center ml-[7px] ${
                isCollapse && "xl:hidden"
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
                      <span className={`${isCollapse && "xl:hidden"}`}>
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
                      isCollapse && "xl:hidden"
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
              pathname.includes("/dashboards") && "bg-[rgba(255,255,255,0.2)]"
            } flex text-[rgba(255,255,255,0.5)] py-1.5 rounded-md`}>
            <Icon size="lg" icon={RiLayoutMasonryFill} />
            <Text
              className={`text-white self-center ${isCollapse && "xl:hidden"}`}>
              Dashboards
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <List>
              {ITEMS_DASHBOARD.map(({ label, content, href }) => (
                <ListItem
                  key={label}
                  className={`!p-0 leading-[26px] rounded-md my-[3px] text-center ${
                    pathname === href && "bg-[rgb(52,71,103)]"
                  }`}>
                  <Link className="font-normal w-full py-3 px-6" href={href}>
                    <span>{content}</span>
                    <span className={`${isCollapse && "xl:hidden"}`}>
                      {label}
                    </span>
                  </Link>
                </ListItem>
              ))}
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
              pathname.includes("/pages/profile") &&
              "bg-[rgba(255,255,255,0.2)]"
            } flex text-[rgba(255,255,255,0.5)] py-1.5 rounded-md`}>
            <Icon size="lg" icon={IoMdImage} />
            <Text
              className={`text-white leading-0 self-center ml-2.5 ${
                isCollapse && "xl:hidden"
              }`}>
              Pages
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <AccordionList>
              <Accordion className="bg-inherit border-0 mt-1">
                <AccordionHeader
                  className={`${
                    pathname.includes("/pages/profile") &&
                    "bg-[rgba(255,255,255,0.2)]"
                  } flex text-[rgba(255,255,255,0.5)] rounded-md`}>
                  <Text className="text-white self-center ml-4 mt-1">
                    <span className="mr-6">P</span>
                    <span className={`${isCollapse && "xl:hidden"}`}>
                      Profile
                    </span>
                  </Text>
                </AccordionHeader>
                <AccordionBody>
                  <List>
                    {ITEMS_PROFILE.map(({ label, href, content }) => (
                      <ListItem
                        key={label}
                        className={`!p-0 leading-[26px] mt-1 rounded-md ${
                          pathname === href && "bg-[rgb(52,71,103)]"
                        }`}>
                        <Link
                          className="font-normal w-full py-3 px-8"
                          href={href}>
                          <span>{content}</span>
                          <span className={`${isCollapse && "xl:hidden"}`}>
                            {label}
                          </span>
                        </Link>
                      </ListItem>
                    ))}
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
