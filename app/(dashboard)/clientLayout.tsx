"use client";

// Libs
import { ReactNode, useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

// Components
import { Flex } from "@tremor/react";
import { LoadingIndicator, SideBar, DashboardHeader } from "@/ui/components";

// Features
import PinCode from "@/ui/features/pin-code";

// Constants
import { ROUTES } from "@/constants";

import { signOut } from "@/services";

import { PinCodeProvider } from "@/context/pincode";

// Styles
import "@/styles/billing.css";

interface IProfileData {
  avatar: string;
  name: string;
  pinCode?: number;
  userId?: number;
}
interface DashboardLayoutProp {
  profileData: IProfileData;
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

  const { avatar, name, pinCode, userId } = profileData;

  const signOutAction = useCallback(async () => {
    setIsPending(true);
    await signOut();
    setIsCollapseSidebar(false);
    router.replace(ROUTES.SIGN_IN);
  }, [router]);

  useEffect(() => {
    !userId && signOutAction();
  }, [signOutAction, userId]);

  return (
    <PinCodeProvider pinCode={pinCode} userId={userId}>
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
          className={`print-layout flex flex-col w-full min-h-screen p-4 sm:p-5 md:p-6 pt-6 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.6,1)] delay-20 ${
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
      <PinCode />
    </PinCodeProvider>
  );
}
