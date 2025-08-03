import { useEffect, useRef } from "react";

export function Experience() {
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

  const experiences = [
    {
      title: "Freelance Translator & Consultant",
      period: "2015 - Present",
      color: "primary",
      items: [
        "Provided translation services for international organizations, businesses, and government entities",
        "Specialized in legal, business, and technical translations",
        "Established client base across multiple industries",
      ],
    },
    {
      title: "Language Specialist",
      period: "2010 - 2015",
      color: "emerald",
      items: [
        "Worked with translation agencies providing high-volume translation services",
        "Developed specialized terminology databases for technical translations",
        "Quality assurance and review processes",
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-16 lg:py-24 section-reveal bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A decade of expertise in professional translation and consulting
            services
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 dark:bg-gray-700 h-full"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-center">
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <p
                            className={`text-${exp.color}-600 dark:text-${exp.color}-400 font-medium mb-3`}
                          >
                            {exp.period}
                          </p>
                          <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                            {exp.items.map((item, itemIndex) => (
                              <li key={itemIndex}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div
                        className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${exp.color}-500 rounded-full border-4 border-white dark:border-gray-900`}
                      ></div>
                      <div className="w-1/2 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8"></div>
                      <div
                        className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${exp.color}-500 rounded-full border-4 border-white dark:border-gray-900`}
                      ></div>
                      <div className="w-1/2 pl-8">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <p
                            className={`text-${exp.color}-600 dark:text-${exp.color}-400 font-medium mb-3`}
                          >
                            {exp.period}
                          </p>
                          <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                            {exp.items.map((item, itemIndex) => (
                              <li key={itemIndex}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {exp.title}
              </h3>
              <p
                className={`text-${exp.color}-600 dark:text-${exp.color}-400 font-medium mb-4`}
              >
                {exp.period}
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                {exp.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <i
                      className={`fas fa-circle text-${exp.color}-500 text-xs mt-2 mr-3 flex-shrink-0`}
                    ></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
