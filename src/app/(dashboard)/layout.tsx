// Libs
import { ReactNode } from "react";

import DashboardLayout from "./clientLayout";

import { getProfile } from "@/app/actions";

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
