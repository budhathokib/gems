import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-100 py-20 px-6 md:px-24 lg:px-32 text-gray-900">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold mb-6 text-gray-900 tracking-tight animate-fade-in">
          About Us
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          At <span className="text-indigo-700 font-semibold">Genese Solution</span>, we believe cybersecurity should be seamless, accessible, and empowering for every business, no matter the size.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Who We Are Card */}
        <div className="bg-white rounded-3xl shadow-xl p-10 transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300">
          <h3 className="text-2xl font-semibold mb-6 flex items-center text-gray-900">
            <span className="mr-3 text-3xl">🌍</span> Who We Are
          </h3>
          <p className="mb-5 text-gray-600 leading-relaxed">
            🏢 Headquartered in the UK, we protect clients across <span className="text-indigo-700 font-medium">10 countries</span>. We’re not just a cybersecurity firm — we’re your trusted partner in digital defense.
          </p>
          <p className="mb-5 text-gray-600 leading-relaxed">
            🔐 Our mission is to deliver <span className="font-semibold text-indigo-700">robust, simple, and scalable security</span> that fits your needs.
          </p>
          <p className="text-gray-600 leading-relaxed">
            🚀 Driven by innovation, we empower small businesses to thrive securely and confidently.
          </p>
        </div>

        {/* GEMS Card */}
        <div className="bg-white rounded-3xl shadow-xl p-10 transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            💎 Introducing <span className="text-indigo-700">GEMS</span>
          </h3>
          <p className="mb-5 text-gray-600 leading-relaxed">
            Forget complex, overpriced solutions. <span className="font-semibold text-indigo-700">GEMS</span> is our sleek, powerful, and cost-effective cybersecurity platform — designed for small teams with big ambitions.
          </p>
          <p className="mb-5 text-gray-600 leading-relaxed">
            🛡️ Quick to deploy. Budget-friendly. Uncompromising on protection.
          </p>
          <p className="mb-8 text-gray-600 leading-relaxed">
            Focus on leading your business — we’ll handle the security.
          </p>
          
        </div>
      </div>
    </section>
  );
}