const profileImage = "/attached_assets/454545_1754179362328.JPG";

export function Hero() {
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
      id="hero"
      className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            Professional Tajik
            <span className="block text-emerald-300">Translation Services</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-2 text-white/90">
            by <a 
              href="https://www.upwork.com/freelancers/muhammadsharf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-300 hover:text-emerald-200 underline-offset-4 hover:underline transition-all duration-300"
            >
              Muhammadsharif Zabirov
            </a>
          </p>

          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-white/80 mb-8 leading-relaxed">
            "Bridging languages and borders with precision and cultural insight"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Get in Touch
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
            >
              View Services
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white/60 text-2xl"></i>
      </div>
    </section>
  );
}
