import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-10 text-center">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Cookie Policy</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Understand how Genese Solution uses cookies to enhance your experience.
          </p>
        </header>

        <div className="space-y-10">
          <section className="p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Cookies are small text files stored on your device when you visit the Genese Solution website. They help us remember your preferences, analyze how you interact with our site, and deliver tailored cybersecurity content, without accessing personal data beyond what you share.
            </p>
          </section>

          <section className="p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">2. Why Do We Use Cookies?</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              At Genese Solution, we use cookies to enhance your browsing experience. They allow us to:
            </p>
            <ul className="list-none space-y-3 text-left mx-auto max-w-2xl">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span className="text-gray-700">Optimize site performance and navigation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span className="text-gray-700">Analyze traffic to improve our cybersecurity services</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span className="text-gray-700">Deliver personalized content and offers</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              Your continued use of our site signifies consent to this practice, as outlined in our Privacy Policy.
            </p>
          </section>

          <section className="p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. What Types of Cookies Do We Use?</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              We employ different cookies to serve various purposes:
            </p>
            <ul className="list-none space-y-3 text-left mx-auto max-w-2xl">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span className="text-gray-700"><strong>Essential Cookies:</strong> Necessary for basic site functionality, like secure access to our tools.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span className="text-gray-700"><strong>Analytical Cookies:</strong> Help us understand user behavior to enhance our services.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span className="text-gray-700"><strong>Marketing Cookies:</strong> Enable targeted ads and measure campaign effectiveness.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span className="text-gray-700"><strong>Preference Cookies:</strong> Store your settings, like language, for a customized experience.</span>
              </li>
            </ul>
          </section>

          <section className="p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">4. How Can I Manage Cookies?</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              You can control cookies via your browser settings or our cookie consent tool. Disabling non-essential cookies might affect your experience. For more details, check your browser’s help section or contact us at <a href="mailto: sales@genesesolution.com" className="text-blue-600 hover:underline"> sales@genesesolution.com</a>.
            </p>
          </section>

          <section className="p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">5. What About Third-Party Cookies?</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Some cookies may come from third-party services, like analytics or ad partners. These parties have their own policies, which we encourage you to review. We ensure compliance with data protection laws but don’t control these cookies.
            </p>
          </section>

          <section className="p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">6. How Can I Contact You About Cookies?</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              For questions or concerns about our cookie usage, reach out to:
            </p>
            <p className="text-gray-700 text-lg">
              Genese Solution<br />53 Sheen Lane, London, England, SW14 8AB<br />
              Email: <a href="mailto: sales@genesesolution.com" className="text-blue-600 hover:underline"> sales@genesesolution.com</a>
            </p>
          </section>
        </div>

        <footer className="mt-12 text-gray-600 text-lg">
          <p>Last Updated: June 24, 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default CookiePolicy;