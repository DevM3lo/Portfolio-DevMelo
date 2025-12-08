import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-16">
      
      <header className="space-y-6">
        <h1 className="text-black dark:text-white font-bold text-lg">Eduardo Melo</h1>
        
        <div className="space-y-4 leading-relaxed text-[15px] text-gray-600 dark:text-gray-400">
          <p>
            I'm a backend developer passionate about building robust systems and scalable APIs. Currently working with Java and Spring Boot, on a path to becoming a Software Engineer. And who knows, maybe I'll become a Full Stack developer.
            Currently working with <strong>Java</strong> and <strong>Spring Boot</strong>, on my way to becoming a Software Engineer.
          </p>
          <p>
            I enjoy both <span className="text-black dark:text-white underline decoration-gray-400 dark:decoration-gray-600 underline-offset-4 decoration-1">system architecture</span> and <span className="text-black dark:text-white underline decoration-gray-400 dark:decoration-gray-600 underline-offset-4 decoration-1">coding</span>.
          </p>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="text-black dark:text-white font-semibold text-sm">Projects</h2>
        <p className="text-sm text-gray-500">Some side projects I'm building.</p>

        <Link href="/projects" className="block">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-5 hover:bg-gray-100 dark:hover:bg-gray-900/50 transition cursor-pointer group">
                <h3 className="text-black dark:text-white font-medium group-hover:underline decoration-gray-400 dark:decoration-gray-600 underline-offset-4">
                  Finance Startup Backend (Co-Dev)
                </h3>
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                  Collaborating on a robust REST API for financial management. Focus on clean architecture.
                </p>
            </div>
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-black dark:text-white font-semibold text-sm">Lab</h2>
        <p className="text-sm text-gray-500">Recent experiments.</p>

        <Link href="/lab" className="block">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-5 hover:bg-gray-100 dark:hover:bg-gray-900/50 transition cursor-pointer group">
                <h3 className="text-black dark:text-white font-medium group-hover:underline decoration-gray-400 dark:decoration-gray-600 underline-offset-4">
                  Best Backend practices for developers
                </h3>
                <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
                  Some of my thoughts on backend.
                </p>
            </div>
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-black dark:text-white font-semibold text-sm">Connect</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Reach me out <a href="mailto:eduardom.dsilva7@gmail.com" className="text-black dark:text-white hover:underline decoration-gray-400 dark:decoration-gray-600 underline-offset-4">eduardom.dsilva7@gmail.com</a>
        </p>

        <div className="border border-dashed border-gray-200 dark:border-gray-800 rounded-lg p-4 flex gap-6 text-xs mt-4 text-gray-600 dark:text-gray-400">
          <a href="https://www.linkedin.com/in/eduardo-melooo/" target="_blank" className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors">
            LinkedIn <ArrowUpRight size={12} />
          </a>
          <a href="https://github.com/DevM3lo" target="_blank" className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors">
            GitHub <ArrowUpRight size={12} />
          </a>
          <a href="https://www.instagram.com/meloo.dev/" target="_blank" className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors">
            Instagram <ArrowUpRight size={12} />
          </a>
        </div>
      </section>
    </div>
  );
}