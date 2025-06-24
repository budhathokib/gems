import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Learn how we protect and use your information to provide a seamless experience.
          </p>
        </header>

        <section className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-8 transition-all duration-500 hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">Information We Collect</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We may collect the following information to enhance your experience:
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
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-8 transition-all duration-500 hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">How We Use the Information</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We use this information to understand your needs and provide you with a better service, including:
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
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-8 transition-all duration-500 hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">Security</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We are committed to ensuring that your information is secure. To prevent unauthorized access or disclosure, we have implemented robust physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-8 transition-all duration-500 hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">Cookies</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A cookie is a small file that asks permission to be placed on your computer's hard drive. Once you agree, the file is added, and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual, tailoring operations to your needs, likes, and dislikes by gathering and remembering information about your preferences.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Overall, cookies help us provide you with a better website by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-8 transition-all duration-500 hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">Links to Other Websites</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our website may contain links to other websites of interest. However, once you use these links to leave our site, we do not have any control over those websites. Therefore, we cannot be responsible for the protection and privacy of any information you provide while visiting such sites, and they are not governed by this privacy statement. Please exercise caution and review the privacy statement applicable to the website in question.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-8 transition-all duration-500 hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">Controlling Your Personal Information</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            You may choose to restrict the collection or use of your personal information in the following ways:
          </p>
          <ul className="list-none space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3">•</span>
              <span className="text-gray-700">
                If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at{' '}
                <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a>
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3">•</span>
              <span className="text-gray-700">
                We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3">•</span>
              <span className="text-gray-700">
                You may request details of personal information which we hold about you. If you would like a copy of the information held on you, please write to [Your Company Name, Address, City, State, Zip Code] or email{' '}
                <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a>
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3">•</span>
              <span className="text-gray-700">
                If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible at the above address. We will promptly correct any information found to be incorrect.
              </span>
            </li>
          </ul>
        </section>

        <footer className="text-center text-gray-600 text-sm">
          <p>This privacy policy is subject to change without notice.</p>
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

export default PrivacyPolicy;