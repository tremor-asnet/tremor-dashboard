"use client";
// Libs
import { ReactNode, useContext } from "react";

// Components
import { Flex } from "@tremor/react";
import { DashboardHeader, SideBar } from "@/components";
import { SidebarContext, SidebarContextProvider } from "@/contexts";

// Auth
import { signOut } from "@/app/auth";

export default function DashboardLayoutWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SidebarContextProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </SidebarContextProvider>
  );
}

function DashboardLayout({ children }: { children: ReactNode }) {
  const { isOpen } = useContext(SidebarContext);

  return (
    <Flex alignItems="start" className="bg-body">
      <div className="h-screen">
        <SideBar onSignOut={signOut} />
      </div>
      <div
        className={`flex-1 p-6 pt-8 ${
          isOpen ? "ml-0 lg:ml-28" : "lg:ml-[270px]"
        }`}>
        <DashboardHeader />
        <div className={`mt-4`}>{children}</div>
      </div>
    </Flex>
  );
}
