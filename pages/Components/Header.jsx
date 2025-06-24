import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex h-16 items-center justify-between pl-1 pr-4 sm:pl-1.5 sm:pr-6 lg:pl-1.5 lg:pr-8">
        <Link href="/" className="block text-black transition-transform duration-300 hover:scale-105">
          <span className="sr-only">Home</span>
          <img 
            src="/Genese.webp" 
            width="100" 
            height="auto" 
            alt="Genese Logo" 
            className="h-12 sm:h-14 w-auto" 
          />
        </Link>

        <div className="md:hidden">
          <button
            className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;