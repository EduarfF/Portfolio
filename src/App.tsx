import "./i18n";
import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import Footer from "./Footer";
import IntroSection from "./pages/Home/IntroSection/IntroSection";
import StackSection from "./pages/Home/StackSection/StackSection";
import AboutSection from "./pages/Home/AboutSection/AboutSection";
import ExperienceSection from "./pages/Home/ExperienceSection/ExperienceSection";
import CustomCursor from "./CustomCursor";
import PortfolioSection from "./pages/Home/PortfolioSection/PortfolioSection";

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <Header />
        <main className="pt-25 md:pt-25 pb-5">
          <IntroSection id="home" />
          <AboutSection id="about" />
          <ExperienceSection id="experience" />
          <StackSection id="stack" />
          <PortfolioSection id="portfolio" />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;