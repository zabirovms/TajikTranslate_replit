import { useEffect, useRef, useState } from "react";

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Muhammad Z truly exceeded expectations with his impressive attention to detail and adaptability to our brief. His language fluency and commitment to going above and beyond made working with him a pleasure, and he delivered everything on time. An EXEMPLARY translator experience!",
      name: "Hani Bushra",
      platform: "Fiverr",
      url: "https://www.fiverr.com/muhammadsharif_z",
      initials: "HB",
      color: "emerald",
    },
    {
      text: "I was truly impressed with his work. He demonstrated exceptional attention to detail, responsiveness, and expertise throughout the project... I highly recommend him and look forward to working with him again.",
      name: "Rolf Hjelpdahl",
      platform: "Upwork",
      url: "https://www.upwork.com/freelancers/muhammadsharf",
      initials: "RH",
      color: "green",
    },
    {
      text: "Fast delivery. Very reliable and he is an expert in the Tajik language. I recommend buying your Tajik language gigs from him.",
      name: "Dave Straub",
      platform: "Fiverr",
      url: "https://www.fiverr.com/muhammadsharif_z",
      initials: "DS",
      color: "blue",
    },
    {
      text: "Muhammadsharif is an exceptional translator. Not only he delivered me translation in a really timely manner, translation was done professionally and all complex terms were correctly translated. True A+ Russian translator.",
      name: "Yurii Shynkarenko",
      platform: "Upwork",
      url: "https://www.upwork.com/freelancers/muhammadsharf",
      initials: "YS",
      color: "purple",
    },
    {
      text: "Muhammad Sharif understood the task and delivered the project before the deadline. He is talented and hardworking. There are few freelancers who you are lucky to work with and Muhammad is one of them.",
      name: "Layla Kay",
      platform: "Upwork",
      url: "https://www.upwork.com/freelancers/muhammadsharf",
      initials: "LK",
      color: "indigo",
    },
  ];

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
    }, 6000); // Auto-slide every 6 seconds

    return () => clearInterval(autoSlide);
  }, [testimonials.length]);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

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
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-lg text-center min-h-[320px] flex flex-col justify-center transition-all duration-500 ease-in-out transform">
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
                  <a 
                    href={testimonials[currentIndex].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-900 dark:text-white text-lg hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors underline-offset-4 hover:underline"
                  >
                    {testimonials[currentIndex].name}
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110 z-10"
            >
              <i className="fas fa-chevron-left text-gray-600 dark:text-gray-300"></i>
            </button>
            <button
              onClick={() => goToSlide((currentIndex + 1) % testimonials.length)}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110 z-10"
            >
              <i className="fas fa-chevron-right text-gray-600 dark:text-gray-300"></i>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  index === currentIndex
                    ? "bg-emerald-500 w-4"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-emerald-400 dark:hover:bg-emerald-500"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
