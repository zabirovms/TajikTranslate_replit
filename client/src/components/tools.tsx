import { useEffect, useRef } from "react";
import { EmblaCarousel } from "./ui/embla-carousel";

export function Tools() {
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

  const tools = [
    {
      category: "CAT Tools",
      icon: "fas fa-language",
      items: [
        "SDL Trados Studio",
        "MemoQ",
        "Wordfast",
        "OmegaT",
        "SmartCAT"
      ]
    },
    {
      category: "Quality Assurance",
      icon: "fas fa-shield-check",
      items: [
        "Xbench QA",
        "QA Distiller",
        "ApSIC Xbench",
        "ErrorSpy",
        "Manual proofreading"
      ]
    },
    {
      category: "Subtitling & Audio",
      icon: "fas fa-video",
      items: [
        "Subtitle Workshop",
        "Aegisub",
        "Rev.com",
        "Audacity",
        "Express Scribe"
      ]
    },
    {
      category: "Document Processing",
      icon: "fas fa-file-alt",
      items: [
        "Microsoft Office Suite",
        "Adobe Acrobat Pro",
        "Google Workspace",
        "LibreOffice",
        "PDF converters"
      ]
    }
  ];

  return (
    <section
      id="tools"
      ref={sectionRef}
      className="py-12 lg:py-16 section-reveal bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Professional Tools
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Industry-standard software and tools to ensure accuracy, consistency, and efficiency
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {tools.map((toolCategory, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${toolCategory.icon} text-2xl text-emerald-600 dark:text-emerald-400`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {toolCategory.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {toolCategory.items.map((tool, toolIndex) => (
                    <li 
                      key={toolIndex}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile & Tablet Carousel */}
          <div className="lg:hidden">
            <EmblaCarousel autoplayDelay={4000} options={{ loop: true }}>
              {tools.map((toolCategory, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className={`${toolCategory.icon} text-2xl text-emerald-600 dark:text-emerald-400`}></i>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {toolCategory.category}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {toolCategory.items.map((tool, toolIndex) => (
                        <li 
                          key={toolIndex}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </EmblaCarousel>
          </div>

          <div className="mt-12 text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Always Learning & Adapting
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I continuously update my toolkit with the latest translation technology and industry best practices 
              to deliver the highest quality results for every project. Custom tool recommendations available 
              based on your specific project requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}