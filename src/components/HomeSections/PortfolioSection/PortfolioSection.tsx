import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface BaseProject {
  id: number;
  category: "landings" | "emails" | "pet";
  image: string;
  stack: string[];
}

interface LegacyProject extends BaseProject {
  category: "landings" | "emails";
  description: string;
}

interface PetProject extends BaseProject {
  category: "pet";
  url: string;
}

type Project = LegacyProject | PetProject;

const PROJECTS: Project[] = [
  {
    id: 1,
    category: "landings",
    description: "home_page.portfolio_section.projects.landing_wp.description",
    image: "/images/img-01.png",
    stack: ["WordPress", "HTML5", "SCSS", "JavaScript", "jQuery"],
  },
  {
    id: 2,
    category: "landings",
    description: "home_page.portfolio_section.projects.landing_hb.description",
    image: "/images/img-02.webp",
    stack: ["HubSpot", "HTML5", "SCSS", "JavaScript", "jQuery"],
  },
  {
    id: 3,
    category: "landings",
    description:
      "home_page.portfolio_section.projects.landing_shopify.description",
    image: "/images/img-03.webp",
    stack: ["Shopify", "HTML5", "SCSS", "JavaScript", "jQuery"],
  },
  {
    id: 4,
    category: "landings",
    description: "home_page.portfolio_section.projects.landing_gh.description",
    image: "/images/img-04.webp",
    stack: ["HubSpot", "HTML5", "SCSS", "JavaScript", "jQuery"],
  },
  {
    id: 5,
    category: "emails",
    description: "home_page.portfolio_section.projects.email_hb.description",
    image: "/images/img-05.webp",
    stack: [
      "HTML",
      "HubSpot",
      "Outlook",
      "Gmail",
      "Icloud",
      "PixelPerfect",
      "ThunderBird",
      "w3validator",
    ],
  },
  {
    id: 6,
    category: "emails",
    description:
      "home_page.portfolio_section.projects.email_klaviyo.description",
    image: "/images/img-06.webp",
    stack: [
      "HTML",
      "Klaviyo",
      "Outlook",
      "Gmail",
      "Icloud",
      "PixelPerfect",
      "ThunderBird",
      "w3validator",
    ],
  },
  {
    id: 7,
    category: "emails",
    description:
      "home_page.portfolio_section.projects.email_customer.description",
    image: "/images/img-07.webp",
    stack: [
      "Customer.io",
      "HTML",
      "Outlook",
      "Gmail",
      "Icloud",
      "PixelPerfect",
      "ThunderBird",
      "w3validator",
    ],
  },
  {
    id: 8,
    category: "emails",
    description:
      "home_page.portfolio_section.projects.email_mailchimp.description",
    image: "/images/img-08.webp",
    stack: [
      "Mailchimp",
      "HTML",
      "Outlook",
      "Gmail",
      "Icloud",
      "PixelPerfect",
      "ThunderBird",
      "w3validator",
    ],
  },
  {
    id: 9,
    category: "emails",
    description:
      "home_page.portfolio_section.projects.email_active.description",
    image: "/images/img-09.webp",
    stack: [
      "Active Campaign",
      "HTML",
      "Outlook",
      "Gmail",
      "Icloud",
      "PixelPerfect",
      "ThunderBird",
      "w3validator",
    ],
  },
  {
    id: 10,
    category: "pet",
    stack: ["HTML, CSS, JS"],
    image: "/images/img-10.jpg",
    url: "/projects/wordbreaker",
  },
];

interface PortfolioSectionProps {
  id: string;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ id }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"landings" | "emails" | "pet">(
    "pet",
  );
  const [flippedId, setFlippedId] = useState<number | null>(null);

  const filteredProjects = PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section
      id={id}
      className="w-full bg-slate-50 dark:bg-slate-900 py-10 lg:py-20 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="md:flex md:flex-row md:items-end justify-between gap-8 mb-6 md:mb-12">
          <div className="mb-5 md:m-0">
            <div className="inline-block px-4 py-1.5 mb-2 rounded-full bg-yellow-500/10 border border-yellow-500/20">
              <h5 className="text-yellow-500 font-bold tracking-widest uppercase">
                {t("home_page.portfolio_section.title")}
              </h5>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-xl max-w-xl">
              {t("home_page.portfolio_section.subtitle")}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="inline-flex p-1.5 bg-slate-200/50 dark:bg-slate-800/50 rounded-2xl border border-slate-300/30">
              {(["pet", "landings", "emails"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setFlippedId(null);
                  }}
                  className={`py-2 px-1 w-22 text-[10px] min-[500px]:w-32.5 min-[500px]:px-4 min-[500px]:py-3 min-[500px]:text-sm rounded-xl font-bold transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab
                      ? "bg-white dark:bg-slate-700  text-yellow-500"
                      : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                  }`}
                >
                  {tab === "landings"
                    ? "Landing Pages"
                    : tab === "emails"
                      ? "Emails"
                      : "PetProjects"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {activeTab === "emails" || activeTab === "landings" ? (
          <div
            className={`grid grid-cols-1 gap-6 lg:gap-12 transition-all duration-500 ${
              activeTab === "landings"
                ? "md:grid-cols-2"
                : "sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`relative group w-full ${
                  activeTab === "emails"
                    ? "h-100 sm:h-125 max-w-[320px] m-auto md:max-w-none"
                    : "h-100 max-w-125 m-auto md:max-w-none"
                } perspective-[2000px]`}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-3d ${
                    flippedId === project.id
                      ? "transform-[rotateY(180deg)]"
                      : ""
                  }`}
                >
                  <div
                    className="absolute inset-0 backface-hidden cursor-pointer"
                    onClick={() => setFlippedId(project.id)}
                  >
                    <div
                      className={`relative w-full h-full overflow-hidden bg-white dark:bg-slate-800 shadow-xl border transition-all duration-500 ${
                        activeTab === "emails"
                          ? "border-12 border-slate-950 rounded-[3rem]"
                          : "rounded-2xl border-slate-200 dark:border-slate-800"
                      }`}
                    >
                      <div className="absolute top-4 right-4 z-20">
                        <div className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-yellow-500 transition-colors shadow-lg">
                          <span className="font-serif italic font-bold">i</span>
                        </div>
                      </div>

                      <div
                        className={`w-full h-full bg-top bg-cover transition-[background-position] duration-15000 ease-linear will-change-[background-position] ${
                          flippedId === project.id
                            ? "pointer-events-none"
                            : "group-hover:bg-bottom"
                        }`}
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 h-full w-full rounded-[2.5rem] bg-slate-900 p-4 md:p-8 text-white transform-[rotateY(180deg)] [backface-visibility:hidden] cursor-pointer shadow-2xl border border-white/10"
                    onClick={() => setFlippedId(null)}
                  >
                    <div className="flex flex-col h-full">
                      <div className="text-right ml-auto mb-6">
                        <button
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center text-white/50 transition-all duration-300 hover:text-red-500 hover:bg-red-500/10 hover:scale-110 group/close"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFlippedId(null);
                          }}
                        >
                          <div className="relative w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                            <span className="absolute w-full h-0.5 bg-current transform rotate-45 rounded-full transition-transform duration-300"></span>
                            <span className="absolute w-full h-0.5 bg-current transform -rotate-45 rounded-full transition-transform duration-300"></span>
                          </div>
                        </button>
                      </div>

                      <p className="text-sm leading-relaxed text-slate-300 mb-6 grow overflow-y-auto">
                        {t(project.description)}
                      </p>

                      <div className="mt-auto pt-6 border-t border-white/10">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-500 mb-3 text-center">
                          {t("home_page.portfolio_section.tech")}
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-medium border border-white/10 text-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
            {filteredProjects.map((project) => {
              if (project.category !== "pet") return null;
              return (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={project.id}
                  className="group relative block overflow-hidden rounded-2xl bg-slate-900 aspect-video shadow-2xl transition-all duration-300"
                >
                  <img
                    src={project.image}
                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </h3>
                  </div>
                  <div className="absolute top-3 left-3 flex gap-1">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 backdrop-blur-md border border-blue-500 rounded-full text-[10px] font-bold uppercase tracking-wider text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              );
            })}

            {[1, 2].map((i) => (
              <div
                key={`skeleton-${i}`}
                className="relative overflow-hidden rounded-2xl bg-slate-900/50 border-2 border-slate-700 aspect-video flex items-center justify-center group"
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-slate-800/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />

                <div className="flex flex-col items-center gap-3 text-slate-700 transition-colors">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">
                    {t("home_page.portfolio_section.waiting")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
