// Libs
import { ReactNode } from "react";

import DashboardLayout from "./clientLayout";

// Services
import { getPinCode, getProfile } from "@/services";

export default async function DashboardLayoutWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const [profile, pinCode] = await Promise.all([getProfile(), getPinCode()]);
  const profileData = { ...profile, pinCode };

  return (
    <DashboardLayout profileData={profileData}>{children}</DashboardLayout>
  );
}
