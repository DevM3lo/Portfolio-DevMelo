import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Main | Dev Melo",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen py-12 gap-16 bg-white text-gray-900 dark:bg-[#050505] dark:text-gray-400 transition-colors duration-300">
        <Providers>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <footer className="pt-12 border-t border-dashed border-gray-200 dark:border-gray-800 text-center text-xs text-gray-500 dark:text-gray-600">
            1% better every day
          </footer>
        </Providers>
      </body>
    </html>
  );
}