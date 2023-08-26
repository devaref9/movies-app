import "./globals.css";
import localFont from "next/font/local";
// import { Inter } from "next/font/google";
import React from "react";
import Providers from "@/lib/RQProvider";
import AuthProvider from "@/contexts/AuthContext";
import { ToastContainer } from "react-toastify";

const yekan = localFont({
  src: [
    {
      path: "../public/assets/fonts/YekanBakh-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/YekanBakh-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/YekanBakh-Regular.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-yekan",
});

export const metadata = {
  title: "سایت دانلود فیلم",
  description: "A Movie Web Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" lang="fa" className="overflow-y-scroll scrollbar--custom !scroll-smooth">
      <body
        className={`${yekan.variable} font-yekan bg-dark text-light flex flex-col min-h-screen `}
      >
        <Providers>
          <AuthProvider>
            {children}
            <ToastContainer />
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
