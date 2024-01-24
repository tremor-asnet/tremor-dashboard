"use client";

// Libs
import { ReactNode, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

// Components
import { Flex } from "@tremor/react";
import { SideBar, DashboardHeader, LoadingIndicator } from "@/components";

// Constants
import { ROUTES } from "@/constants";

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
  const [isPending, setIsPending] = useState(false);
  const [isCollapseSidebar, setIsCollapseSidebar] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsCollapseSidebar(isCollapseSidebar => !isCollapseSidebar);
  };

  const { avatar, name } = profileData;

  const signOutAction = async () => {
    setIsPending(true);
    await fetch(`/api/logout`, { method: "POST" });
    setIsPending(false);
    setIsCollapseSidebar(false);
    router.replace(ROUTES.SIGN_IN);
  };

  return (
    <>
      <Flex
        alignItems="start"
        className="bg-body dark:bg-dark-primary antialiased font-primary min-h-screen">
        <SideBar
          avatarUrl={avatar}
          name={name}
          pathname={pathname}
          isCollapse={isCollapseSidebar}
          toggleSidebar={toggleSidebar}
          onSignOut={signOutAction}
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
      {isPending && (
        <LoadingIndicator width={10} height={10} isFullWidth={true} />
      )}
    </>
  );
}
