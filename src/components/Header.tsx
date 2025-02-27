'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Rock_Salt } from 'next/font/google';
import { useState } from 'react';

const rockSalt = Rock_Salt({ weight: '400', subsets: ['latin'] });

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 ${isHomePage && !mobileMenuOpen ? 'bg-transparent' : 'bg-white shadow-sm'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Oahu Surf Co Logo"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <span className={`${rockSalt.className} text-xl ${isHomePage && !mobileMenuOpen ? 'text-white' : 'text-volcanic'}`}>
              Oahu Surf Co
            </span>
          </Link>

          {/* Right side: Navigation + Cart */}
          <div className="flex items-center">
            {/* Desktop Navigation - Text aligned right */}
            <div className="hidden md:flex items-center space-x-8 text-right">
              <Link
                href="/"
                className={`${isHomePage ? 'nav-link' : 'text-volcanic hover:text-ocean-blue'} transition-colors duration-200`}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className={`${isHomePage ? 'nav-link' : 'text-volcanic hover:text-ocean-blue'} transition-colors duration-200`}
              >
                Shop
              </Link>
              <Link
                href="/about"
                className={`${isHomePage ? 'nav-link' : 'text-volcanic hover:text-ocean-blue'} transition-colors duration-200`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`${isHomePage ? 'nav-link' : 'text-volcanic hover:text-ocean-blue'} transition-colors duration-200`}
              >
                Contact
              </Link>
              
              <button
                className={`${isHomePage && !mobileMenuOpen ? 'text-white hover:text-sand' : 'text-volcanic hover:text-ocean-blue'} transition-colors duration-200 ml-4`}
              >
                Cart (0)
              </button>
            </div>

            {/* Mobile: Cart + Menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                className={`${isHomePage && !mobileMenuOpen ? 'text-white hover:text-sand' : 'text-volcanic hover:text-ocean-blue'} transition-colors duration-200`}
              >
                Cart (0)
              </button>
              
              {/* Mobile menu button */}
              <button 
                className={`${isHomePage && !mobileMenuOpen ? 'text-white' : 'text-volcanic'} transition-colors duration-200`}
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-4 bg-white text-right border-t border-gray-200">
            <div className="flex flex-col space-y-4 items-end">
              <Link
                href="/"
                className="text-volcanic hover:text-ocean-blue transition-colors duration-200 block px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="text-volcanic hover:text-ocean-blue transition-colors duration-200 block px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="text-volcanic hover:text-ocean-blue transition-colors duration-200 block px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-volcanic hover:text-ocean-blue transition-colors duration-200 block px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}