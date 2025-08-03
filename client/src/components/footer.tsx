export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Get in Touch Section */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Get in Touch</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <i className="fas fa-envelope text-3xl mb-4 text-emerald-200"></i>
                  <a
                    href="mailto:zabirovms@gmail.com"
                    className="hover:underline text-white text-lg font-medium"
                  >
                    zabirovms@gmail.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fas fa-phone text-3xl mb-4 text-emerald-200"></i>
                  <a href="tel:+992988894346" className="hover:underline text-white text-lg font-medium">
                    +992 98 889 4346
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fas fa-map-marker-alt text-3xl mb-4 text-emerald-200"></i>
                  <span className="text-white text-lg font-medium">Dushanbe, Tajikistan</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-semibold mb-6 text-center text-white text-lg">Professional Profiles</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <a
                    href="https://www.proz.com/profile/3974887"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors"
                  >
                    <i className="fas fa-globe mr-2"></i>
                    <span>ProZ</span>
                  </a>
                  <a
                    href="https://www.upwork.com/freelancers/muhammadsharf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors"
                  >
                    <i className="fab fa-upwork mr-2"></i>
                    <span>Upwork</span>
                  </a>
                  <a
                    href="https://www.fiverr.com/muhammadsharif_z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors"
                  >
                    <i className="fas fa-star mr-2"></i>
                    <span>Fiverr</span>
                  </a>
                  <a
                    href="https://wa.me/992988894346"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors"
                  >
                    <i className="fab fa-whatsapp mr-2"></i>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center border-t border-gray-800 pt-8">
            <div className="mb-6">
              <a href="#" className="text-2xl font-bold text-emerald-500">
                TajikTranslators
              </a>
            </div>
            <p className="text-gray-400 mb-4">
              Professional translation services bridging languages and cultures
            </p>
            <p className="text-sm text-gray-500">
              © 2025 Muhammadsharif Zabirov. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
