import { useEffect, useRef } from "react";

export function SeoIntro() {
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
      id="seo-intro"
      ref={sectionRef}
      className="py-12 lg:py-16 bg-white dark:bg-gray-800 section-reveal"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Your Gateway to Flawless Tajik Communication
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 text-justify">
            <p className="text-lg sm:text-xl leading-relaxed mb-6">
              In today's globalized world, clear and accurate communication is paramount. Whether you are a business expanding into Central Asia, a law firm handling international cases, or a researcher studying the region, you need a reliable language partner. As a professional Tajik translator, I bridge the language gap between <strong className="text-emerald-600 dark:text-emerald-400">Tajik, English, Russian, and Persian (Farsi)</strong>, ensuring your message is not just translated, but also culturally adapted for your target audience.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed mb-6">
              My name is Muhammadsharif Zabirov, and I am a freelance translator from Tajikistan with over five years of experience. I provide a comprehensive suite of language services, including <strong className="text-emerald-600 dark:text-emerald-400">translation, localization, subtitling, transcription, and due diligence</strong>. My mission is to deliver high-quality, accurate, and timely services that help my clients achieve their goals.
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white text-center">
              Comprehensive Tajik Translation Services
            </h3>

            <p className="text-lg sm:text-xl leading-relaxed mb-6">
              I offer a wide range of translation services to meet your specific needs. My areas of expertise include:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>Legal Translation:</strong> I provide certified translations of legal documents, including contracts, court documents, and patents. I understand the importance of accuracy and confidentiality in legal matters.</li>
              <li><strong>Technical Translation:</strong> I have experience translating technical documents, such as user manuals, engineering specifications, and scientific articles. I am familiar with the technical terminology in various fields.</li>
              <li><strong>Business Translation:</strong> I can help you with all your business translation needs, from marketing materials and presentations to financial reports and business correspondence.</li>
              <li><strong>Medical Translation:</strong> I offer accurate and reliable medical translation services for a wide range of documents, including patient records, clinical trial documents, and medical device manuals.</li>
            </ul>

            <h3 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white text-center">
              Localization for the Tajik Market
            </h3>

            <p className="text-lg sm:text-xl leading-relaxed mb-6">
              Localization is more than just translation. It's about adapting your content to the cultural norms and preferences of your target audience. I can help you localize your website, software, and marketing materials for the Tajik market, ensuring that your message resonates with your customers.
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white text-center">
              Subtitling and Transcription Services
            </h3>

            <p className="text-lg sm:text-xl leading-relaxed mb-6">
              I also offer professional subtitling and transcription services. Whether you need subtitles for a film, a documentary, or a corporate video, I can provide accurate and synchronized subtitles in Tajik, English, Russian, and Persian. I also offer high-quality transcription services for audio and video recordings.
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white text-center">
              Due Diligence and Background Checks in Tajikistan
            </h3>

            <p className="text-lg sm:text-xl leading-relaxed mb-6">
              If you are doing business in Tajikistan, it is essential to have a reliable partner on the ground. I offer due diligence and background check services to help you make informed decisions. I can verify the credentials of potential business partners, conduct background checks on individuals, and provide you with detailed reports.
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white text-center">
              Why Choose Me?
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>Native Tajik Speaker:</strong> As a native Tajik speaker, I have a deep understanding of the language and culture.</li>
              <li><strong>Multilingual Expertise:</strong> I am fluent in English, Russian, and Persian (Farsi), which allows me to handle complex multilingual projects.</li>
              <li><strong>Professional and Reliable:</strong> I am committed to providing my clients with the highest quality services. I am always available to answer your questions and provide you with a free quote.</li>
              <li><strong>Competitive Rates:</strong> I offer competitive rates for all my services.</li>
            </ul>

            <p className="text-lg sm:text-xl leading-relaxed text-center">
              If you are looking for a professional and reliable Tajik translator, please <a href="#contact" className="text-primary hover:underline">contact me today</a>. I would be happy to discuss your project with you and provide you with a free quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
