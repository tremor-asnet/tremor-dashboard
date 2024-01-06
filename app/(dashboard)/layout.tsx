"use client";

// Libs
import { ReactNode, useState } from "react";

// Components
import { Flex } from "@tremor/react";
import { SideBar, DashboardHeader } from "@/ui/components";

// Auth
import { signOut } from "@/auth";
import { usePathname } from "next/navigation";

export default function DashboardLayoutWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const [isCollapse, setIsCollapse] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsCollapse(isCollapse => !isCollapse);
  };

  // TODO: Need to check show Loading again
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <Flex
      alignItems="start"
      className="bg-body antialiased font-primary min-h-screen">
      <SideBar
        pathname={pathname}
        isCollapse={isCollapse}
        toggleSidebar={toggleSidebar}
        onSignOut={handleSignOut}
      />
      <div
        className={`w-full min-h-screen p-4 sm:p-5 md:p-6 pt-6 ${
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
