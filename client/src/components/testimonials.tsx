import { useEffect, useRef, useState } from "react";

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Auto-slide effect for testimonials
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(autoSlide);
  }, []);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

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
      className="py-12 lg:py-16 bg-white dark:bg-gray-800 section-reveal"
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

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Current Testimonial */}
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-lg text-center min-h-[300px] flex flex-col justify-center">
              <div className="flex justify-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-xl"></i>
                  ))}
                </div>
              </div>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center justify-center">
                <div
                  className={`w-12 h-12 bg-${testimonials[currentIndex].color}-500 rounded-full flex items-center justify-center text-white font-bold mr-4`}
                >
                  {testimonials[currentIndex].initials}
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <i className="fas fa-chevron-left text-gray-600 dark:text-gray-300"></i>
            </button>
            <button
              onClick={() => goToSlide((currentIndex + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <i className="fas fa-chevron-right text-gray-600 dark:text-gray-300"></i>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-primary"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
