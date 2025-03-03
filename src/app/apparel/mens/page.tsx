'use client';

import { Ms_Madi } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const msMadi = Ms_Madi({ weight: '400', subsets: ['latin'] });

export default function MensApparelPage() {
  return (
    <main className="min-h-screen bg-white pt-14 md:pt-[4.5rem] lg:pt-[4.75rem]">
      {/* Category Header */}
      <section className="relative bg-ocean/10 py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
            <path d="M0 100 L0 50 Q25 60 50 50 T100 50 L100 100 Z" fill="currentColor" className="text-ocean"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-normal text-volcanic mb-4 ${msMadi.className}`}>
              Men's Apparel
            </h1>
            <p className="text-lg text-volcanic/80 max-w-2xl">
              From beach-ready tees to comfortable everyday essentials, our men's collection combines Hawaiian style with modern comfort. Each piece is designed to bring the laid-back island vibe to your wardrobe.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex text-sm">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-volcanic/60 hover:text-volcanic">Home</Link>
            </li>
            <li className="text-volcanic/60">/</li>
            <li>
              <Link href="/apparel" className="text-volcanic/60 hover:text-volcanic">Apparel</Link>
            </li>
            <li className="text-volcanic/60">/</li>
            <li className="text-volcanic">Men's</li>
          </ol>
        </nav>
      </div>

      {/* Main Categories */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* T-Shirts */}
          <SubcategoryCard 
            title="T-shirts" 
            description="Comfort meets island style" 
            imageUrl="https://images.unsplash.com/photo-1576566588028-4147f3842f27" 
            link="/apparel/mens/t-shirts"
          />
          
          {/* Tanks */}
          <SubcategoryCard 
            title="Tanks" 
            description="Perfect for beach days" 
            imageUrl="https://images.unsplash.com/photo-1617952385804-e6e6517db772" 
            link="/apparel/mens/tanks"
          />
          
          {/* Long-Sleeves */}
          <SubcategoryCard 
            title="Long-sleeves" 
            description="For cooler island evenings" 
            imageUrl="https://images.unsplash.com/photo-1589015707036-ca3dfa21a7a1" 
            link="/apparel/mens/long-sleeves"
          />
          
          {/* Sweatshirts */}
          <SubcategoryCard 
            title="Sweatshirts" 
            description="Cozy layering essential" 
            imageUrl="https://images.unsplash.com/photo-1556821840-3a63f95609a7" 
            link="/apparel/mens/sweatshirts"
          />
          
          {/* Hoodies */}
          <SubcategoryCard 
            title="Hoodies" 
            description="Casual comfort with Hawaiian flair" 
            imageUrl="https://images.unsplash.com/photo-1509942774463-acf339cf87d5" 
            link="/apparel/mens/hoodies"
          />
          
          {/* Pants */}
          <SubcategoryCard 
            title="Pants" 
            description="Relaxed fit for everyday wear" 
            imageUrl="https://images.unsplash.com/photo-1584865288642-42078afe6942" 
            link="/apparel/mens/pants"
          />
          
          {/* Shorts */}
          <SubcategoryCard 
            title="Shorts" 
            description="Essential island attire" 
            imageUrl="https://images.unsplash.com/photo-1591195853866-cbb76d9d4ebd" 
            link="/apparel/mens/shorts"
          />
          
          {/* Swim */}
          <SubcategoryCard 
            title="Swim" 
            description="Surf-ready board shorts" 
            imageUrl="https://images.unsplash.com/photo-1603769036905-6e262b188e2f" 
            link="/apparel/mens/swim"
          />
        </div>
      </section>

      {/* Featured Collection */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="bg-ocean/5 rounded-3xl py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-normal text-volcanic mb-3 ${msMadi.className}`}>
              Summer Surf Collection
            </h2>
            <p className="text-volcanic/70 text-lg max-w-2xl mx-auto mb-4">
              Our latest men's collection inspired by the legendary North Shore surf culture
            </p>
            <Link href="/collections/mens-summer-surf" className="text-ocean hover:text-ocean/80 font-medium flex items-center">
              View Collection 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <ProductCard 
              title="North Shore Wave Rider Tee"
              price="$29.99"
              imageUrl="https://images.unsplash.com/photo-1576566588028-4147f3842f27"
              link="/shop/north-shore-wave-rider-tee"
              badge="Bestseller"
            />
            <ProductCard 
              title="Waikiki Surf Board Shorts"
              price="$45.99"
              imageUrl="https://images.unsplash.com/photo-1564859228273-274232fdb516"
              link="/shop/waikiki-surf-board-shorts"
              badge="New"
            />
            <ProductCard 
              title="Diamond Head Sunset Tee"
              price="$34.99"
              imageUrl="https://images.unsplash.com/photo-1622445272461-c6580cab218b"
              link="/shop/diamond-head-sunset-tee"
            />
            <ProductCard 
              title="Hibiscus Paradise Tank"
              price="$25.99"
              imageUrl="https://images.unsplash.com/photo-1617952385804-e6e6517db772"
              link="/shop/hibiscus-paradise-tank"
            />
          </div>
        </section>
      </div>

      {/* Popular Categories */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className={`text-3xl md:text-4xl font-normal text-volcanic mb-8 ${msMadi.className}`}>
          Shop by Style
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StyleCard 
            title="Surf Style" 
            description="Casual beachwear for the ultimate surf lifestyle" 
            imageUrl="https://images.unsplash.com/photo-1537742718206-8d8c32ebd3b2" 
            link="/collections/mens-surf-style"
          />
          <StyleCard 
            title="Tropical Print" 
            description="Bold and vibrant Hawaiian patterns" 
            imageUrl="https://images.unsplash.com/photo-1517236837508-bfb5f0c4c7b1" 
            link="/collections/mens-tropical-print"
          />
          <StyleCard 
            title="Island Casual" 
            description="Effortless everyday island-inspired looks" 
            imageUrl="https://images.unsplash.com/photo-1503341338985-c0477be52513" 
            link="/collections/mens-island-casual"
          />
        </div>
      </section>

      {/* New Arrivals Banner */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl overflow-hidden shadow-lg relative">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4"
              alt="Surfer at sunset"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 relative z-10">
            <div className="px-8 py-20 md:py-32 flex flex-col justify-center items-start max-w-2xl">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 drop-shadow-lg ${msMadi.className}`}>
                New Arrivals
              </h2>
              <p className="text-white/90 text-lg mb-8 drop-shadow">
                Be the first to explore our latest men's arrivals. Limited quantities, unlimited style.
              </p>
              <div>
                <Link 
                  href="/collections/mens-new-arrivals" 
                  className="bg-white/95 hover:bg-white text-volcanic px-8 py-3 rounded-full font-medium inline-block hover:scale-105 transform transition-all duration-300 shadow-lg"
                >
                  Shop New Arrivals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Component for subcategory cards
function SubcategoryCard({ 
  title, 
  description, 
  imageUrl, 
  link 
}: { 
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
    >
      <Link href={link} className="block relative group">
        <div className="relative h-52 overflow-hidden">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1516826957135-700dedea698c';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-5">
            <h3 className="text-xl font-medium text-white mb-1">{title}</h3>
            <p className="text-white/90 text-sm">{description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Component for style category cards
function StyleCard({ 
  title, 
  description, 
  imageUrl, 
  link 
}: { 
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
    >
      <Link href={link} className="block relative group">
        <div className="relative h-64 overflow-hidden">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1516826957135-700dedea698c';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className={`text-3xl md:text-4xl font-normal text-white mb-2 ${msMadi.className}`}>{title}</h3>
            <p className="text-white/90 text-sm md:text-base">{description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Component for product cards
function ProductCard({ 
  title, 
  price, 
  imageUrl, 
  link,
  badge
}: { 
  title: string;
  price: string;
  imageUrl: string;
  link: string;
  badge?: string;
}) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
    >
      <Link href={link}>
        <div className="relative">
          <div className="relative h-64 overflow-hidden">
            <Image 
              src={imageUrl} 
              alt={title} 
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1516826957135-700dedea698c';
              }}
            />
          </div>
          
          {badge && (
            <div className="absolute top-2 right-2">
              <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                badge === 'New' ? 'bg-green-500/90' : 'bg-amber-500/90'
              } text-white`}>
                {badge}
              </span>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-medium text-volcanic mb-1 transition-colors duration-200 group-hover:text-ocean">
            {title}
          </h3>
          <p className="text-volcanic/80 font-medium">{price}</p>
        </div>
      </Link>
    </motion.div>
  );
} 