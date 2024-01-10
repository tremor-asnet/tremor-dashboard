"use client";

// Libs
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

// Components
import { Flex } from "@tremor/react";

// Components
import { SideBar, DashboardHeader } from "@/components";

interface DashboardLayoutProp {
  profileData: {
    avatar: string;
    name: string;
  };
  children: ReactNode;
}

export default function DashboardLayout({
  profileData,
  children,
}: DashboardLayoutProp) {
  const [isCollapseSidebar, setIsCollapseSidebar] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsCollapseSidebar(isCollapseSidebar => !isCollapseSidebar);
  };

  const { avatar, name } = profileData;

  return (
    <Flex
      alignItems="start"
      className="bg-body antialiased font-primary min-h-screen">
      <SideBar
        avatarUrl={avatar}
        name={name}
        pathname={pathname}
        isCollapse={isCollapseSidebar}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`flex flex-col w-full min-h-screen p-4 sm:p-5 md:p-6 pt-6 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.6,1)] delay-20 ${
          isCollapseSidebar ? "ml-0 xl:ml-28" : "xl:ml-[270px]"
        }`}>
        <DashboardHeader
          toggleSidebar={toggleSidebar}
          isCollapseSidebar={isCollapseSidebar}
        />
        {children}
      </div>
    </Flex>
  );
}
