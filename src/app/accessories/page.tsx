'use client';

import { Ms_Madi } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const msMadi = Ms_Madi({ weight: '400', subsets: ['latin'] });

export default function AccessoriesPage() {
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
              Accessories
            </h1>
            <p className="text-lg text-volcanic/80 max-w-2xl">
              Complete your Hawaiian look with our collection of stylish accessories. Each piece is designed to complement your beach lifestyle and bring a touch of aloha to your everyday outfits.
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
            <li className="text-volcanic">Accessories</li>
          </ol>
        </nav>
      </div>

      {/* Main Categories */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hats & Beanies */}
          <CategoryCard 
            title="Hats & Beanies" 
            description="Stylish headwear for sun protection and beach style" 
            imageUrl="https://images.unsplash.com/photo-1521369909029-2afed882baee" 
            link="/accessories/hats-beanies"
            subcategories={[
              { name: "Bucket Hats", link: "/accessories/hats-beanies/bucket-hats" },
              { name: "Baseball Caps", link: "/accessories/hats-beanies/baseball-caps" },
              { name: "Beanies", link: "/accessories/hats-beanies/beanies" },
              { name: "Visors", link: "/accessories/hats-beanies/visors" },
              { name: "Straw Hats", link: "/accessories/hats-beanies/straw-hats" }
            ]}
          />
          
          {/* Bags */}
          <CategoryCard 
            title="Bags" 
            description="Beach bags, totes, and more for carrying essentials" 
            imageUrl="https://images.unsplash.com/photo-1590874103328-eac38a683ce7" 
            link="/accessories/bags"
            subcategories={[
              { name: "Beach Bags", link: "/accessories/bags/beach-bags" },
              { name: "Totes", link: "/accessories/bags/totes" },
              { name: "Backpacks", link: "/accessories/bags/backpacks" },
              { name: "Pouches", link: "/accessories/bags/pouches" },
              { name: "Wallets", link: "/accessories/bags/wallets" }
            ]}
          />
          
          {/* Golf Accessories */}
          <CategoryCard 
            title="Golf Accessories" 
            description="Premium golf towels and accessories with Hawaiian designs" 
            imageUrl="https://images.unsplash.com/photo-1535131749006-b7f58c99034b" 
            link="/accessories/golf"
            subcategories={[
              { name: "Golf Towels", link: "/accessories/golf/towels" },
              { name: "Club Covers", link: "/accessories/golf/club-covers" },
              { name: "Golf Bags", link: "/accessories/golf/bags" },
              { name: "Accessories", link: "/accessories/golf/accessories" }
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
            <p className="text-volcanic/70 mb-4">Our best-selling accessories</p>
            <Link href="/shop" className="text-ocean hover:text-ocean/80 font-medium flex items-center">
              View All 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <ProductCard 
              title="Hibiscus Paradise Hat"
              price="$24.99"
              imageUrl="https://images.unsplash.com/photo-1521369909029-2afed882baee"
              link="/accessories/hats-beanies/hibiscus-paradise-hat"
              badge="Bestseller"
            />
            <ProductCard 
              title="Hawaiian Print Tote"
              price="$34.99"
              imageUrl="https://images.unsplash.com/photo-1590874103328-eac38a683ce7"
              link="/accessories/bags/hawaiian-print-tote"
              badge="New"
            />
            <ProductCard 
              title="Palm Tree Golf Towel"
              price="$18.99"
              imageUrl="https://images.unsplash.com/photo-1535131749006-b7f58c99034b"
              link="/accessories/golf/palm-tree-towel"
            />
            <ProductCard 
              title="Surf Beanie"
              price="$19.99"
              imageUrl="https://images.unsplash.com/photo-1576871337622-98d48d1cf531"
              link="/accessories/hats-beanies/surf-beanie"
            />
          </div>
        </section>
      </div>

      {/* Style Guide Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`text-4xl md:text-5xl font-normal text-volcanic mb-6 ${msMadi.className}`}>
              Style Guide: Accessorize with Aloha
            </h2>
            <p className="text-lg text-volcanic/80 mb-8">
              Our accessories are designed to be versatile and complement our apparel collections. Here's how to style them for maximum impact, whether you're hitting the beach or just want to bring some Hawaiian vibes to your everyday look.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-ocean mt-0.5 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-volcanic/80">Pair our bucket hats with casual tees for a classic beach look</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-ocean mt-0.5 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-volcanic/80">Use our tote bags for beach days, shopping, or as a stylish everyday carry-all</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-ocean mt-0.5 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-volcanic/80">Our golf accessories bring Hawaiian style to the course while maintaining professional functionality</span>
              </li>
            </ul>
            <div className="mt-8">
              <Link href="/style-guide" className="btn-primary inline-block">
                View Full Style Guide
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8" 
                  alt="Styling accessories" 
                  width={300} 
                  height={400} 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1576871337622-98d48d1cf531" 
                  alt="Styling accessories" 
                  width={300} 
                  height={300} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-full">
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
                alt="Styling accessories" 
                width={300} 
                height={700} 
                className="w-full h-full object-cover"
              />
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