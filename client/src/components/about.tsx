import { useEffect, useRef } from "react";
const profileImage = "/attached_assets/454545_1754179362328.JPG";

export function About() {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12 lg:py-16 section-reveal bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              {/* Profile Image - Now in About section */}
              <div className="flex justify-center lg:hidden mb-8">
                <img
                  src={profileImage}
                  alt="Muhammadsharif Zabirov"
                  className="w-40 h-40 rounded-full shadow-2xl border-4 border-primary/20 object-cover"
                />
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p className="text-lg sm:text-xl leading-relaxed mb-6">
                  I am a professional freelance translator working across multiple platforms since 2020, with extensive
                  experience in{" "}
                  <strong className="text-emerald-600 dark:text-emerald-400">
                    English, Tajik, Russian, and Persian (Farsi)
                  </strong>
                  . My expertise spans various fields including legal, business,
                  technical, and general translation.
                </p>
                <p className="text-lg sm:text-xl leading-relaxed mb-8">
                  Based in Tajikistan, I offer not just linguistic services but
                  also deep regional knowledge that helps international clients
                  navigate the local business and cultural landscape.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                    5+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                    4
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Languages
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                    200+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                    99%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-500 rounded-full transform rotate-6 w-80 h-80 mx-auto"></div>
                <img
                  src={profileImage}
                  alt="Muhammadsharif Zabirov"
                  className="relative rounded-full shadow-2xl w-80 h-80 mx-auto object-cover border-4 border-white dark:border-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
