// Libs
import { ReactNode } from "react";

// Components
import { Flex } from "@tremor/react";
import { DashboardHeader, SideBar } from "@/components";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Flex alignItems="start" className="bg-body">
      <div className="h-screen">
        <SideBar />
      </div>
      <div className="flex-1 p-6 pt-8">
        <DashboardHeader />
        <div className="mt-4 ml-0 xl:ml-[270px]">{children}</div>
      </div>
    </Flex>
  );
}
