import React, { useEffect, useRef } from "react";
import Link from "next/link"; // ✅ Important: for routing in Next.js

const Blog = ({ sectionRefs }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRefs?.current) {
      sectionRefs.current[8] = sectionRef.current;
    }
  }, [sectionRefs]);

  const articles = [
    {
      category: "Cybersecurity",
      link: "/cyber-process",
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
      authorImage: "K.png",
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
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen p-8 grid place-items-center bg-gradient-to-br from-indigo-50 to-white"
    >
      <div className="container grid grid-cols-1 gap-8 lg:grid-cols-2">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="relative flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 sm:flex-row"
          >
            <div className="sm:w-1/2">
              <img
                src={article.image}
                alt={article.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 sm:w-1/2 flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold text-indigo-600 mb-2">
                  {article.category}
                </p>
                <Link href={article.link} legacyBehavior>
                  <a className="text-xl font-semibold text-gray-900 hover:text-indigo-700 transition-colors">
                    {article.title}
                  </a>
                </Link>
                <p className="text-gray-600 mt-4 text-sm">{article.description}</p>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={article.authorImage}
                  alt={article.author}
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-800 leading-tight">
                    {article.author}
                    <br />
                    <span className="text-sm font-normal">{article.role}</span>
                  </p>
                  <p className="text-sm text-gray-500">{article.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
