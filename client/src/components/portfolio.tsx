import { useEffect, useRef } from "react";

export function Portfolio() {
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

  const portfolioItems = [
    {
      title: "Legal Document Translation",
      category: "Legal",
      description: "Contract translations for international business agreements",
      languages: "Multiple Languages",
      highlight: "50+ legal documents translated with 100% accuracy",
      icon: "fas fa-gavel"
    },
    {
      title: "Medical Research Papers",
      category: "Medical",
      description: "Scientific research and medical documentation translation",
      languages: "Multiple Languages",
      highlight: "Published research papers for medical journals",
      icon: "fas fa-heartbeat"
    },
    {
      title: "Business Presentations",
      category: "Business",
      description: "Corporate presentations and marketing materials",
      languages: "Multiple Languages",
      highlight: "International trade presentations for Fortune 500 companies",
      icon: "fas fa-chart-line"
    },
    {
      title: "Technical Manuals",
      category: "Technical",
      description: "Software documentation and user manuals",
      languages: "Multiple Languages",
      highlight: "Complex technical documentation for software companies",
      icon: "fas fa-cogs"
    },
    {
      title: "Website Localization",
      category: "Web",
      description: "Complete website translation and localization",
      languages: "Multiple Languages",
      highlight: "E-commerce platforms with cultural adaptation",
      icon: "fas fa-globe"
    },
    {
      title: "Educational Content",
      category: "Education",
      description: "Academic papers and educational materials",
      languages: "Multiple Languages",
      highlight: "University curriculum and online course content",
      icon: "fas fa-graduation-cap"
    }
  ];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-12 lg:py-16 section-reveal bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Portfolio Highlights
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Showcasing successful translation projects across diverse industries and language pairs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioItems.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg flex items-center justify-center mr-4">
                    <i className={`${item.icon} text-xl text-emerald-600 dark:text-emerald-400`}></i>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                  {item.description}
                </p>
                
                <div className="mb-3">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Languages:</span>
                  <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    {item.languages}
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-emerald-500">
                  <p className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                    {item.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}