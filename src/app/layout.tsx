// Styles
import "./globals.css";

// Context
import { ThemeProvider } from "@/context/theme";

// Components
import ClientRootLayout from "./ClientRootLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <ClientRootLayout>{children}</ClientRootLayout>
    </ThemeProvider>
  );
}
