import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "./ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { FaTelegramPlane, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  const navItems = [
    { name: t("header.home"), href: "/" },
    { name: t("header.about"), href: "about" },
    { name: t("header.experience"), href: "experience" },
    { name: t("header.stack"), href: "stack" },
    { name: t("header.portfolio"), href: "portfolio" },
  ];

  return (
    <header className="fixed top-6 left-0 w-full px-6 z-50">
      <div className="max-w-7xl mx-auto bg-white flex justify-end lg:justify-between items-center dark:bg-black dark:border-gray-800 px-3 lg:px-10 py-3 rounded-2xl shadow-xl transition-all duration-300">
        <nav className="hidden lg:flex md:w-sm lg:w-2xl justify-between gap-1 bg-gray-50 dark:bg-gray-900 lg:px-10 py-1 rounded-xl">
          {navItems.map((item) => {
            if (item.href === "/") {
              return (
                <Link
                  key={item.href}
                  to="/"
                  className="px-4 py-2 text-md font-medium text-gray-600 dark:text-gray-300 hover:text-yellow-500 rounded-lg transition-all"
                >
                  {item.name}
                </Link>
              );
            }

            return isHomePage ? (
              <a
                key={item.href}
                href={`#${item.href}`}
                className="px-4 py-2 text-md font-medium text-gray-600 dark:text-gray-300 hover:text-yellow-500 rounded-lg transition-all"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.href}
                to={`/#${item.href}`}
                className="px-4 py-2 text-md font-medium text-gray-600 dark:text-gray-300 hover:text-yellow-500 rounded-lg transition-all"
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden min-[500px]:flex items-center gap-5 pr-2 border-r border-gray-200 dark:border-gray-800">
            <SocialLink
              href="https://t.me/Eduard567847"
              icon={<FaTelegramPlane size={22} />}
            />
            <SocialLink
              href="https://github.com/EduarfF"
              icon={<FaGithub size={22} />}
            />
            <SocialLink
              href="https://www.linkedin.com/in/eduard-fakhrutdinov-321943314/"
              icon={<FaLinkedinIn size={22} />}
            />
            <SocialLink
              href="mailto:eduard.fakhrutdinov03@gmail.com"
              icon={<BiLogoGmail size={22} />}
            />
          </div>

          <button
            onClick={() =>
              changeLanguage(i18n.language.startsWith("en") ? "uk" : "en")
            }
            className="flex items-center justify-center w-10 h-10 text-xs font-bold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
          >
            {i18n.language.substring(0, 2).toUpperCase()}
          </button>

          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:opacity-80 text-gray-700 dark:text-yellow-400 transition-all"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-500 text-white hover:opacity-80"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-6 right-6 p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl transition-all animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-base font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-xl transition-all"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="min-[500px]:hidden flex justify-center mt-3 pt-3 gap-5 pr-2 border-t border-gray-200 dark:border-gray-800">
            <SocialLink
              href="https://t.me/Eduard567847"
              icon={<FaTelegramPlane size={22} />}
            />
            <SocialLink
              href="https://github.com/EduarfF"
              icon={<FaGithub size={22} />}
            />
            <SocialLink
              href="https://www.linkedin.com/in/eduard-fakhrutdinov-321943314/"
              icon={<FaLinkedinIn size={22} />}
            />
            <SocialLink
              href="mailto:eduard.fakhrutdinov03@gmail.com"
              icon={<BiLogoGmail size={22} />}
            />
          </div>
        </div>
      )}
    </header>
  );
};

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-9 h-9 flex items-center justify-center rounded-xl text-gray-500 hover:text-yellow-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
  >
    {icon}
  </a>
);

export default Header;
