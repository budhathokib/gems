import React from 'react';

function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-24 px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
        Cybersecurity Confidence <br className="hidden md:block" />
        for Small Businesses
      </h1>
      <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-gray-300">
  <span className="text-yellow-400 font-semibold drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]">GEMS</span> delivers simple, affordable, and effective cybersecurity without the complexity.
</p>

      
    </div>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md text-center transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "Priced for Small Business",
      description: "Affordable, predictable pricing with clear ROI for small businesses.",
      icon: "💸"
    },
    {
      title: "Security Without Complexity",
      description: "No jargon or complex configurations—just straightforward protection.",
      icon: "🔒"
    },
    {
      title: "Compliance-Ready",
      description: "Built-in support for GDPR, Cyber Essentials, and insurance standards.",
      icon: "✅"
    },
    {
      title: "Human Support Matters",
      description: "Talk to real experts whenever you need assistance.",
      icon: "🤝"
    },
    {
      title: "Actionable Insight",
      description: "Clear, concise reporting tailored for business owners.",
      icon: "📊"
    },
    {
      title: "Quick Start",
      description: "Onboarding and protection up and running in days.",
      icon: "🚀"
    },
    {
      title: "Customer Peace of Mind",
      description: "Confidence through comprehensive protection, not just software.",
      icon: "😊"
    },
    {
      title: "Scalable Protection",
      description: "GEMS grows with your business, adapting to new threats and needs without breaking the bank.",
      icon: "📈"
    },
    {
      title: "Proactive Threat Monitoring",
      description: "Continuous surveillance to detect and neutralize risks before they impact your operations.",
      icon: "🛡️"
    }
  ];

  return (
   <div id="features" className="py-20 px-6 bg-gray-100">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
    {features.map((feature, index) => (
      <FeatureCard
        key={index}
        title={feature.title}
        description={feature.description}
        icon={feature.icon}
      />
    ))}
  </div>
</div>

  );
}

function App() {
  return (
    <div className="font-sans">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}

export default App;
