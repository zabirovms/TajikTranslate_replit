import { useEffect, useRef } from "react";
import { EmblaCarousel } from "./ui/embla-carousel";

export function Services() {
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

  const services = [
    {
      icon: "fas fa-language",
      title: "Language & Content",
      color: "primary",
      items: [
        "Translation (EN, TJ, RU, FA)",
        "Localization for Tajik audiences",
        "Document translation & certification",
      ],
    },
    {
      icon: "fas fa-film",
      title: "Audiovisual & Media",
      color: "emerald",
      items: [
        "Time-coded subtitling",
        "Script translation",
        "Voice-over coordination",
      ],
    },
    {
      icon: "fas fa-search-dollar",
      title: "Business Intelligence",
      color: "purple",
      items: [
        "Local fact-checking & risk assessment",
        "Business & employment verification",
        "Market research & analysis",
      ],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-12 lg:py-16 bg-white dark:bg-gray-800 section-reveal"
    >
      <div className="container mx-auto px-3 sm:px-8 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            What I Offer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive language and consulting services tailored to your
            business needs
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Desktop Grid */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-lg"
            >
              <div
                className={`w-16 h-16 bg-${service.color}-100 dark:bg-${service.color}-900 rounded-2xl flex items-center justify-center mb-6`}
              >
                <i
                  className={`${service.icon} text-2xl text-${service.color}-600 dark:text-${service.color}-400`}
                ></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <i className="fas fa-check text-emerald-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-600 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile & Desktop Carousel */}
        <div className="lg:hidden">
          <EmblaCarousel autoplayDelay={4000} options={{ loop: true }}>
            {services.map((service, index) => (
              <div key={index} className="px-4">
                <div className="service-card bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl shadow-lg h-full">
                  <div
                    className={`w-14 h-14 bg-${service.color}-100 dark:bg-${service.color}-900 rounded-xl flex items-center justify-center mb-4`}
                  >
                    <i
                      className={`${service.icon} text-xl text-${service.color}-600 dark:text-${service.color}-400`}
                    ></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <i className="fas fa-check text-emerald-500 mt-0.5 mr-2 flex-shrink-0 text-xs"></i>
                        <span className="text-gray-600 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </EmblaCarousel>
        </div>
      </div>
    </section>
  );
}
