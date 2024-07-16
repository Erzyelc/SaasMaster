import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbaralt } from "@/components/navbaralt";
import { Footer } from "@/components/footer";
import Providers from "./providers";
import { DockMain } from "@/components/dockmain";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SaasMaster - All your SaaS needs in one place",
  description: "SaasMaster is the best place to find all your SaaS needs",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-white dark:bg-black`}>
        <Providers attribute="class" defaultTheme="system">
          <Navbaralt />
          {children}
          <DockMain />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
