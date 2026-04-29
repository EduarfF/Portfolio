import IntroSection from "../../components/HomeSections/IntroSection/IntroSection";
import StackSection from "../../components/HomeSections/StackSection/StackSection";
import AboutSection from "../../components/HomeSections/AboutSection/AboutSection";
import ExperienceSection from "../../components/HomeSections/ExperienceSection/ExperienceSection";
import PortfolioSection from "../../components/HomeSections/PortfolioSection/PortfolioSection";

const HomePage = () => {
  return (
    <>
      <IntroSection id="home" />
      <AboutSection id="about" />
      <ExperienceSection id="experience" />
      <StackSection id="stack" />
      <PortfolioSection id="portfolio" />
    </>
  );
};

export default HomePage;
