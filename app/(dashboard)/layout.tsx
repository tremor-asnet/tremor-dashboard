// Libs
import { ReactNode } from "react";

import DashboardLayout from "./clientLayout";

// Services
import { getProfile } from "@/services";

export default async function DashboardLayoutWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const profileData = await getProfile();

  return (
    <DashboardLayout profileData={profileData}>{children}</DashboardLayout>
  );
}
