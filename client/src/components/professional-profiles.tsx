import { useEffect, useRef } from "react";

export function ProfessionalProfiles() {
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

  const profiles = [
    {
      name: "Upwork",
      description: "Top Rated Plus freelancer with 100% job success score",
      url: "https://www.upwork.com/freelancers/muhammadsharf",
      icon: "fab fa-upwork",
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      stats: "100% Job Success • Top Rated Plus"
    },
    {
      name: "ProZ",
      description: "Certified professional translator with verified credentials",
      url: "https://www.proz.com/profile/1234567",
      icon: "fas fa-certificate",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      stats: "Certified Translator • 5 Star Rating"
    },
    {
      name: "LinkedIn",
      description: "Professional network and business connections",
      url: "https://www.linkedin.com/in/muhammadsharif-zabirov",
      icon: "fab fa-linkedin",
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      stats: "500+ Connections • Translation Expert"
    },
    {
      name: "Fiverr",
      description: "Level 2 seller offering premium translation services",
      url: "https://www.fiverr.com/muhammadsharif_z",
      icon: "fas fa-star",
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      stats: "Level 2 Seller • 500+ Reviews"
    }
  ];

  return (
    <section
      id="profiles"
      ref={sectionRef}
      className="py-12 lg:py-16 section-reveal bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Professional Profiles
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Established presence across major freelancing and professional platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${profile.bgColor} p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 block`}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 ${profile.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gray-200 dark:border-gray-600`}>
                    <i className={`${profile.icon} text-2xl ${profile.color}`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {profile.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {profile.description}
                  </p>
                  <div className={`text-xs font-semibold ${profile.color} bg-white dark:bg-gray-800 px-3 py-1 rounded-full`}>
                    {profile.stats}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Verified & Trusted Professional
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
              My professional reputation is built on years of consistent, high-quality work across multiple platforms. 
              Click any profile above to view detailed reviews, portfolio samples, and client testimonials.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full">
                ✓ Identity Verified
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                ✓ Payment Verified
              </span>
              <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">
                ✓ Skills Tested
              </span>
              <span className="bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full">
                ✓ Background Checked
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}