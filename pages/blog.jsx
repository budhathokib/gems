import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Niranjan Kunwar',
      role: 'CTO',
      avatar: 'CTO.jpg',
      alt: 'Niranjan Avatar',
      linkedin: 'https://www.linkedin.com/in/nirkunwar/',
    },
    {
      name: 'Aarohan Godhar Thapa',
      role: 'Assistant Manager | Cybersecurity',
      avatar: 'Arohan.jpeg',
      alt: 'Aarohan Avatar',
      linkedin: 'https://www.linkedin.com/in/aarohan-godar-thapa-0431a9179/',
    },
    {
      name: 'Sampanna Shrestha',
      role: 'Information Security Consultant',
      avatar: 'Sampanna.jpg',
      alt: 'Sampanna Avatar',
      linkedin: 'https://www.linkedin.com/in/sampannastha13/',
    },
    {
      name: 'Bijaya Budhathoki',
      role: 'Lead SOC Analyst & Security Engineer Manager',
      avatar: 'Bijay.jpeg',
      alt: 'Bijaya Avatar',
      linkedin: 'https://www.linkedin.com/in/budhathokibijaya/',
    },
    {
      name: 'Shreejwol Disti',
      role: 'Secuirty Consultant',
      avatar: 'Shreejwol.jpeg',
      alt: 'Shreejwol Avatar',
      linkedin: 'https://www.linkedin.com/in/shreejwol592/',
    },
    {
      name: 'Sacar Subedi',
      role: 'Cybersecurity Engineer',
      avatar: 'Sakar.jpeg',
      alt: 'Sacar Avatar',
      linkedin: 'https://www.linkedin.com/in/sakar-subedi-510a2b269/',
    },
    {
      name: 'Kritika Kapali',
      role: 'Cybersecurity Engineer',
      avatar: 'Kritika.jpeg',
      alt: 'Kritika Avatar',
      linkedin: 'https://www.linkedin.com/in/kritika-kapali-6194912a8/',
    },
    {
      name: 'Sajan Regmi',
      role: 'Cybersecurity Engineer',
      avatar: 'Sajan.jpg',
      alt: 'Sajan Avatar',
      linkedin: 'https://www.linkedin.com/in/sajan-regmi-b92632234/',
    },
    {
      name: 'Prasant Paudel',
      role: 'DevSecOps Engineer',
      avatar: 'Prashant.jpeg',
      alt: 'Prasant Avatar',
      linkedin: 'https://www.linkedin.com/in/4lch3mis7/',
    },
    {
      name: 'Samshrita Ghimire',
      role: 'Cybersecurity Engineer',
      avatar: 'Samshrita.jpeg',
      alt: 'Samshrita Avatar',
      linkedin: 'https://www.linkedin.com/in/samshrita/',
    },
    {
      name: 'Bishal Chapagain',
      role: 'DevSecOps Engineer',
      avatar: 'Bshal.png',
      alt: 'Bishal Avatar',
      linkedin: 'https://www.linkedin.com/in/bishal123/',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    show: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <section className="bg-gradient-to-tr from-[#e0f2ff] via-white to-[#e0dfff] dark:from-[#111827] dark:via-[#1f2937] dark:to-[#111827] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-cyan-400 dark:to-purple-500 drop-shadow-md">
          Meet Our Visionary Team
        </h2>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Passionate individuals driving cybersecurity innovation and shaping the future of digital safety.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              variants={card}
              key={index}
              className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 text-center shadow-2xl transform hover:-translate-y-2 hover:shadow-blue-300/30 dark:hover:shadow-indigo-700/30 transition-all duration-500 group"
            >
              <div className="relative">
                <img
                  src={member.avatar}
                  alt={member.alt}
                  className="w-32 h-32 mx-auto rounded-full object-cover grayscale group-hover:grayscale-0 ring-4 ring-blue-200 dark:ring-indigo-500 transition duration-500"
                  onError={(e) => (e.target.src = 'placeholder.jpg')}
                />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-indigo-400 transition duration-300">
                {member.name}
              </h3>
              <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {member.role}
              </p>
              <div className="flex justify-center mt-4">
                <a
                  href={member.linkedin}
                  className="hover:scale-125 transition transform"
                  aria-label={`Visit ${member.name}'s LinkedIn profile`}
                >
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
                    alt="LinkedIn logo"
                    className="w-6 h-6"
                    style={{ filter: 'invert(12%) sepia(87%) saturate(4686%) hue-rotate(199deg) brightness(90%) contrast(90%)' }}
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
