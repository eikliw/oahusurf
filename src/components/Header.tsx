'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Ms_Madi, Roboto } from 'next/font/google';
import { useState, useEffect } from 'react';

const msMadi = Ms_Madi({ weight: '400', subsets: ['latin'] });
const roboto = Roboto({ weight: ['400'], subsets: ['latin'] });

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomePage]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const headerBackground = isHomePage 
    ? isScrolled || mobileMenuOpen
      ? 'bg-white/95 backdrop-blur-sm shadow-sm'
      : 'bg-transparent'
    : 'bg-white shadow-sm';

  const textColor = isHomePage && !isScrolled && !mobileMenuOpen
    ? 'text-white'
    : 'text-volcanic';

  const mobileTextColor = isHomePage && !isScrolled && !mobileMenuOpen
    ? 'text-white'
    : 'text-volcanic';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerBackground}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`${msMadi.className} text-4xl md:text-4xl lg:text-5xl ${textColor} transition-colors duration-300`}>
              OahuSurfCo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8 ${roboto.className} text-base lg:text-lg`}>
            <Link
              href="/"
              className={`${textColor} hover:text-ocean transition-colors duration-300`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${textColor} hover:text-ocean transition-colors duration-300`}
            >
              About
            </Link>
            <Link
              href="/shop"
              className={`${textColor} hover:text-ocean transition-colors duration-300`}
            >
              Shop
            </Link>
            <Link
              href="/blog"
              className={`${textColor} hover:text-ocean transition-colors duration-300`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`${textColor} hover:text-ocean transition-colors duration-300`}
            >
              Contact
            </Link>
            
            <button
              className={`${textColor} hover:text-ocean transition-colors duration-300 flex items-center gap-2`}
              aria-label="Shopping cart"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              Cart (0)
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`${mobileTextColor} p-2 focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2 rounded-lg transition-colors duration-300`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-100">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="text-volcanic hover:text-ocean transition-colors duration-200 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-volcanic hover:text-ocean transition-colors duration-200 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/shop"
                  className="text-volcanic hover:text-ocean transition-colors duration-200 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop
                </Link>
                <Link
                  href="/blog"
                  className="text-volcanic hover:text-ocean transition-colors duration-200 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-volcanic hover:text-ocean transition-colors duration-200 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <button
                  className="text-volcanic hover:text-ocean transition-colors duration-200 py-2 text-left flex items-center gap-2"
                  aria-label="Shopping cart"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  Cart (0)
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}