import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

interface ExperienceSectionProps {
  id: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  const colorVariants: Record<string, string> = {
    blue: "border-blue-500 text-blue-500 shadow-blue-500/20",
    purple: "border-purple-500 text-purple-500 shadow-purple-500/20",
  };

  const experiences = [
    {
      type: "work",
      title: t("home_page.experience_section.web_developer"),
      company: "",
      period: t("home_page.experience_section.web_date"),
      description: t("home_page.experience_section.web_description"),
      tags: [
        "React",
        "JavaScript",
        "SCSS",
        "HubSpot",
        "WordPress",
        "Email HTML",
      ],
      icon: <Briefcase className="w-5 h-5" />,
      color: "blue",
    },
    {
      type: "education",
      title: t("home_page.experience_section.unv_route"),
      company: t("home_page.experience_section.unv_name"),
      period: t("home_page.experience_section.unv_date"),
      description: t("home_page.experience_section.unv_description"),
      tags: [
        t("home_page.experience_section.unv_theme_1"),
        t("home_page.experience_section.unv_theme_2"),
        t("home_page.experience_section.unv_theme_3"),
      ],
      icon: <GraduationCap className="w-5 h-5" />,
      color: "purple",
    },
  ];

  return (
    <section
      id={id}
      className="scroll-mt-20 w-full bg-slate-50 dark:bg-slate-900 py-10 lg:py-20 transition-all duration-300"
    >
      <div className="max-w-6xl md:flex md:gap-10 mx-auto px-6">
        <div className="md:max-w-2xs mb-12 md:mb-20">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-bold text-slate-900 dark:text-white mb-4"
          >
            {t("home_page.experience_section.title")}
          </motion.h4>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{
              width: ["5rem", "7rem", "5rem"],
            }}
            viewport={{ once: true }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.2,
            }}
            className="h-1.5 bg-yellow-500 mb-4 md:mb-8 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-600 dark:text-slate-400 text-lg md:text-xl"
          >
            {t("home_page.experience_section.subtitle")}
          </motion.p>
        </div>

        <div className="relative ml-4 md:ml-10 space-y-12">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 translate-x-px" />

          <div className="absolute left-0 top-0 bottom-0 w-0.5 translate-x-px overflow-hidden">
            <motion.div
              animate={{
                top: ["-20%", "120%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-full h-32 bg-linear-to-b from-transparent via-gray-500 to-transparent"
            />
          </div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div
                className={`absolute -left-3.5 top-0 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 ${colorVariants[exp.color]} flex items-center justify-center shadow-xl `}
              >
                {exp.icon}
              </div>

              <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 p-3 md:p-6 rounded-2xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row justify-between mb-4 gap-3">
                  <div>
                    <h6 className="font-bold text-slate-900 dark:text-white">
                      {exp.title}
                    </h6>
                    {exp.company && (
                      <p className="text-yellow-500 dark:text-yellow-500">
                        {exp.company}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center select-none pointer-events-none text-slate-500 dark:text-slate-400 text-sm self-start font-mono bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs select-none pointer-events-none font-semibold rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
