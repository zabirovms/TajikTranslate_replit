export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Footer Content */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-emerald-500 mb-2">
              TajikTranslators
            </h3>
            <p className="text-gray-400 mb-6">
              Professional translation services bridging languages and cultures
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="text-center">
              <i className="fas fa-envelope text-emerald-500 text-xl mb-2"></i>
              <p className="text-gray-300">
                <a href="mailto:zabirovms@gmail.com" className="hover:text-emerald-400 transition-colors">
                  zabirovms@gmail.com
                </a>
              </p>
            </div>
            <div className="text-center">
              <i className="fas fa-phone text-emerald-500 text-xl mb-2"></i>
              <p className="text-gray-300">
                <a href="tel:+992988894346" className="hover:text-emerald-400 transition-colors">
                  +992 98 889 4346
                </a>
              </p>
            </div>
            <div className="text-center">
              <i className="fas fa-map-marker-alt text-emerald-500 text-xl mb-2"></i>
              <p className="text-gray-300">Dushanbe, Tajikistan</p>
            </div>
          </div>

          {/* Professional Profiles */}
          <div className="mb-6">
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.proz.com/profile/3974887"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
                title="ProZ Profile"
              >
                <i className="fas fa-globe text-xl"></i>
              </a>
              <a
                href="https://www.upwork.com/freelancers/muhammadsharf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
                title="Upwork Profile"
              >
                <i className="fab fa-upwork text-xl"></i>
              </a>
              <a
                href="https://www.fiverr.com/muhammadsharif_z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
                title="Fiverr Profile"
              >
                <i className="fas fa-star text-xl"></i>
              </a>
              <a
                href="https://wa.me/992988894346"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
                title="WhatsApp"
              >
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-500">
              © 2025 Muhammadsharif Zabirov. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
