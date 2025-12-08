"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const linkStyle = (path: string) => {
    if (pathname === path) {
      
      return "text-black dark:text-white border-b-2 border-black dark:border-white pb-1 font-semibold";
    }
    return "text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors pb-1";
  };

  return (
    <nav className="flex justify-between items-center">
      <div className="flex gap-6 text-sm font-medium">
        <Link href="/" className={linkStyle("/")}>Main</Link>
        <Link href="/projects" className={linkStyle("/projects")}>Projects</Link>
        <Link href="/lab" className={linkStyle("/lab")}>Lab</Link>
      </div>
      
      <button 
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        {mounted && (theme === "dark" ? <Sun size={18} className="text-white"/> : <Moon size={18} className="text-black"/>)}
      </button>
    </nav>
  );
}