import { useEffect, useRef } from "react";

export function Rates() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="rates"
      ref={sectionRef}
      className="py-12 lg:py-16 section-reveal bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Translation Rates
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional translation services with competitive rates and fast turnaround times
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border-l-4 border-emerald-500">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Standard Translation
              </h3>
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                $0.08 - $0.12 <span className="text-sm font-normal text-gray-600 dark:text-gray-400">per word</span>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <i className="fas fa-check text-emerald-500 mr-2"></i>
                  General documents
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-emerald-500 mr-2"></i>
                  Business correspondence
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-emerald-500 mr-2"></i>
                  24-48 hour delivery
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border-l-4 border-emerald-600">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Specialized Translation
              </h3>
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                $0.12 - $0.20 <span className="text-sm font-normal text-gray-600 dark:text-gray-400">per word</span>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <i className="fas fa-check text-emerald-500 mr-2"></i>
                  Legal & technical documents
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-emerald-500 mr-2"></i>
                  Medical & scientific texts
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-emerald-500 mr-2"></i>
                  Certified translations
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Need a Custom Quote?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Every project is unique. Contact me for a personalized quote based on your specific requirements, 
              timeline, and document complexity.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}