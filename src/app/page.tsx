'use client';

import { motion } from 'framer-motion';
import { Rock_Salt } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const rockSalt = Rock_Salt({ weight: '400', subsets: ['latin'] });

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/oahu2.webm" type="video/webm" />
        </video>

        {/* Hero Content */}
        <div className="content-overlay flex items-center justify-center h-full">
          <div className="text-center px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-3xl md:text-5xl font-bold text-white mb-6 ${rockSalt.className}`}
            >
              Hawaiian-Inspired Surf Style
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-white mb-8"
            >
              Premium Surf Apparel & Beachwear
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4"
            >
              <Link href="/shop" className="btn-primary">
                Shop Now
              </Link>
              <Link href="#about" className="btn-secondary">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold text-volcanic ${rockSalt.className}`}>
              Featured Collections
            </h2>
            <p className="mt-4 text-lg text-volcanic/70">
              Explore our latest Hawaiian-inspired designs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Collection 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-w-1 aspect-h-1 w-full">
                <Image 
                  src="/images/collection-beachwear.jpg" 
                  alt="Beachwear Collection" 
                  width={500} 
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-volcanic/80 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">Beachwear</h3>
                  <p className="text-white/80 mb-4">Perfect for island adventures</p>
                  <Link href="/shop" className="inline-block bg-sand text-volcanic px-4 py-2 rounded-lg font-medium hover:bg-sand/90 transition-colors">
                    Explore
                  </Link>
                </div>
              </div>
            </div>

            {/* Collection 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-w-1 aspect-h-1 w-full">
                <Image 
                  src="/images/collection-surfwear.jpg" 
                  alt="Surfwear Collection" 
                  width={500} 
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-volcanic/80 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">Surfwear</h3>
                  <p className="text-white/80 mb-4">Ride the waves in style</p>
                  <Link href="/shop" className="inline-block bg-ocean-blue text-white px-4 py-2 rounded-lg font-medium hover:bg-ocean-blue/90 transition-colors">
                    Explore
                  </Link>
                </div>
              </div>
            </div>

            {/* Collection 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-w-1 aspect-h-1 w-full">
                <Image 
                  src="/images/collection-accessories.jpg" 
                  alt="Accessories Collection" 
                  width={500} 
                  height={500} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-volcanic/80 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">Accessories</h3>
                  <p className="text-white/80 mb-4">Complete your beach look</p>
                  <Link href="/shop" className="inline-block bg-coral text-white px-4 py-2 rounded-lg font-medium hover:bg-coral/90 transition-colors">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-sand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className={`text-3xl font-bold text-volcanic ${rockSalt.className}`}>
                New Arrivals
              </h2>
              <p className="mt-2 text-lg text-volcanic/70">
                Fresh off the boat from Hawaii
              </p>
            </div>
            <Link href="/shop" className="mt-4 md:mt-0 text-ocean-blue hover:text-ocean-blue/80 font-medium flex items-center">
              View All 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                <Image 
                  src="/images/product-1.jpg" 
                  alt="Hawaiian Shirt" 
                  width={300} 
                  height={300} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-4">
                <h3 className="text-volcanic font-medium">Tropical Floral Shirt</h3>
                <p className="text-volcanic/70 text-sm">Classic aloha pattern</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-volcanic font-bold">$59.99</span>
                  <button className="text-sm bg-ocean-blue text-white px-3 py-1 rounded hover:bg-ocean-blue/90 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                <Image 
                  src="/images/product-2.jpg" 
                  alt="Board Shorts" 
                  width={300} 
                  height={300} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-4">
                <h3 className="text-volcanic font-medium">Wave Rider Shorts</h3>
                <p className="text-volcanic/70 text-sm">Quick-dry performance</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-volcanic font-bold">$45.99</span>
                  <button className="text-sm bg-ocean-blue text-white px-3 py-1 rounded hover:bg-ocean-blue/90 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                <Image 
                  src="/images/product-3.jpg" 
                  alt="Surf Cap" 
                  width={300} 
                  height={300} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-4">
                <h3 className="text-volcanic font-medium">Palm Tree Cap</h3>
                <p className="text-volcanic/70 text-sm">UPF 50+ sun protection</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-volcanic font-bold">$29.99</span>
                  <button className="text-sm bg-ocean-blue text-white px-3 py-1 rounded hover:bg-ocean-blue/90 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                <Image 
                  src="/images/product-4.jpg" 
                  alt="Beach Towel" 
                  width={300} 
                  height={300} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-4">
                <h3 className="text-volcanic font-medium">Aloha Beach Towel</h3>
                <p className="text-volcanic/70 text-sm">Oversized & quick-drying</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-volcanic font-bold">$39.99</span>
                  <button className="text-sm bg-ocean-blue text-white px-3 py-1 rounded hover:bg-ocean-blue/90 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <Image 
            src="/images/palm-pattern.png" 
            alt="Palm Pattern" 
            width={500} 
            height={800}
            className="h-full w-full object-cover" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <Image 
                src="/images/about-image.jpg" 
                alt="Hawaiian Beach" 
                width={600} 
                height={400}
                className="rounded-lg shadow-xl" 
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className={`text-3xl font-bold text-volcanic mb-6 ${rockSalt.className}`}>
                The Spirit of Aloha
              </h2>
              <p className="text-volcanic/80 mb-4 text-lg">
                Founded on the shores of Oahu, our brand brings the laid-back spirit of Hawaii to every piece we create. Each design is inspired by the natural beauty and vibrant culture of the islands.
              </p>
              <p className="text-volcanic/80 mb-6 text-lg">
                We work with local artisans and sustainable materials to create authentic Hawaiian-inspired apparel that captures the essence of island life – from the powerful waves of the North Shore to the tranquil beaches of Waikiki.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="bg-palm/10 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-palm">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                    </svg>
                  </div>
                  <span className="text-volcanic font-medium">Eco-Friendly Materials</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-ocean-blue/10 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-ocean-blue">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  </div>
                  <span className="text-volcanic font-medium">Authentic Hawaiian Design</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-coral/10 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-coral">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </div>
                  <span className="text-volcanic font-medium">Handcrafted with Aloha</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 bg-volcanic/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold text-volcanic ${rockSalt.className}`}>
              #OahuSurfLife
            </h2>
            <p className="mt-4 text-lg text-volcanic/70">
              Follow us on Instagram for daily doses of island inspiration
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <a 
                key={item} 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block aspect-square overflow-hidden rounded-lg group"
              >
                <Image 
                  src={`/images/instagram-${item}.jpg`} 
                  alt={`Instagram post ${item}`} 
                  width={200} 
                  height={200} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </a>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-ocean-blue hover:text-ocean-blue/80 font-medium"
            >
              Follow us @OahuSurfCo
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-ocean-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/images/wave-pattern.png" 
            alt="Wave Pattern" 
            fill 
            className="object-cover" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className={`text-3xl font-bold text-white mb-4 ${rockSalt.className}`}>
              Join Our Ohana
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Subscribe to our newsletter for exclusive offers, early access to new collections, and a touch of aloha in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-sand"
              />
              <button type="submit" className="bg-sand hover:bg-sand/90 text-volcanic font-medium px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}