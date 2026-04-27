import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MapPin, Rocket, Languages, Trophy } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface AboutSectionProps {
  id: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  const { t } = useTranslation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const developerData = {
    name: "Eduard",
    role: "Frontend Developer",
    stack: ["HTML", "CSS", "JS", "React", "TypeScript", "Next.js"],
    coding_stats: {
      codewars: "450+ tasks",
      leetcode: "320+ solved",
    },
    location: "Kharkiv, UA",
    english: "B2",
    status: "Open to work",
  };

  const jsonString = JSON.stringify(developerData, null, 2);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let interval: any;
    let timeout: any;

    if (isInView) {
      let i = 0;
      
      const startTyping = () => {
        interval = setInterval(() => {
          setDisplayText(jsonString.slice(0, i));
          i++;
          
          if (i > jsonString.length) {
            clearInterval(interval);
            timeout = setTimeout(() => {
              i = 0;
              setDisplayText("");
              startTyping();
            }, 3000);
          }
        }, 25);
      };

      startTyping();
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isInView, jsonString]);

  const statsItems = [
    {
      icon: <MapPin size={20} />,
      label: t("home_page.about_me_section.stats.location_label"),
      value: t("home_page.about_me_section.stats.location_value"),
      color: "blue",
    },
    {
      icon: <Rocket size={20} />,
      label: t("home_page.about_me_section.stats.status_label"),
      value: t("home_page.about_me_section.stats.status_value"),
      color: "green",
    },
    {
      icon: <Languages size={20} />,
      label: t("home_page.about_me_section.stats.english_label"),
      value: t("home_page.about_me_section.stats.english_value"),
      color: "purple",
    },
    {
      icon: <Trophy size={20} />,
      label: t("home_page.about_me_section.stats.solving_label"),
      value: t("home_page.about_me_section.stats.solving_value"),
      color: "orange",
    },
  ];

  return (
    <section id={id} className="w-full bg-slate-50 dark:bg-slate-900 py-10 lg:py-20 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="md:flex md:gap-10">
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-sm mb-10 md:mb-0 relative flex"
          >
            <div className="bg-[#1d1f21] rounded-xl shadow-2xl overflow-hidden border border-slate-800 w-full max-w-95 m-auto md:min-w-75 h-123.75 flex flex-col">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-slate-800 flex-none">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs text-slate-400 ml-2 font-mono">developer.json</span>
              </div>
              <div className="p-2 relative flex-1 font-mono">
                <SyntaxHighlighter
                  language="json"
                  style={atomDark}
                  customStyle={{
                    margin: 0,
                    padding: "1.5rem",
                    fontSize: "0.85rem",
                    background: "transparent",
                    height: "100%",
                  }}
                >
                  {displayText}
                </SyntaxHighlighter>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex-1 space-y-8 flex flex-col justify-center"
          >
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                <h6 className="text-yellow-500 font-bold tracking-widest uppercase">
                  {t("home_page.about_me_section.about_me")}
                </h6>
              </div>
              <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400">
                {t("home_page.about_me_section.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-9 gap-y-6">
              {statsItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className={`p-2 rounded-xl flex-shrink-0 
                    ${item.color === 'blue' ? 'bg-blue-500/10 text-blue-500' : ''}
                    ${item.color === 'green' ? 'bg-green-500/10 text-green-500' : ''}
                    ${item.color === 'purple' ? 'bg-purple-500/10 text-purple-500' : ''}
                    ${item.color === 'orange' ? 'bg-orange-500/10 text-orange-500' : ''}
                  `}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold dark:text-white leading-tight">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;