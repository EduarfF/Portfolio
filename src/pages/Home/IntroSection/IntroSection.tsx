import { useTranslation } from "react-i18next";
import { FiDownload } from "react-icons/fi";
import { SiJavascript, SiHtml5, SiCss } from "react-icons/si";
import { motion } from "framer-motion";
import me from "../../../../public/images/me-01.jpg";

interface IntroSectionProps {
  id: string;
}

const IntroSection: React.FC<IntroSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const nameContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.2,
      },
    },
  };

  const letterVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const renderPosition = (text: string) => {
    const words = text.split(" ");
    if (words.length < 2) return text;
    return (
      <>
        {words[0]}{" "}
        <span className="text-yellow-500">{words.slice(1).join(" ")}</span>
      </>
    );
  };

  const name = "Eduard";

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      id={id}
      viewport={{ once: true }}
      variants={containerVariants}
      className="scroll-mt-40 w-full bg-slate-50 dark:bg-slate-900 py-10 lg:pb-20 lg:pt-20 transition-all duration-300 overflow-hidden"
    >
      <div className="max-w-302 mx-auto px-6">
        <div className="md:flex md:flex-row-reverse md:gap-10 md:justify-between md:items-center">
          <motion.div
            variants={itemVariants}
            className="relative z-10 w-full mb-15 m-auto md:m-0 max-w-112.5"
          >
            <div className="absolute inset-0 border-3 border-yellow-400 translate-x-4 translate-y-4 rounded-2xl -z-10" />
            <div className="overflow-hidden rounded-2xl shadow-2xl relative">
              <img
                src={me}
                className="w-full block transition-all duration-700 ease-in-out hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white/80 dark:bg-slate-900/80 p-1 pr-4 rounded-2xl shadow-2xl flex items-center gap-3">
                <div className="bg-yellow-400 dark:bg-yellow-500 text-slate-900 w-12 h-12 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-black">
                    {t("home_page.intro_section.experience-years-number")}
                  </span>
                </div>
                  <p className="text-sm font-black text-slate-900 dark:text-white">
                    {t("home_page.intro_section.experience-years-text")}
                  </p>
              </div>
            </div>

            <motion.div
              variants={nameContainer}
              className="absolute bottom-5 left-5 sm:-left-20 md:-left-25 lg:-left-40 z-20 pointer-events-none select-none flex"
            >
              {name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariant}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-widest 
                  text-transparent [-webkit-text-stroke:1px_rgba(234,179,8,0.6)]"
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <div className="max-w-2xl">
            <motion.div
              variants={itemVariants}
              className="bg-yellow-500/10 border border-yellow-500/20 dark:bg-slate-800 dark:border-slate-700 inline-block px-3.5 py-1.5 mb-4 md:mb-8 rounded-full"
            >
              <h6 className="text-yellow-500 font-bold">
                {t("home_page.intro_section.greeting")}
              </h6>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mb-4 md:mb-8 font-bold dark:text-white"
            >
              {renderPosition(t("home_page.intro_section.position"))}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-500 mb-5 dark:text-gray-300 md:mb-10 text-sm md:text-xl"
            >
              {t("home_page.intro_section.description")}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6"
            >
              <a
                href="/CV-EDUARD-FAKHRUTDINOV-FRONTEND-DEVELOPER-KHARKIV.pdf"
                download="CV-EDUARD-FAKHRUTDINOV-FRONTEND-DEVELOPER-KHARKIV.pdf"
                className="flex items-center text-sm md:text-lg gap-2 bg-slate-900 dark:bg-yellow-500 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-yellow-400 px-4 py-2 md:px-8 md:py-3 rounded-xl transition-all font-bold shadow-lg hover:shadow-xl"
              >
                <FiDownload className="text-sm md:text-lg" />
                {t("home_page.intro_section.cv-button")}
              </a>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div
                    className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 bg-gray-50 dark:bg-slate-800 text-slate-400 flex items-center justify-center transition-all duration-300 hover:text-[#E34F26] hover:bg-[#E34F26]/10 hover:z-30 shadow-sm"
                    title="HTML5"
                  >
                    <SiHtml5 size={22} />
                  </div>
                  <div
                    className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 bg-gray-50 dark:bg-slate-800 text-slate-400 flex items-center justify-center transition-all duration-300 hover:text-[#1572B6] hover:bg-[#1572B6]/10 hover:z-20 shadow-sm"
                    title="CSS3"
                  >
                    <SiCss size={22} />
                  </div>
                  <div
                    className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 bg-gray-50 dark:bg-slate-800 text-slate-400 flex items-center justify-center transition-all duration-300 hover:text-[#F7DF1E] hover:bg-[#F7DF1E]/10 hover:z-10 shadow-sm"
                    title="JavaScript"
                  >
                    <SiJavascript size={22} />
                  </div>
                </div>

                <div className="pl-4 text-sm text-gray-500 dark:text-gray-400 font-medium border-l border-gray-300 dark:border-gray-700">
                  <span className="block text-slate-900 dark:text-white font-bold text-xl leading-none">
                    +{t("home_page.intro_section.templates-done-number")}
                  </span>
                  Projects
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default IntroSection;
