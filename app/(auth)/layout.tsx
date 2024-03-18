import { ReactNode } from "react";

// Components
import { AuthLayout } from "@/ui/features/auth/";

const Layout = ({ children }: { children: ReactNode }) => (
  <AuthLayout>{children}</AuthLayout>
);

export default Layout;
