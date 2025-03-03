'use client';

import { Ms_Madi } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const msMadi = Ms_Madi({ weight: '400', subsets: ['latin'] });

export default function WomensApparelPage() {
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
              Women's Apparel
            </h1>
            <p className="text-lg text-volcanic/80 max-w-2xl">
              Embrace the spirit of aloha with our women's collection. From breezy sundresses to comfortable everyday pieces, each garment is designed to capture the effortless elegance of Hawaiian style.
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
            <li className="text-volcanic">Women's</li>
          </ol>
        </nav>
      </div>

      {/* Main Categories */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* T-Shirts */}
          <SubcategoryCard 
            title="T-shirts" 
            description="Island-inspired graphic tees" 
            imageUrl="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633" 
            link="/apparel/womens/t-shirts"
          />
          
          {/* Tanks */}
          <SubcategoryCard 
            title="Tanks" 
            description="Lightweight & breezy tops" 
            imageUrl="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" 
            link="/apparel/womens/tanks"
          />
          
          {/* Long-Sleeves */}
          <SubcategoryCard 
            title="Long-sleeves" 
            description="For cooler beach evenings" 
            imageUrl="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f" 
            link="/apparel/womens/long-sleeves"
          />
          
          {/* Sweatshirts */}
          <SubcategoryCard 
            title="Sweatshirts" 
            description="Cozy island layers" 
            imageUrl="https://images.unsplash.com/photo-1554568218-0f1715e72254" 
            link="/apparel/womens/sweatshirts"
          />
          
          {/* Hoodies */}
          <SubcategoryCard 
            title="Hoodies" 
            description="Comfort with Hawaiian flair" 
            imageUrl="https://images.unsplash.com/photo-1593158230899-f5f3d061dd75" 
            link="/apparel/womens/hoodies"
          />
          
          {/* Dresses */}
          <SubcategoryCard 
            title="Dresses" 
            description="Flowing island-inspired styles" 
            imageUrl="https://images.unsplash.com/photo-1612722432474-b971cdcea546" 
            link="/apparel/womens/dresses"
          />
          
          {/* Skirts */}
          <SubcategoryCard 
            title="Skirts" 
            description="Casual & elegant options" 
            imageUrl="https://images.unsplash.com/photo-1583496661160-fb5886a773ba" 
            link="/apparel/womens/skirts"
          />
          
          {/* Swim */}
          <SubcategoryCard 
            title="Swim" 
            description="Beach & surf ready styles" 
            imageUrl="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881" 
            link="/apparel/womens/swim"
          />
        </div>
      </section>

      {/* Featured Collection */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="bg-ocean/5 rounded-3xl py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-normal text-volcanic mb-3 ${msMadi.className}`}>
              Island Bloom Collection
            </h2>
            <p className="text-volcanic/70 text-lg max-w-2xl mx-auto mb-4">
              Our newest women's collection inspired by Hawaii's vibrant tropical flowers
            </p>
            <Link href="/collections/womens-island-bloom" className="text-ocean hover:text-ocean/80 font-medium flex items-center">
              View Collection 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <ProductCard 
              title="Hibiscus Tie-Front Tee"
              price="$28.99"
              imageUrl="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633"
              link="/shop/hibiscus-tie-front-tee"
              badge="Bestseller"
            />
            <ProductCard 
              title="Floral Maxi Dress"
              price="$59.99"
              imageUrl="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446"
              link="/shop/floral-maxi-dress"
              badge="New"
            />
            <ProductCard 
              title="Plumeria Wrap Skirt"
              price="$42.99"
              imageUrl="https://images.unsplash.com/photo-1583496661160-fb5886a773ba"
              link="/shop/plumeria-wrap-skirt"
            />
            <ProductCard 
              title="Orchid Print Tank"
              price="$27.99"
              imageUrl="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
              link="/shop/orchid-print-tank"
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
            title="Island Casual" 
            description="Effortless everyday pieces with a tropical touch" 
            imageUrl="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93" 
            link="/collections/womens-island-casual"
          />
          <StyleCard 
            title="Tropical Elegance" 
            description="Elevated styles for island evenings" 
            imageUrl="https://images.unsplash.com/photo-1612336307429-8a898d10e223" 
            link="/collections/womens-tropical-elegance"
          />
          <StyleCard 
            title="Beach Essentials" 
            description="Must-haves for sand, sun and surf" 
            imageUrl="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5" 
            link="/collections/womens-beach-essentials"
          />
        </div>
      </section>

      {/* New Arrivals Banner */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl overflow-hidden shadow-lg relative">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1534113414509-0eec2bfb493f"
              alt="Woman on beach with flowing dress"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 relative z-10">
            <div className="px-8 py-20 md:py-32 flex flex-col justify-center items-start max-w-2xl">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 drop-shadow-lg ${msMadi.className}`}>
                Summer Essentials
              </h2>
              <p className="text-white/90 text-lg mb-8 drop-shadow">
                Discover our newest summer arrivals. Light, breezy pieces inspired by the colors and spirit of Hawaii.
              </p>
              <div>
                <Link 
                  href="/collections/womens-summer-essentials" 
                  className="bg-white/95 hover:bg-white text-volcanic px-8 py-3 rounded-full font-medium inline-block hover:scale-105 transform transition-all duration-300 shadow-lg"
                >
                  Shop the Collection
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
              target.src = 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446';
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
              target.src = 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446';
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
                target.src = 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446';
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