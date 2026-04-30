import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NotFound() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 pt-10 pb-10 lg:pt-20 lg:pb-0 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="font-extrabold tracking-tighter mb-5 text-slate-950 dark:text-white leading-tight">
              {t("not_found_page.title")}
            </h3>
            <p className="text-sm md:text-lg mb-8 text-slate-600 dark:text-slate-400">
              {t("not_found_page.description")}
            </p>
            <div>
              <Link
                to="/"
                className="text-sm md:text-lg bg-slate-900 dark:bg-yellow-500 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-yellow-400 px-4 py-2 md:px-8 md:py-3 rounded-xl transition-all font-bold shadow-lg hover:shadow-xl"
              >
                {t("not_found_page.back_button")}
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <span className="text-[120px] md:text-[180px] font-black text-red-500 leading-none select-none">
                  404
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
