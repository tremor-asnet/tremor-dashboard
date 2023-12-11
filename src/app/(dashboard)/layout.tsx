// Libs
import { ReactNode } from "react";

// Components
import { Flex } from "@tremor/react";
import { DashboardHeader, SideBar } from "@/components";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Flex alignItems="start" className="bg-body">
      <div className="p-4 h-screen">
        <SideBar />
      </div>
      <div className="flex-1 p-4 pt-6">
        <DashboardHeader />
        <div className="mt-4">{children}</div>
      </div>
    </Flex>
  );
}
