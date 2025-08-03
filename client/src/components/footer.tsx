export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <a href="#" className="text-2xl font-bold text-primary">
              TajikTranslate
            </a>
          </div>
          <p className="text-gray-400 mb-4">
            Professional translation services bridging languages and cultures
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="mailto:zabirovms@gmail.com"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a
              href="https://wa.me/992988894346"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
            <a
              href="https://www.proz.com/profile/3974887"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <i className="fas fa-globe text-xl"></i>
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 Muhammadsharif Zabirov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
