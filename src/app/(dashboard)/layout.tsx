// Libs
import { ReactNode } from "react";

// Components
import { Flex } from "@tremor/react";
import { DashboardHeader } from "@/components";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Flex alignItems="start" className="bg-body">
      <div className="w-64 p-4 h-screen">
        <div className="w-full h-full bg-black rounded-xl"></div>
      </div>
      <div className="flex-1 p-4 pt-6">
        <DashboardHeader />
        <div className="mt-4">{children}</div>
      </div>
    </Flex>
  );
}
