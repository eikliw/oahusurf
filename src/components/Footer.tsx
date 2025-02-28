'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Ms_Madi } from 'next/font/google';

const msMadi = Ms_Madi({ weight: '400', subsets: ['latin'] });

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <footer 
      className={`w-full ${isHomePage ? 'bg-ocean/5 text-text-dark' : 'bg-ocean/5 text-text-dark'}`}
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Home Page Special Footer */}
      {isHomePage ? (
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
            {/* Top Section with Logo, Links and Newsletter */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
              {/* Logo and About */}
              <div className="lg:col-span-3 flex flex-col">
                <div className="mb-4">
                  <span className={`${msMadi.className} text-4xl md:text-5xl text-ocean`} role="heading" aria-level={2}>
                    OahuSurfCo
                  </span>
                </div>
                <p className="text-sm text-text-dark mb-4">
                  <span className="block font-semibold mb-1">The Spirit of Aloha</span>
                  Hawaiian-inspired surf apparel, handcrafted with aloha.
                  Experience the spirit of the islands in every stitch.
                </p>
                <div className="flex space-x-4 mt-auto" role="navigation" aria-label="Social media links">
                  <a 
                    href="#" 
                    className="text-text-dark hover:text-ocean transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                    aria-label="Follow us on Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="text-text-dark hover:text-ocean transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                    aria-label="Follow us on Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="text-text-dark hover:text-ocean transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                    aria-label="Follow us on LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
                <nav aria-label="Shop links">
                  <h4 className="font-semibold mb-4 text-ocean">Shop</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link 
                        href="/shop" 
                        className="text-sm text-text-dark hover:text-ocean transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                      >
                        All Products
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/shop/surfboards" 
                        className="text-sm text-text-dark hover:text-ocean transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                      >
                        Surfboards
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/shop/accessories" 
                        className="text-sm text-text-dark hover:text-ocean transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                      >
                        Accessories
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/shop/beachwear" 
                        className="text-sm text-text-dark hover:text-ocean transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                      >
                        Beachwear
                      </Link>
                    </li>
                  </ul>
                </nav>

                <nav aria-label="Company links">
                  <h4 className="font-semibold mb-4 text-ocean">Company</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link 
                        href="/about" 
                        className="text-sm text-text-dark hover:text-ocean transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact" 
                        className="text-sm text-text-dark hover:text-ocean transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/sustainability" 
                        className="text-sm text-text-dark hover:text-ocean transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                      >
                        Sustainability
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/careers" 
                        className="text-sm text-text-dark hover:text-ocean transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                </nav>

                <nav aria-label="Support links">
                  <h4 className="font-semibold mb-4 text-ocean">Support</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link 
                        href="/faq" 
                        className="text-sm text-text-dark hover:text-ocean transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                      >
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/shipping" 
                        className="text-sm text-text-dark hover:text-ocean transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                      >
                        Shipping
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/returns" 
                        className="text-sm text-text-dark hover:text-ocean transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                      >
                        Returns
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/size-guide" 
                        className="text-sm text-text-dark hover:text-ocean transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                      >
                        Size Guide
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Newsletter */}
              <div className="lg:col-span-3">
                <h4 className="font-semibold mb-4 text-ocean" id="newsletter-signup">Stay Updated</h4>
                <p className="text-sm text-text-dark mb-4">
                  Subscribe to get special offers, free giveaways, and new product announcements.
                </p>
                <form 
                  className="flex flex-col gap-2"
                  role="form"
                  aria-labelledby="newsletter-signup"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Add form submission logic here
                  }}
                >
                  <div>
                    <label htmlFor="footer-email" className="sr-only">Email address</label>
                    <input
                      id="footer-email"
                      type="email"
                      name="email"
                      required
                      placeholder="Your email address"
                      className="w-full px-4 py-2 rounded-lg bg-white text-text-dark border border-text-secondary/20 focus:outline-none focus:ring-2 focus:ring-ocean"
                      aria-required="true"
                      aria-describedby="email-validation"
                    />
                    <div id="email-validation" className="text-sm text-red-600 mt-1" role="alert"></div>
                  </div>
                  <button 
                    type="submit" 
                    className="bg-ocean hover:bg-ocean/90 text-white font-medium px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                    aria-label="Subscribe to newsletter"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Bottom Section with Store Details */}
            <div className="mt-12 pt-8 border-t border-text-secondary/20">
              <div className="flex flex-col md:flex-row justify-between items-center text-sm text-text-dark">
                <p>© {new Date().getFullYear()} Oahu Surf Co. All rights reserved.</p>
                <nav className="flex space-x-6 mt-4 md:mt-0" aria-label="Legal links">
                  <Link 
                    href="/privacy" 
                    className="text-text-dark hover:text-ocean transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    href="/terms" 
                    className="text-text-dark hover:text-ocean transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                  >
                    Terms of Service
                  </Link>
                  <Link 
                    href="/sitemap" 
                    className="text-text-dark hover:text-ocean transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                  >
                    Sitemap
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Regular Footer for Inner Pages
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className={`${msMadi.className} text-4xl md:text-5xl mb-4 text-text-dark`}>Oahu Surf Co</h3>
              <p className="text-sm text-text-secondary">
                Your premier destination for surf gear and accessories in Oahu.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-text-dark">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/shop" className="text-sm text-text-secondary hover:text-ocean transition-colors duration-200">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/shop/surfboards" className="text-sm text-text-secondary hover:text-ocean transition-colors duration-200">
                    Surfboards
                  </Link>
                </li>
                <li>
                  <Link href="/shop/accessories" className="text-sm text-text-secondary hover:text-ocean transition-colors duration-200">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-text-dark">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-text-secondary hover:text-ocean transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-text-secondary hover:text-ocean transition-colors duration-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-text-dark">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-text-secondary hover:text-ocean transition-colors duration-200">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-text-secondary hover:text-ocean transition-colors duration-200">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-text-secondary hover:text-ocean transition-colors duration-200">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-text-secondary/10 text-sm text-center text-text-secondary">
            © {new Date().getFullYear()} Oahu Surf Co. All rights reserved.
          </div>
        </div>
      )}
    </footer>
  );
}