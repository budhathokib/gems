import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Learn about the terms governing your use of our website and services.
          </p>
        </header>

        <section className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-8 transition-all duration-500 hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            By using our website, you confirm that you are at least 18 years of age or have the consent of a legal guardian. You agree to comply with these Terms and any applicable laws, regulations, or policies.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-8 transition-all duration-500 hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">2. Collection and Use of Information</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We collect and use your personal information as outlined in our Privacy Policy, which is incorporated into these Terms by reference. Specifically, we may collect:
          </p>
          <ul className="list-none space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3">•</span>
              <span className="text-gray-700">Your name and contact information</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3">•</span>
              <span className="text-gray-700">Demographic information</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3">•</span>
              <span className="text-gray-700">Other information relevant to customer surveys and/or offers</span>
            </li>
          </ul>
          <p className="text-gray-700 mt-6 leading-relaxed">
            We use this information for:
          </p>
          <ul className="list-none space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3">•</span>
              <span className="text-gray-700">Internal record keeping</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3">•</span>
              <span className="text-gray-700">Improving our products and services</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3">•</span>
              <span className="text-gray-700">
                Sending promotional emails about new products, special offers, or other information which we think you may find interesting
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3">•</span>
              <span className="text-gray-700">
                From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, or mail. We may use the information to customize the website according to your interests.
              </span>
            </li>
          </ul>
          <p className="text-gray-700 mt-6 leading-relaxed">
            You may opt out of direct marketing or request access to or correction of your personal information by contacting us at{' '}
            <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a>.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-8 transition-all duration-500 hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">3. Cookies</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our website uses cookies to enhance your experience by analyzing web traffic and personalizing content. By using our website, you consent to the use of cookies as described in our Privacy Policy. Cookies do not provide us access to your computer or any personal information beyond what you choose to share.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-8 transition-all duration-500 hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">4. Links to Third-Party Websites</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or security of these websites. We encourage you to review the terms and privacy policies of any third-party sites you visit.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-8 transition-all duration-500 hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">5. Intellectual Property</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            All content on our website, including text, graphics, logos, and software, is the property of [Your Company Name] or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-8 transition-all duration-500 hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">6. User Conduct</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            You agree not to:
          </p>
          <ul className="list-none space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3">•</span>
              <span className="text-gray-700">Use our website for any unlawful or prohibited purpose.</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3">•</span>
              <span className="text-gray-700">Attempt to gain unauthorized access to our systems or networks.</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3">•</span>
              <span className="text-gray-700">Interfere with the proper functioning of our website.</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3">•</span>
              <span className="text-gray-700">Upload or transmit any harmful code, viruses, or malware.</span>
            </li>
          </ul>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-8 transition-all duration-500 hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">7. Limitation of Liability</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            To the fullest extent permitted by law, [Your Company Name] shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our website or services. We do not guarantee that our website will be error-free, secure, or uninterrupted.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-8 transition-all duration-500 hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">8. Indemnification</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            You agree to indemnify and hold harmless [Your Company Name], its affiliates, and their respective officers, directors, and employees from any claims, damages, or liabilities arising from your use of our website or violation of these Terms.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-8 transition-all duration-500 hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">9. Termination</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We reserve the right to terminate or suspend your access to our website at our sole discretion, without notice, for any conduct that we believe violates these Terms or is harmful to other users or our business interests.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-8 transition-all duration-500 hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">10. Governing Law</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of [Your State/Country]. Any disputes arising under these Terms shall be resolved in the courts located in [City, State/Country].
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-8 transition-all duration-500 hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">11. Changes to These Terms</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We may update these Terms from time to time. Any changes will be posted on this page with an updated "Last Updated" date. Your continued use of our website after such changes constitutes your acceptance of the revised Terms.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-8 transition-all duration-500 hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">12. Contact Us</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            If you have any questions or concerns about these Terms, please contact us at:
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Genese Solution<br />
            53 Sheen Lane, London, England, SW14 8AB<br />
           
          </p>
        </section>

        <footer className="text-center text-gray-600 text-sm">
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