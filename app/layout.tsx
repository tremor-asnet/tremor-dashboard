// Libs
import type { Metadata } from "next";

// Styles
import "./globals.css";

// Context
import { ThemeProvider } from "@/context/theme";
import { ToastProvider } from "@/context/toast";

// Components
import ClientRootLayout from "./ClientRootLayout";

// Constants
import { METADATA } from "@/constants";

export const metadata: Metadata = {
  title: "Tremor Dashboard - System manage budgets, products and users",
  description:
    "Tremor Dashboard is one dashboard to manage budgets, products and users of one organization.",
  openGraph: {
    title: "Tremor Dashboard - System manage budgets, products and users",
    description:
      "Tremor Dashboard is one dashboard to manage budgets, products and systems of one organization",
    url: "https://tremor-dashboard-gamma.vercel.app/",
    siteName: "https://tremor-dashboard-gamma.vercel.app/",
    images: [
      {
        url: METADATA.HOME_PREVIEW,
        width: 1200,
        height: 628,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#66bb6a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <ClientRootLayout>
        <ToastProvider>{children}</ToastProvider>
      </ClientRootLayout>
    </ThemeProvider>
  );
}
