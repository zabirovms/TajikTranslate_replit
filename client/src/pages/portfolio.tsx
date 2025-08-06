import { useEffect, useRef } from "react";
import { Link } from "wouter";

const bookCover = "/attached_assets/book_cover_1754477772225.jpg";
const websiteScreenshot = "/attached_assets/website_screenshot_1754477927843.png";

interface Project {
  id: string;
  title: string;
  description: string;
  media: {
    images?: { src: string; alt: string; caption?: string }[];
    youtube?: string;
    links?: { url: string; title: string }[];
  };
  clientFeedback?: {
    name: string;
    comment: string;
  };
  tags: string[];
}

const projects: Project[] = [
  {
    id: "hercolubus",
    title: "Translation of \"Hercolubus or Red Planet\" – Book, Website, and YouTube Video",
    description: "I translated the full content of the metaphysical book Hercolubus or Red Planet from English into Tajik. This project also included translating their official website and a promotional YouTube video. The work involved precise literary translation, cultural adaptation, and localization.",
    media: {
      images: [
        { src: bookCover, alt: "Hercolubus book cover in Tajik", caption: "Book cover" },
        { src: websiteScreenshot, alt: "Screenshot of translated website", caption: "Website translation" }
      ],
      youtube: "uTsINc5jQYo",
      links: [
        { url: "https://hercolubus.tv/tg/", title: "Official Website (Tajik)" }
      ]
    },
    clientFeedback: {
      name: "Carles",
      comment: "Muhammad did a professional job and solved all questions. Great work!"
    },
    tags: ["Book Translation", "Website Localization", "Video Subtitling", "Literary Translation"]
  }
];

export function Portfolio() {
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

  const getYouTubeEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/">
              <button className="mb-6 inline-flex items-center text-emerald-200 hover:text-white transition-colors">
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Home
              </button>
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Translation Portfolio
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Showcasing professional translation projects across books, websites, videos, and digital content
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section ref={sectionRef} className="py-16 section-reveal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={project.id} className={`mb-16 ${index > 0 ? 'border-t border-gray-200 dark:border-gray-700 pt-16' : ''}`}>
                {/* Project Header */}
                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Media Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  {/* Images */}
                  {project.media.images && (
                    <div className="space-y-6">
                      {project.media.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-64 object-cover"
                          />
                          {image.caption && (
                            <div className="p-4">
                              <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                                <i className="fas fa-image mr-2 text-emerald-500"></i>
                                {image.caption}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* YouTube Video */}
                  {project.media.youtube && (
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                      <div className="aspect-video">
                        <iframe
                          src={getYouTubeEmbedUrl(project.media.youtube)}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                          <i className="fab fa-youtube mr-2 text-red-500"></i>
                          Promotional video translation
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Links and Feedback */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* External Links */}
                  {project.media.links && project.media.links.length > 0 && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                        <i className="fas fa-external-link-alt mr-2 text-blue-500"></i>
                        Project Links
                      </h4>
                      <div className="space-y-3">
                        {project.media.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-blue-200 dark:border-blue-800"
                          >
                            <span className="text-blue-600 dark:text-blue-400 font-medium">
                              {link.title}
                            </span>
                            <i className="fas fa-arrow-right ml-2 text-sm"></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Client Feedback */}
                  {project.clientFeedback && (
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                        <i className="fas fa-quote-left mr-2 text-emerald-500"></i>
                        Client Feedback
                      </h4>
                      <blockquote className="text-gray-700 dark:text-gray-300 italic mb-3">
                        "{project.clientFeedback.comment}"
                      </blockquote>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {project.clientFeedback.name.charAt(0)}
                          </span>
                        </div>
                        <div className="ml-3">
                          <p className="font-medium text-gray-900 dark:text-white">
                            {project.clientFeedback.name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-2xl p-8 mt-16">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Have a Translation Project?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                I'd love to help bring your content to new audiences through professional translation and localization services.
              </p>
              <Link href="/#contact">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg">
                  Start Your Project
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}