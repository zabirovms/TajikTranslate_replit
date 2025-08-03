import { useEffect, useRef } from "react";

export function Testimonials() {
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

  const testimonials = [
    {
      text: "Muhammadsharif's translations are consistently accurate and culturally appropriate. His work has been invaluable for our international projects.",
      name: "International NGO Director",
      initials: "ID",
      color: "primary",
    },
    {
      text: "His attention to detail and knowledge of legal terminology is exceptional. We trust him with our most sensitive documents.",
      name: "Law Firm Partner",
      initials: "LP",
      color: "emerald",
    },
    {
      text: "His work helped our film resonate authentically with Tajik audiences. The subtitles captured both meaning and cultural nuance perfectly.",
      name: "Documentary Filmmaker",
      initials: "DF",
      color: "purple",
    },
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-white dark:bg-gray-800 section-reveal"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            What my clients say about working with me
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 bg-${testimonial.color}-500 rounded-full flex items-center justify-center text-white font-bold mr-3`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
