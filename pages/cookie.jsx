import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-blue-50 min-h-screen border-none outline-none">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Terms and Conditions
          </h1>
          
        </header>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By using our website, you confirm that you are at least 18 years of age or have the consent of a legal guardian. You agree to comply with these Terms and any applicable laws, regulations, or policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-3">2. Collection and Use of Information</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We collect and use your personal information as outlined in our Privacy Policy, which is incorporated into these Terms by reference. Specifically, we may collect:
            </p>
            <ul className="list-none space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">•</span>
                <span className="text-gray-700">Your name and contact information</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">•</span>
                <span className="text-gray-700">Demographic information</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">•</span>
                <span className="text-gray-700">Other information relevant to customer surveys and/or offers</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4 leading-relaxed">
              We use this information for:
            </p>
            <ul className="list-none space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">•</span>
                <span className="text-gray-700">Internal record keeping</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">•</span>
                <span className="text-gray-700">Improving our products and services</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">•</span>
                <span className="text-gray-700">
                  Sending promotional emails about new products, special offers, or other information which we think you may find interesting
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">•</span>
                <span className="text-gray-700">
                  From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, or mail. We may use the information to customize the website according to your interests.
                </span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4 leading-relaxed">
              You may opt out of direct marketing or request access to or correction of your personal information by contacting us at{' '}
              <a href="mailto:cybersecurity@genesesolution.com" className="text-blue-600 hover:underline">cybersecurity@genesesolution.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-3">3. Cookie Policy</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our website uses cookies and similar technologies to enhance your browsing experience, analyze website performance, and deliver personalized content. By continuing to use our website, you consent to our use of cookies as outlined in this policy and our Privacy Policy.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">What Are Cookies?</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Cookies are small text files stored on your device when you visit a website. They help us remember your preferences, analyze how you interact with our site, and provide tailored content. Cookies do not access your device or collect personal information beyond what you voluntarily provide.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Types of Cookies We Use</h3>
            <ul className="list-none space-y-3 mb-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>Essential Cookies:</strong> These are necessary for the website to function properly, such as enabling navigation and access to secure areas.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>Analytical Cookies:</strong> These help us understand how visitors use our website, allowing us to improve performance and content.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>Marketing Cookies:</strong> These are used to deliver relevant advertisements and track the effectiveness of our marketing campaigns.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>Preference Cookies:</strong> These store your settings, such as language or region, to provide a customized experience.
                </span>
              </li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Managing Cookies</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              You can control cookie settings through your browser or our cookie consent tool. You may disable non-essential cookies, but this may affect your experience on our website. For more information on managing cookies, please refer to your browser’s help section or contact us at{' '}
              <a href="mailto:cybersecurity@genesesolution.com" className="text-blue-600 hover:underline">cybersecurity@genesesolution.com</a>.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Third-Party Cookies</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Some cookies may be set by third-party services, such as analytics or advertising partners. These third parties have their own privacy policies, and we encourage you to review them. We do not control these cookies but ensure our partners comply with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-3">4. Links to Third-Party Websites</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or security of these websites. We encourage you to review the terms and privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-3">5. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on our website, including text, graphics, logos, and software, is the property of Genese Solution or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-3">6. User Conduct</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              You agree not to:
            </p>
            <ul className="list-none space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">•</span>
                <span className="text-gray-700">Use our website for any unlawful or prohibited purpose.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">•</span>
                <span className="text-gray-700">Attempt to gain unauthorized access to our systems or networks.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">•</span>
                <span className="text-gray-700">Interfere with the proper functioning of our website.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">•</span>
                <span className="text-gray-700">Upload or transmit any harmful code, viruses, or malware.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-3">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by law, Genese Solution shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our website or services. We do not guarantee that our website will be error-free, secure, or uninterrupted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-3">8. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless Genese Solution, its affiliates, and their respective officers, directors, and employees from any claims, damages, or liabilities arising from your use of our website or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-3">9. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to terminate or suspend your access to our website at our sole discretion, without notice, for any conduct that we believe violates these Terms or is harmful to other users or our business interests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-3">10. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of England. Any disputes arising under these Terms shall be resolved in the courts located in London, England.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-3">11. Changes to These Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these Terms from time to time. Any changes will be posted on this page with an updated "Last Updated" date. Your continued use of our website after such changes constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-3">12. Contact Us</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you have any questions or concerns about these Terms, please contact us at:
            </p>
            <p className="text-gray-700 leading-relaxed">
              Genese Solution<br />
              53 Sheen Lane, London, England, SW14 8AB<br />
             
            </p>
          </section>
        </div>

        <footer className="text-center text-gray-600 text-sm mt-8">
          <p>Last Updated: June 23, 2025</p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default TermsAndConditions;