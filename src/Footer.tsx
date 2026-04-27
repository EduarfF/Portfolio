import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram, FaQuoteLeft } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/EduarfF" },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/eduard-fakhrutdinov-321943314/",
    },
    { icon: <FaTelegram />, href: "https://t.me/Eduard567847" },
    { icon: <BiLogoGmail />, href: "mailto:eduard.fakhrutdinov03@gmail.com" },
  ];

  return (
    <footer className="relative border-t-3 border-slate-200 dark:border-slate-800 duration-300 md:mt-10 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-3 md:px-6 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-center">
          
          <div className="flex flex-col items-center md:items-start order-2 md:order-1">
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-500 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {t("footer.available_text")}
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-center md:text-left">
              {t("footer.frontend_developer")}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-sm m-auto text-center order-1 md:order-2 flex flex-col items-center"
          >
            <FaQuoteLeft className="text-yellow-500/50 text-2xl mb-3" />
            
            <p className="text-slate-700 dark:text-slate-200 italic text-sm md:text-base mb-3 transition-colors">
              {t("footer.quote_text")}
            </p>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500 font-semibold">
              — {t("footer.quote_author")}
            </span>
          </motion.div>

          <div className="flex flex-col items-center md:items-end gap-5 order-3">
            <div className="flex gap-5 text-2xl">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="text-slate-600 dark:text-slate-400 hover:text-yellow-500 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-600 font-medium">
              © {currentYear} • {t("footer.copyright")}
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;