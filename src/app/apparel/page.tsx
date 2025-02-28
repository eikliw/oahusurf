'use client';

import { Ms_Madi } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const msMadi = Ms_Madi({ weight: '400', subsets: ['latin'] });

export default function ApparelPage() {
  return (
    <main className="min-h-screen bg-white pt-14 md:pt-[4.5rem] lg:pt-[4.75rem]">
      {/* Category Header */}
      <section className="relative bg-sage/20 py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
            <path d="M0 100 L0 50 Q25 60 50 50 T100 50 L100 100 Z" fill="currentColor" className="text-ocean"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-normal text-volcanic mb-4 ${msMadi.className}`}>
              Apparel
            </h1>
            <p className="text-lg text-volcanic/80 max-w-2xl">
              Authentic Hawaiian-inspired clothing for the whole family. From casual beachwear to stylish everyday pieces, each item is crafted with the spirit of aloha.
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
            <li className="text-volcanic">Apparel</li>
          </ol>
        </nav>
      </div>

      {/* Main Categories */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Men's */}
          <CategoryCard 
            title="Men's" 
            description="T-shirts, tanks, sweatshirts, pants, and more" 
            imageUrl="https://images.unsplash.com/photo-1516826957135-700dedea698c" 
            link="/apparel/mens"
            subcategories={[
              { name: "T-shirts", link: "/apparel/mens/t-shirts" },
              { name: "Tanks", link: "/apparel/mens/tanks" },
              { name: "Long-sleeves", link: "/apparel/mens/long-sleeves" },
              { name: "Sweatshirts", link: "/apparel/mens/sweatshirts" },
              { name: "Hoodies", link: "/apparel/mens/hoodies" },
              { name: "Pants", link: "/apparel/mens/pants" },
              { name: "Shorts", link: "/apparel/mens/shorts" },
              { name: "Swim", link: "/apparel/mens/swim" }
            ]}
          />
          
          {/* Women's */}
          <CategoryCard 
            title="Women's" 
            description="T-shirts, dresses, swim, and more" 
            imageUrl="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446" 
            link="/apparel/womens"
            subcategories={[
              { name: "T-shirts", link: "/apparel/womens/t-shirts" },
              { name: "Tanks", link: "/apparel/womens/tanks" },
              { name: "Long-sleeves", link: "/apparel/womens/long-sleeves" },
              { name: "Sweatshirts", link: "/apparel/womens/sweatshirts" },
              { name: "Hoodies", link: "/apparel/womens/hoodies" },
              { name: "Pants", link: "/apparel/womens/pants" },
              { name: "Shorts", link: "/apparel/womens/shorts" },
              { name: "Dresses", link: "/apparel/womens/dresses" },
              { name: "Skirts", link: "/apparel/womens/skirts" },
              { name: "Swim", link: "/apparel/womens/swim" }
            ]}
          />
          
          {/* Kids' */}
          <CategoryCard 
            title="Kids'" 
            description="Clothes for the little beach lovers" 
            imageUrl="https://images.unsplash.com/photo-1596870230751-ebdfce98ec42" 
            link="/apparel/kids"
            subcategories={[
              { name: "T-shirts", link: "/apparel/kids/t-shirts" },
              { name: "Tanks", link: "/apparel/kids/tanks" },
              { name: "Pants", link: "/apparel/kids/pants" },
              { name: "Baby Clothes", link: "/apparel/kids/baby-clothes" }
            ]}
          />
        </div>
      </section>

      {/* Featured Products */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="bg-ocean/5 rounded-3xl py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className={`text-4xl md:text-5xl font-normal text-volcanic mb-2 ${msMadi.className}`}>
              Featured Products
            </h2>
            <p className="text-volcanic/70 mb-4">Our best-selling apparel items</p>
            <Link href="/shop" className="text-ocean hover:text-ocean/80 font-medium flex items-center">
              View All 
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
              title="Women's Floral Maxi Dress"
              price="$59.99"
              imageUrl="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446"
              link="/apparel/womens/dresses/floral-maxi"
            />
            <ProductCard 
              title="Kids Aloha Tee"
              price="$19.99"
              imageUrl="https://images.unsplash.com/photo-1596870230751-ebdfce98ec42"
              link="/apparel/kids/t-shirts/aloha-tee"
            />
          </div>
        </section>
      </div>

      {/* Call to Action */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl overflow-hidden shadow-lg relative">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Hawaiian Beach Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent backdrop-blur-[2px]"></div>
          </div>
          <div className="grid grid-cols-1 relative z-10">
            <div className="px-8 py-20 md:py-32 flex flex-col justify-center items-start max-w-2xl">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 drop-shadow-lg ${msMadi.className}`}>
                New Summer Collection
              </h2>
              <p className="text-white/90 text-lg mb-8 drop-shadow">
                Explore our latest arrivals inspired by the vibrant colors and laid-back vibe of Hawaiian summers.
              </p>
              <div>
                <Link 
                  href="/collections/summer" 
                  className="bg-white/95 hover:bg-white text-volcanic px-8 py-3 rounded-full font-medium inline-block hover:scale-105 transform transition-all duration-300 shadow-lg"
                >
                  Shop Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

interface Subcategory {
  name: string;
  link: string;
}

// Component for category cards
function CategoryCard({ 
  title, 
  description, 
  imageUrl, 
  link,
  subcategories
}: { 
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  subcategories: Subcategory[];
}) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
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
              if (title.toLowerCase().includes('men')) {
                target.src = 'https://images.unsplash.com/photo-1516826957135-700dedea698c';
              } else if (title.toLowerCase().includes('women')) {
                target.src = 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446';
              } else {
                target.src = 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42';
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className={`text-3xl md:text-4xl font-normal text-white mb-2 ${msMadi.className}`}>{title}</h3>
            <p className="text-white/90 text-sm md:text-base">{description}</p>
          </div>
        </div>
      </Link>
      <div className="p-6 bg-white">
        <div className="mb-4">
          <h4 className="text-volcanic/90 font-medium mb-2">Categories</h4>
          <div className="w-12 h-0.5 bg-ocean/20"></div>
        </div>
        <div className="min-h-[160px]">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {subcategories.map((subcat) => (
              <li key={subcat.link}>
                <Link 
                  href={subcat.link} 
                  className="text-volcanic/70 hover:text-ocean transition-colors flex items-center text-sm py-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 mr-1.5 text-ocean/40">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  {subcat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
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
    <Link href={link} className="group">
      <motion.div 
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        className="bg-surface rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      >
        <div className="relative h-64 overflow-hidden">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1576566588028-4147f3842f27';
            }}
          />
          {badge && (
            <div className="absolute top-0 right-0 m-2">
              <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                badge === 'New' ? 'bg-palm text-white' : 'bg-ocean text-white'
              }`}>
                {badge}
              </span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-volcanic font-medium text-lg group-hover:text-ocean transition-colors">{title}</h3>
          <p className="text-volcanic/90 font-bold mt-1">{price}</p>
        </div>
      </motion.div>
    </Link>
  );
} 