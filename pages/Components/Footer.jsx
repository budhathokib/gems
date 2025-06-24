import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-4 py-16 sm:px-6 lg:px-8 text-gray-300">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p>
            <span className="text-xs uppercase tracking-wide text-gray-400">Location</span>
            <a
              href="https://www.bing.com/maps?pglt=425&q=53+Sheen+Lane%2C+London%2C+England%2C+SW14+8AB"
              className="block text-2xl font-medium text-white hover:text-gray-400 sm:text-3xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              53 Sheen Lane, London, England, SW14 8AB
            </a>
          </p>

          <ul className="mt-8 space-y-1 text-sm">
            <li>Monday to Friday<br />8am - 6pm</li><br />
            <li>Contact<br /> sales@genesesolution.com<br />(123) 456-7890</li>
          </ul>

          <ul className="mt-8 flex gap-6">
            <li>
              <a
                href="https://www.facebook.com/genesesolution"
                rel="noreferrer"
                target="_blank"
                className="text-gray-300 transition hover:text-white"
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/genesesolution/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-300 transition hover:text-white"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M7.5 2C4.462 2 2 4.462 2 7.5v9A5.5 5.5 0 0 0 7.5 22h9a5.5 5.5 0 0 0 5.5-5.5v-9C22 4.462 19.538 2 16.5 2h-9zm7.5 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/genesesolution"
                rel="noreferrer"
                target="_blank"
                className="text-gray-300 transition hover:text-white"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743A11.65 11.65 0 0 1 3.15 4.867a4.072 4.072 0 0 0 1.27 5.481 4.095 4.095 0 0 1-1.86-.513v.05a4.11 4.11 0 0 0 3.292 4.027 4.095 4.095 0 0 1-1.853.07 4.109 4.109 0 0 0 3.833 2.85A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.84" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="font-medium text-white">Legal</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/cookie" className="hover:text-white">Cookies</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-white">Company</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li><Link href="/blog" className="hover:text-white">Meet the Team</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-12">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-xs text-gray-400">
            © 2025. Genese Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;