export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 text-sm">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left Side: Branding & Copyright */}
        <div className="text-center md:text-left">
          <p className="text-white font-semibold text-base mb-1">TajikTranslators - Freelance Translation</p>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Muhammadsharif Zabirov</p>
        </div>

        {/* Middle: Contact Info */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0">
          <a href="mailto:zabirovms@gmail.com" className="hover:text-white transition-colors">
            zabirovms@gmail.com
          </a>
          <a href="tel:+992988894346" className="hover:text-white transition-colors">
            +992 98 889 4346
          </a>
          <span>Dushanbe, Tajikistan</span>
        </div>

        {/* Right: Profiles / Social */}
        <div className="flex space-x-4">
          <a href="https://www.proz.com/profile/3974887" title="ProZ" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <i className="fas fa-globe"></i>
          </a>
          <a href="https://www.upwork.com/freelancers/muhammadsharf" title="Upwork" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <i className="fab fa-upwork"></i>
          </a>
          <a href="https://www.fiverr.com/muhammadsharif_z" title="Fiverr" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <i className="fas fa-star"></i>
          </a>
          <a href="https://wa.me/992988894346" title="WhatsApp" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
