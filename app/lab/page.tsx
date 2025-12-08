import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lab | Eduardo Melo",
  description: "Writings and thoughts.",
};

export default function Lab() {
  return (
    <div className="space-y-12">
      
      <header className="space-y-4">
        <h1 className="text-black dark:text-white font-bold text-lg">My Lab</h1>
        <p className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed">
          Thoughts about code, Linux, and things I learn along the way.
        </p>
      </header>

      <div className="space-y-8">
        
        <Link href="/lab/best-practices-for-backend-developers" className="block border border-transparent hover:border-gray-200 dark:hover:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg p-4 -mx-4 transition-all duration-300 group no-underline">
          <h2 className="text-black dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            Best Practices for Backend Developers
          </h2>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
            Some thoughts on backend.
          </p>

        </Link>

      </div>
    </div>
  );
}