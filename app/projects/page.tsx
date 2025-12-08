import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Eduardo Melo",
  description: "Backend projects and experiments.",
};

export default function Projects() {
  return (
    <div className="space-y-12">
      
      <header className="space-y-4">
        <h1 className="text-black dark:text-white font-bold text-lg">My Projects</h1>
        <p className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed">
          A collection of backend systems, APIs and automation tools I've built.
        </p>
      </header>

      <div className="space-y-6">
        
        <a 
          href="https://github.com/DenisGabriel017/ControleFinanceiro-API"
          target="_blank"
          className="block border border-gray-200 dark:border-gray-800 rounded-lg p-5 hover:bg-gray-100 dark:hover:bg-gray-900/40 transition-colors cursor-pointer group no-underline"
        >
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="text-black dark:text-white font-medium group-hover:underline underline-offset-4 decoration-gray-400 dark:decoration-gray-600">
                Finance Startup Backend (Co-Dev)
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                Collaborating on a robust REST API for financial management. Focus on clean architecture and Spring Security.
              </p>
            </div>

            <div className="flex gap-2 mt-1">
              <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-2 py-1 rounded">
                Java 21
              </span>
              <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-2 py-1 rounded">
                Spring Boot
              </span>
              <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-2 py-1 rounded">
                PostgreSQL
              </span>
            </div>
          </div>
        </a>

        <a 
          href="https://github.com/DevM3lo/projeto-django-tarefas"
          target="_blank"
          className="block border border-gray-200 dark:border-gray-800 rounded-lg p-5 hover:bg-gray-100 dark:hover:bg-gray-900/40 transition-colors cursor-pointer group no-underline"
        >
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="text-black dark:text-white font-medium group-hover:underline underline-offset-4 decoration-gray-400 dark:decoration-gray-600">
                Task Manager App
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                A full-stack task management application developed to master Python web frameworks.
              </p>
            </div>

            <div className="flex gap-2 mt-1">
              <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-2 py-1 rounded">
                Python
              </span>
              <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-2 py-1 rounded">
                Django
              </span>
              <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-2 py-1 rounded">
                SQLite
              </span>
            </div>
          </div>
        </a>

        <a 
          href="https://github.com/DevM3lo/DelegaciaBot"
          target="_blank"
          className="block border border-gray-200 dark:border-gray-800 rounded-lg p-5 hover:bg-gray-100 dark:hover:bg-gray-900/40 transition-colors cursor-pointer group no-underline"
        >
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="text-black dark:text-white font-medium group-hover:underline underline-offset-4 decoration-gray-400 dark:decoration-gray-600">
                Delegacia Bot
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                An automation bot built to handle specific tasks and interactions.
              </p>
            </div>

            <div className="flex gap-2 mt-1">
              <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-2 py-1 rounded">
                Python
              </span>
              <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-2 py-1 rounded">
                Automation
              </span>
            </div>
          </div>
        </a>

      </div>
    </div>
  );
}