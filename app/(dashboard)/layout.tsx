// Libs
import { ReactNode } from "react";

import DashboardLayout from "./clientLayout";

// Services
import { getPinCode, getProfile } from "@/services";
import { cookies } from "next/headers";
import { UID_KEY } from "@/constants";

export default async function DashboardLayoutWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const [profile, pinCode] = await Promise.all([getProfile(), getPinCode()]);
  const profileData = {
    ...profile,
    pinCode,
    userId: cookies().get(UID_KEY)?.value,
  };

  return (
    <DashboardLayout profileData={profileData}>{children}</DashboardLayout>
  );
}
