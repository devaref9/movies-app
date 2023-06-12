import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import ScrollToTop from "./components/ScrollToTop";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zard Film",
  description: "A Movie Web Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-y-scroll">
      <body className={`${inter.className}  bg-gray-200 flex flex-col min-h-screen`}>
        <Providers>
          <Navbar />
          <ScrollToTop />
          {children}
        </Providers>
      </body>
    </html>
  );
}
