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
      },
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              🧾 Service Rate Card
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Transparent pricing for professional translation and language services
            </p>
          </div>

          {/* Services Table */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-emerald-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Service</th>
                    <th className="px-6 py-4 text-left font-semibold">Rate</th>
                    <th className="px-6 py-4 text-left font-semibold">Unit</th>
                    <th className="px-6 py-4 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Translation</td>
                    <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-semibold">$0.04 – $0.08</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">per word</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">Any language pair within my scope</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Localization</td>
                    <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-semibold">$20 – $35</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">per hour</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">App, website, UI, culturally adapted</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Subtitling</td>
                    <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-semibold">$3.00 – $6.00</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">per video minute</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">Includes timecoding and QA</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Transcription</td>
                    <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-semibold">$0.10 – $1.00</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">per audio minute</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">Clean or full verbatim</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Proofreading</td>
                    <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-semibold">$0.03 – $0.05</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">per word</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">Language, tone, and grammar check</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Due Diligence</td>
                    <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-semibold">$30 – $100</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">per report</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">Local business & individual background checks</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Background Screening</td>
                    <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-semibold">$30 – $80</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">per case</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">Includes address & employment verification</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Notes Section */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <span className="mr-2">💡</span>
              Important Notes
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <i className="fas fa-dollar-sign text-emerald-500 mr-2 mt-1"></i>
                    <span><strong>Minimum order:</strong> $10</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-clock text-orange-500 mr-2 mt-1"></i>
                    <span><strong>Rush delivery:</strong> +20% fee</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-percentage text-blue-500 mr-2 mt-1"></i>
                    <span><strong>Bulk discount:</strong> Available for large or long-term projects</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Payments accepted:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <i className="fas fa-check text-emerald-500 mr-2"></i>
                    Payoneer
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <i className="fas fa-check text-emerald-500 mr-2"></i>
                    ProzPay
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <i className="fas fa-check text-emerald-500 mr-2"></i>
                    Upwork
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <i className="fas fa-check text-emerald-500 mr-2"></i>
                    Fiverr
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300 col-span-2">
                    <i className="fas fa-check text-emerald-500 mr-2"></i>
                    Direct bank transfer
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Contact me for a detailed quote based on your specific project requirements
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
