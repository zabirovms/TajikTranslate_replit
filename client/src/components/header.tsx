import { useState } from "react";
import { useTheme } from "./theme-provider";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-40 glass-effect transition-all duration-300">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              TajikTranslate
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {theme === "light" ? (
                <i className="fas fa-moon"></i>
              ) : (
                <i className="fas fa-sun"></i>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 rounded-lg mt-2 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-center px-3 py-2 rounded-md bg-emerald-500 text-white font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
