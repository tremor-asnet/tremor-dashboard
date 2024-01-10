"use client";

// Libs
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

// Components
import { Flex } from "@tremor/react";

// Auth
import { signOut } from "next-auth/react";

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
  const [isCollapse, setIsCollapse] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsCollapse(isCollapse => !isCollapse);
  };

  // TODO: Need to check show Loading again
  const handleSignOut = async () => {
    await signOut();
  };

  const { avatar, name } = profileData;

  return (
    <Flex
      alignItems="start"
      className="bg-body dark:bg-dark-primary antialiased font-primary min-h-screen">
      <SideBar
        avatarUrl={avatar}
        name={name}
        pathname={pathname}
        isCollapse={isCollapse}
        toggleSidebar={toggleSidebar}
        onSignOut={handleSignOut}
      />
      <div
        className={`flex flex-col w-full min-h-screen p-4 sm:p-5 md:p-6 pt-6 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.6,1)] delay-20 ${
          isCollapse ? "ml-0 xl:ml-28" : "xl:ml-[270px]"
        }`}>
        <DashboardHeader
          toggleSidebar={toggleSidebar}
          isCollapseSidebar={isCollapse}
        />
        {children}
      </div>
    </Flex>
  );
}
