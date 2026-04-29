import { Sandpack } from "@codesandbox/sandpack-react";
import { codeFiles } from "./files";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Code2, Sparkles, Monitor } from "lucide-react";

const ProjectWordBreaker = () => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");
  const { t } = useTranslation();

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setCurrentTheme(isDark ? "dark" : "light");
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 lg:py-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
            <Sparkles size={18} />
            <span>{t("project_word_breaker.title")}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <h3 className="font-bold mb-4 text-slate-900 dark:text-white leading-tight">
                {t("project_word_breaker.subtitle")}{" "}
                <span className="text-yellow-500">
                  WordBreaker
                </span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                {t("project_word_breaker.description")}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 rounded-lg shadow-sm text-indigo-700 dark:text-indigo-300">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </div>
                <span className="text-sm font-semibold">React Sandbox</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                <Code2 size={16} className="text-slate-400" />
                <span className="text-sm font-medium">Vanilla JS</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                <Monitor size={16} className="text-slate-400" />
                <span className="text-sm font-medium">Responsive</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>
              <div className="text-[11px] font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-2">
                Live Preview Environment
              </div>
              <div className="w-12" />
            </div>

            <Sandpack
              template="vanilla"
              files={codeFiles}
              theme={currentTheme}
              options={{
                activeFile: "/index.html",
                editorHeight: 600,
                showTabs: true,
                showLineNumbers: true,
                closableTabs: false,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectWordBreaker;
