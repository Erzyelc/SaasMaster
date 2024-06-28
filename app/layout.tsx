import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Navbaralt } from "@/components/navbaralt";

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
    <html lang="en">
      <body
        // className={`${inter.variable} bg-gradient-to-r from-slate-700 to-blue-500 `}
        className={`${inter.variable} `}
      >
        {/* <Navbar /> */}
        <Navbaralt />
        {children}
      </body>
    </html>
  );
}