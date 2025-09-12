import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClasses =
    "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer";

  // Sync dark mode with <html> tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Samandeep
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#about" className={linkClasses}>
              About
            </a>
            <a href="#projects" className={linkClasses}>
              Projects
            </a>
            <a href="#contact" className={linkClasses}>
              Contact
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a
            href="#about"
            className={linkClasses}
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className={linkClasses}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={linkClasses}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

          {/* Dark Mode Toggle in Mobile Menu */}
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setIsOpen(false);
            }}
            className="w-full mt-2 px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
