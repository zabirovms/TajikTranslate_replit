import { useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xrblalqv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your inquiry. I'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          project: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const languages = [
    { code: "EN", name: "English", color: "primary" },
    { code: "TJ", name: "Tajik", color: "emerald" },
    { code: "RU", name: "Russian", color: "red" },
    { code: "FA", name: "Persian", color: "purple" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-12 lg:py-16 section-reveal bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to bridge language barriers and expand your reach? Get in
            touch for a consultation.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="translation">Translation Services</option>
                  <option value="subtitling">Subtitling & Media</option>
                  <option value="consulting">Business Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 text-white font-semibold py-3 rounded-lg transition-colors transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info - Moved to Footer */}
          <div className="space-y-8">

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Languages I Work With
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className={`w-8 h-8 bg-${lang.color}-100 dark:bg-${lang.color}-900 rounded-full flex items-center justify-center mr-3`}
                    >
                      <span
                        className={`text-${lang.color}-600 dark:text-${lang.color}-400 font-bold text-sm`}
                      >
                        {lang.code}
                      </span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {lang.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
