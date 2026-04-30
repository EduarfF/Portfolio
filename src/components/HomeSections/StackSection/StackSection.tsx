import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaNodeJs,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiPostgresql, SiHubspot } from "react-icons/si";

const techStack = [
  {
    name: "React",
    icon: <FaReact />,
    size: "col-span-2 row-span-1",
    color: "#61DAFB",
    desc: "Frontend Core",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    size: "col-span-2 row-span-1",
    color: "#339933",
    desc: "Backend",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    size: "col-span-1 row-span-1",
    color: "#F7DF1E",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    size: "col-span-1 row-span-1",
    color: "#06B6D4",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    size: "col-span-2 row-span-1",
    color: "#4169E1",
    desc: "Database Management",
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    size: "col-span-1 row-span-1",
    color: "#F24E1E",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    size: "col-span-1 row-span-1",
    color: "#000",
    bgHover: "rgba(255, 255, 255, 0.1)",
  },
  {
    name: "WordPress",
    icon: <FaWordpress />,
    size: "col-span-1 row-span-1",
    color: "#21759B",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    size: "col-span-1 row-span-1",
    color: "#4479A1",
  },
  {
    name: "HTML5 & CSS3",
    icon: (
      <div className="flex gap-2">
        <FaHtml5 />
        <FaCss3Alt />
      </div>
    ),
    size: "col-span-2 row-span-1",
    color: "#E34F26",
    desc: "Foundations",
  },
  {
    name: "HubSpot",
    icon: <SiHubspot />,
    size: "col-span-1 row-span-1",
    color: "#FF7A59",
  },
];

const StackSection = ({ id }: { id: string }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % techStack.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id={id}
      className="py-10 lg:py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-6 md:mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-bold uppercase text-slate-900 dark:text-white"
          >
            {t("home_page.stack_section.title")}
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[120px]">
          {techStack.map((tech, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`
                  relative overflow-hidden group rounded-3xl p-6
                  flex flex-col justify-between
                  bg-white dark:bg-[#121212] 
                  border transition-all duration-1000 shadow-xl
                  ${tech.size}
                  ${
                    isActive
                      ? "scale-[1.03] z-20 shadow-black/10"
                      : "border-slate-200 dark:border-white/5 shadow-black/5 z-10"
                  }
                `}
                style={{
                  borderColor: isActive ? tech.color : "",
                }}
              >
                <div
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    isActive ? "opacity-10" : "opacity-0 group-hover:opacity-10"
                  }`}
                  style={{ backgroundColor: tech.color }}
                />

                <div
                  className={`absolute -right-4 -bottom-4 transition-all duration-1000 text-8xl ${
                    isActive
                      ? "opacity-20 scale-110 rotate-6"
                      : "opacity-10 group-hover:opacity-20"
                  }`}
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div
                    className="text-3xl md:text-4xl transition-all duration-1000 mb-1"
                    style={{
                      color: tech.color,
                      transform: isActive
                        ? "scale(1.1) translateY(-2px)"
                        : "scale(1)",
                    }}
                  >
                    {tech.icon}
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white text-lg leading-tight">
                      {tech.name}
                    </h4>
                    {tech.desc && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 uppercase font-medium">
                        {tech.desc}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StackSection;
