import "./i18n";
import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToAnchor from "./ScrollToAnchor";
import ProjectWordBreaker from "./pages/Projects/ProjectWordBreaker";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToAnchor />
        <CustomCursor />
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
          <Header />
          <main className="grow pt-25 md:pt-25 pb-5">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects/wordbreaker" element={<ProjectWordBreaker />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
