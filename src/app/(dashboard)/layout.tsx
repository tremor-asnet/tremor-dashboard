"use client";
// Libs
import { ReactNode, useContext, useState } from "react";
import { usePathname } from "next/navigation";

// Components
import { Flex } from "@tremor/react";
import { DashboardHeader, SideBar } from "@/components";
import { SidebarContext, SidebarContextProvider } from "@/contexts";

// Constant
import { ROUTES } from "@/constants/routes";

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
  const [isSignOutProcessing, setIsSignOutProcessing] = useState(false);

  const { isOpen } = useContext(SidebarContext);

  const pathname = usePathname();
  const isProjectPage = pathname === ROUTES.PROJECTS;

  // TODO: Need to check show Loading again
  const handleSignOut = async () => {
    // setIsSignOutProcessing(true);
    await signOut();
    setIsSignOutProcessing(true);
  };

  return (
    <Flex alignItems="start" className="bg-body antialiased font-primary">
      <div className="h-screen">
        <SideBar
          onSignOut={handleSignOut}
          isSignOutProcessing={isSignOutProcessing}
        />
      </div>
      <div
        className={`flex-1 p-4 md:p-6 pt-8 ${
          isOpen ? "ml-0 xl:ml-28" : "xl:ml-[270px]"
        }`}>
        <DashboardHeader />
        <div className={`${isProjectPage ? "mt-0" : "mt-4"}`}>{children}</div>
      </div>
    </Flex>
  );
}
