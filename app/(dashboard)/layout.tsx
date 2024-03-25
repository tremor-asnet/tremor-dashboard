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
  const profile = await getProfile();

  // TODO: Will get PIN code in profile data
  const pinCode = await getPinCode();
  const profileData = { ...profile, pinCode };

  return (
    <DashboardLayout profileData={profileData}>{children}</DashboardLayout>
  );
}
