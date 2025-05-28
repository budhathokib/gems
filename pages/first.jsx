import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '../styles/first.module.css';

const First = () => {
  // Refs for sections to observe
  const sectionRefs = useRef([]);

  // Intersection Observer to trigger animations when sections are in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('float-in');
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is in view
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="scroll-smooth">
      {/* Essential IT Security Services Section */}
      <main
        ref={(el) => (sectionRefs.current[0] = el)}
        className="flex flex-col md:flex-row min-h-screen floating-section"
      >
        {/* Left Section - Text */}
        <div className="w-full md:w-1/2 bg-[#003087] text-white flex flex-col justify-center px-10 py-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Essential IT security services
          </h1>
          <p className="text-lg mb-8">
            At Genese Solution, we understand that small and micro businesses face real 
            security challenges often without dedicated IT Security teams. Strengthen your organization’s 
            cybersecurity posture by proactively identifying vulnerabilities, managing risks, and neutralizing potential 
            threats before they impact your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/event_types/user/me"
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg font-semibold py-3 px-6 rounded shadow-md transition transform hover:scale-105"
            >
              Speak to an IT specialist
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="Sec4.jpg"
            alt="IT Team Collaboration"
            className="w-full h-full object-cover"
          />
        </div>
      </main>

      {/* About Our IT Security Services Section */}
      <div
        ref={(el) => (sectionRefs.current[1] = el)}
        className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 flex items-center justify-center px-4 py-12 floating-section"
      >
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-12 animate-fade-in">
            About Our IT Security Services
          </h1>
          <div className="flex flex-col items-center space-y-8">
            {/* Top node - Client Systems */}
            <div className="relative bg-white border-2 border-indigo-300 rounded-xl p-5 shadow-lg text-xl font-semibold text-gray-800 transform hover:scale-105 transition-transform duration-300">
              🖥 Client Systems
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b-xl"></div>
            </div>

            {/* Arrow */}
            <div className="w-1 h-8 bg-gradient-to-b from-indigo-300 to-purple-300 rounded-full animate-pulse"></div>

            {/* Center node - Genese Solution */}
            <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full px-8 py-4 shadow-xl text-2xl font-bold transform hover:scale-110 transition-transform duration-300">
              GEMS Solution
              <div className="absolute inset-0 rounded-full border-4 border-indigo-300 opacity-50 animate-ping"></div>
            </div>

            {/* Four surrounding services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {[
                "Vulnerability Management & Patching",
                "Endpoint Detection & Response",
                "Incident Response",
                "Quarterly Security Awareness Training",
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="relative bg-indigo-600 text-white rounded-xl p-5 shadow-lg w-72 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-t-xl"></div>
                  {service}
                </div>
              ))}
            </div>

            {/* Arrow */}
            <div className="w-1 h-8 bg-gradient-to-b from-indigo-300 to-purple-300 rounded-full animate-pulse"></div>

            {/* Bottom node - Monthly Security Reports */}
            <div className="relative bg-white border-2 border-indigo-300 rounded-xl p-5 shadow-lg text-xl font-semibold text-gray-800 transform hover:scale-105 transition-transform duration-300">
              📄 Monthly Security Reports
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div
        ref={(el) => (sectionRefs.current[2] = el)}
        className="sm:flex items-center bg-gradient-to-br from-indigo-50 to-blue-50 py-12 px-6 rounded-xl shadow-lg floating-section"
      >
        <div className="sm:w-1/2 p-10 transform hover:scale-105 transition-transform duration-500">
          <div className="image object-center text-center relative">
            <img
              src="https://i.imgur.com/WbQnbas.png"
              alt="About us"
              className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent rounded-lg"></div>
          </div>
        </div>
        <div className="sm:w-1/2 p-8">
          <div className="text animate-fade-in">
            <span className="text-indigo-500 uppercase text-sm font-semibold tracking-wider bg-indigo-100/50 px-3 py-1 rounded-full">
              About Us
            </span>
            <h2 className="my-4 font-extrabold text-3xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
              About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Genese Solution Pvt. Ltd. is a multinational cloud consulting and digital transformation company 
              headquartered in Nepal, with operations in the UK, Australia, and several other countries. 
              It specializes in cloud computing, software development, DevOps, cybersecurity, and IT consulting services. 
              As an advanced partner of Amazon Web Services (AWS), Genese helps businesses of all sizes optimize their digital 
              infrastructure, enhance operational efficiency, and innovate through technology.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div
        ref={(el) => (sectionRefs.current[3] = el)}
        className="bg-black floating-section"
      >
        <section
          id="features"
          className="relative block px-6 py-10 md:py-24 md:px-12 border-t border-b border-neutral-900 bg-neutral-900/30 overflow-hidden"
        >
          <div className="relative mx-auto max-w-5xl text-center z-10">
            <span className="text-gray-400 my-3 flex items-center justify-center font-semibold uppercase tracking-widest animate-fade-in text-lg">
              Why Choose Our Cybersecurity Solutions
            </span>
            <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-extrabold text-transparent text-3xl sm:text-5xl md:text-6xl leading-tight animate-slide-up">
              Build Secure Digital Experiences Your Customers Trust
            </h2>
            <p className="mx-auto my-6 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400 text-xl animate-fade-in-delay">
              Our cybersecurity solutions are built to safeguard your business from day one. From pre-secured templates to 
              intuitive security tools, we make it easy to protect your websites and systems — no in-house security team required.
              Let your customers browse, interact, and transact with confidence.
            </p>
          </div>

          <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-16 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "lock",
                title: "1. All-in-One Protection, One Trusted Partner",
                description:
                  "No more juggling multiple vendors or point solutions. We offer end-to-end security ,from threat detection to user training ,all managed under one roof, with a team that knows your business.",
              },
              {
                icon: "shield",
                title: "2. Built for Small Teams, Backed by Big Expertise",
                description:
                  "We design our services to meet the needs of small and growing businesses. You get enterprise-grade protection, simplified and scaled to fit your team, budget, and workflow.",
              },
              {
                icon: "code",
                title: "3. Proactive, Not Reactive",
                description:
                  "We don’t just respond to threats ,we help prevent them. With real-time monitoring, regular patching, and ongoing awareness training, your security stays one step ahead.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className="button-text mx-auto flex h-14 w-14 items-center justify-center rounded-full border animate-pulse-once"
                  style={{
                    backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)',
                    borderColor: 'rgb(93, 79, 240)',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`icon icon-tabler icon-tabler-${feature.icon} text-white`}
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    {feature.icon === "lock" && (
                      <>
                        <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                        <circle cx="12" cy="16" r="1"></circle>
                        <path d="M8 11v-4a4 4 0 0 1 8 0v4"></path>
                      </>
                    )}
                    {feature.icon === "shield" && (
                      <path d="M12 3a12 12 0 0 0 -9 4v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-11a12 12 0 0 0 -9 -4"></path>
                    )}
                    {feature.icon === "code" && (
                      <>
                        <polyline points="7 8 3 12 7 16"></polyline>
                        <polyline points="17 8 21 12 17 16"></polyline>
                        <line x1="14" y1="4" x2="10" y2="20"></line>
                      </>
                    )}
                  </svg>
                </div>
                <h3 className="mt-8 text-gray-400 text-xl font-semibold">{feature.title}</h3>
                <p className="my-4 mb-0 font-medium leading-relaxed tracking-wide text-gray-400 text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div
            className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b animate-gradient-shift"
            style={{
              backgroundImage: 'linear-gradient(to right top, rgba(80, 70, 229, 0.3) 0%, transparent 50%, transparent 100%)',
              borderColor: 'rgba(93, 79, 240, 0.3)',
            }}
          ></div>
          <div
            className="absolute bottom-0 right-0 z-0 h-1/3 w-full animate-gradient-shift-delay"
            style={{
              backgroundImage: 'linear-gradient(to left top, rgba(80, 70, 229, 0.3) 0%, transparent 50%, transparent 100%)',
              borderColor: 'rgba(93, 79, 240, 0.3)',
            }}
          ></div>
        </section>
      </div>

      {/* Comparison Table Section */}
      <section
        ref={(el) => (sectionRefs.current[4] = el)}
        className="py-16 bg-white floating-section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
            Capabilities Comparison
          </h2>
          <div className="overflow-x-auto px-6 py-8 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl shadow-2xl">
            <table className="min-w-full border-separate border-spacing-0 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-indigo-800 to-blue-600 text-white">
                <tr>
                  <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wider border-b-2 border-indigo-500">
                    Capabilities
                  </th>
                  <th className="px-8 py-5 text-center text-sm font-bold uppercase tracking-wider border-b-2 border-indigo-500">
                    Traditional Antivirus
                  </th>
                  <th className="px-8 py-5 text-center text-sm font-bold uppercase tracking-wider border-b-2 border-indigo-500">
                    Genese Managed IT Security
                  </th>
                </tr>
              </thead>
              <tbody className="text-white">
                {[
                  ['Threat Detection', '✓', '✓'],
                  ['Continuous Monitoring', '✗', '✓'],
                  ['Threat Hunting', '✗', '✓'],
                  ['Incident Response', '✗', '✓'],
                  ['Vulnerability Management', '✗', '✓'],
                  ['Security Awareness Training', '✗', '✓'],
                ].map(([capability, traditional, genese], idx) => (
                  <tr
                    key={idx}
                    className="bg-blue-800/95 hover:bg-blue-900/80 transition-all duration-300 transform hover:scale-[1.01] border-b border-blue-700/50"
                  >
                    <td className="px-8 py-5 text-sm font-semibold text-indigo-100">
                      {capability}
                    </td>
                    <td className="px-8 py-5 text-center">
                      <span
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                          traditional === '✓' ? 'bg-green-500' : 'bg-red-500'
                        } text-white font-bold animate-pulse-once`}
                      >
                        {traditional}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-center">
                      <span
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                          genese === '✓' ? 'bg-green-500' : 'bg-red-500'
                        } text-white font-bold animate-pulse-once`}
                      >
                        {genese}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section - Centered on Screen */}
      <div
        ref={(el) => (sectionRefs.current[5] = el)}
        className="min-h-screen flex items-center justify-center bg-gray-100 floating-section"
      >
        <div className="w-full max-w-2xl bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 rounded-lg">
          <div className="mx-auto px-5">
            <div className="flex flex-col items-center">
              <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
                FAQ
              </h2>
              <p className="mt-3 text-lg text-neutral-500 md:text-xl">
                Frequently asked questions
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
              {[
                {
                  question: "How will this service improve our current security posture?",
                  answer:
                    "By leveraging Genese Solution’s holistic Managed IT Security service, you gain continuous protection through real-time endpoint detection, 24/7 monitoring, proactive patching, and structured incident response. This multi-layered defense dramatically reduces the risk of breaches, minimizes downtime, and ensures your environment stays compliant and resilient against evolving cyber threats.",
                },
                {
                  question: "Do we need to invest in any new hardware or software?",
                  answer:
                    "No upfront investments are required. Our solution is designed to integrate seamlessly with your existing infrastructure which includes a small software package. We provide and manage all necessary tools as part of our service package, allowing you to focus on business growth while we handle your security stack.",
                },
                {
                  question: "What kind of visibility and control will we have?",
                  answer:
                    "You’ll receive comprehensive monthly reports that detail activities, threats detected, response times, patch statuses, and user awareness metrics. Our team also provides quarterly reviews and strategy sessions to keep you fully informed and in control of your security posture.",
                },
                {
                  question: "How quickly do you respond to incidents?",
                  answer:
                    "Our incident response team is on-call 24/7 and acts immediately upon detection of suspicious activity. We follow a structured incident handling process to contain, investigate, and remediate threats efficiently — keeping your business operational and your data protected.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="py-5">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span>{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                      {faq.answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section
        ref={(el) => (sectionRefs.current[6] = el)}
        className="py-16 bg-white floating-section"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <img
                src="SEC8.jpg"
                alt="IT Security Infrastructure"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Helping you build and manage your IT Security infrastructure
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700">
                  Real-time monitoring and analysis of endpoint activities to swiftly identify and mitigate security incidents
                </p>
              </div>
              <ul className="mt-8 space-y-4">
                {[
                  "24/7 Security Operations Center",
                  "Threat Intelligence & Analysis",
                  "Incident Response Planning",
                ].map((service, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-500 mr-2 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        ref={(el) => (sectionRefs.current[7] = el)}
        className="relative overflow-hidden floating-section"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="Sparta.jpeg"
            alt="Security background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-indigo-900/80"></div>
        </div>
        <div className="relative z-10 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Make Your Business Safe!
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Choose the security package that fits your needs
              </p>
            </div>
            <div className="flex items-center justify-center min-h-screen">
              <div className="grid grid-cols-1 gap-8">
                <div className="flex flex-col rounded-xl border border-gray-700 bg-white/5 backdrop-blur-md p-6 shadow-xl transition-all hover:scale-[1.02]">
                  <h3 className="text-xl font-medium text-white">Standard</h3>
                  <div className="my-6">
                    <span className="text-4xl font-bold text-white">$22</span>
                    <span className="ml-2 text-gray-300">/device</span>
                  </div>
                  <a
                    href="https://calendly.com/event_types/user/me"
                    className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-center font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Book Now
                  </a>
                  <ul className="mt-8 space-y-3">
                    {[
                      "Continuous security monitoring",
                      "Antivirus/Endpoint Detection",
                      "Remote Monitoring",
                      "Vulnerability Management",
                      "Incident Response",
                      "Quarterly Security Training",
                      "One free Penetration test per year",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-indigo-500 mt-0.5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section
        ref={(el) => (sectionRefs.current[8] = el)}
        className="grid min-h-screen p-8 place-items-center floating-section"
      >
        <div className="container grid grid-cols-1 gap-8 my-auto lg:grid-cols-2">
          {[
            {
              category: "Cybersecurity",
              link: "cyber-process",
              title: "Fortifying Our Production Process",
              description:
                "Discover how advanced cybersecurity investments secure our production, enhancing efficiency and ensuring reliable, protected services with cutting-edge threat monitoring.",
              image: "Sec.jpg",
              author: "Niranjan Kunwar",
              role: "CTO",
              authorImage: "CTO.jpg",
              date: "2022-08-15",
            },
            {
              category: "Expansion",
              link: "/expanding-service-network",
              title: "Expanding Our Service Network",
              description:
                "Discover how our expansion investment has allowed us to enhance our service network, providing better support and customer experience.",
              image: "Sec1.jpg",
              author: "Sampanna Shrestha",
              role: "Information Security Consultant",
              authorImage: "Sampanna.jpg",
              date: "2022-09-02",
            },
            {
              category: "Cybersecurity",
              link: "/best-practices-safer-future-1",
              title: "Best Practices for a Safer Future",
              description:
                "Find out how our investment in cybersecurity practices is driving us towards a safer future, showcasing our commitment to cybersecurity responsibility.",
              image: "Sec2.jpg",
              author: "Kritika Kapali",
              role: "Associate",
              authorImage: "kritika.jpeg",
              date: "2022-09-20",
            },
            {
              category: "Cybersecurity",
              link: "/best-practices-safer-future-2",
              title: "Best Practices for a Safer Future",
              description:
                "Find out how our investment in cybersecurity practices is driving us towards a safer future, showcasing our commitment to cybersecurity responsibility.",
              image: "Sec 5.jpeg",
              author: "Sajan Regmi",
              role: "Associate",
              authorImage: "Sajan.jpg",
              date: "2022-09-20",
            },
          ].map((article, idx) => (
            <div
              key={idx}
              className="relative flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg grid gap-2 sm:grid-cols-2 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative bg-clip-border rounded-xl overflow-hidden m-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-full rounded-t-xl"
                />
              </div>
              <div className="p-6 px-2 sm:pr-6 sm:pl-4">
                <p className="block antialiased font-sans text-sm font-semibold leading-normal text-indigo-600 mb-4">
                  {article.category}
                </p>
                <Link
                  href={article.link}
                  className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-indigo-600"
                >
                  {article.title}
                </Link>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-500 mb-8 font-normal">
                  {article.description}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={article.authorImage}
                    alt={article.author}
                    className="inline-block relative object-cover object-center rounded-full w-12 h-12"
                  />
                  <div>
                    <p className="block antialiased font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-0.5">
                      {article.author} <br />{article.role}
                    </p>
                    <p className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal">
                      {article.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
          .scroll-smooth {
            scroll-behavior: smooth;
          }
          .floating-section {
            perspective: 1000px;
            opacity: 0;
            transform: translateY(50px) rotateX(-5deg);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out, box-shadow 0.8s ease-out;
            margin: 20px 0;
            border-radius: 15px;
          }
          .floating-section.float-in {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-delay {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse-once {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          @keyframes gradient-shift {
            0% { background-position: 0% 0%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 0%; }
          }
          @keyframes gradient-shift-delay {
            0% { background-position: 100% 50%; }
            50% { background-position: 0% 0%; }
            100% { background-position: 100% 50%; }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
          .animate-fade-in-delay {
            animation: fade-in-delay 1.2s ease-out 0.2s backwards;
          }
          .animate-slide-up {
            animation: slide-up 1s ease-out;
          }
          .animate-pulse-once {
            animation: pulse-once 1.5s ease-in-out;
          }
          .animate-gradient-shift {
            animation: gradient-shift 10s infinite;
            background-size: 200% 200%;
          }
          .animate-gradient-shift-delay {
            animation: gradient-shift-delay 10s infinite 2s;
            background-size: 200% 200%;
          }
        `}
      </style>
    </div>
  );
};

export default First;