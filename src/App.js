import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from './components/Skills';
import Experience from "./components/experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Default dark mode
  const [darkMode, setDarkMode] = useState(true);

  // Load saved preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('darkMode') === 'true';
    setDarkMode(saved);
  }, []);

  // Update localStorage and HTML class for Tailwind dark mode
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    // Root div without background; sections will handle their own backgrounds
    <div className={`App scroll-smooth min-h-screen relative bg-white dark:bg-gray-900`}>

      {/* Navbar with toggle */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main content */}
      <div className="pt-16 relative z-10">
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
