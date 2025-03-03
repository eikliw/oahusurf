'use client';

import { Ms_Madi } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const msMadi = Ms_Madi({ weight: '400', subsets: ['latin'] });

export default function KidsApparelPage() {
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
              Kids' Apparel
            </h1>
            <p className="text-lg text-volcanic/80 max-w-2xl">
              Fun, colorful, and comfortable clothing for your little beach lovers. Our kids' collection brings the joy of Hawaii to the youngest members of your ohana.
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
            <li className="text-volcanic">Kids'</li>
          </ol>
        </nav>
      </div>

      {/* Main Categories */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* T-Shirts */}
          <SubcategoryCard 
            title="T-shirts" 
            description="Playful designs for everyday adventures" 
            imageUrl="https://images.unsplash.com/photo-1543604502-9baab7d8b9d1" 
            link="/apparel/kids/t-shirts"
          />
          
          {/* Tanks */}
          <SubcategoryCard 
            title="Tanks" 
            description="Perfect for warm beach days" 
            imageUrl="https://images.unsplash.com/photo-1581965697791-433f602a352e" 
            link="/apparel/kids/tanks"
          />
          
          {/* Pants */}
          <SubcategoryCard 
            title="Pants" 
            description="Durable and comfortable bottoms" 
            imageUrl="https://images.unsplash.com/photo-1632149523032-38473f0a4447" 
            link="/apparel/kids/pants"
          />
          
          {/* Baby Clothes */}
          <SubcategoryCard 
            title="Baby Clothes" 
            description="Soft, gentle clothing for little ones" 
            imageUrl="https://images.unsplash.com/photo-1522771930-78848d9293e8" 
            link="/apparel/kids/baby-clothes"
          />
        </div>
      </section>

      {/* Featured Collection */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="bg-ocean/5 rounded-3xl py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-normal text-volcanic mb-3 ${msMadi.className}`}>
              Little Islander Collection
            </h2>
            <p className="text-volcanic/70 text-lg max-w-2xl mx-auto mb-4">
              Bright colors and fun designs that capture the magic of Hawaii for kids
            </p>
            <Link href="/collections/kids-little-islander" className="text-ocean hover:text-ocean/80 font-medium flex items-center">
              View Collection 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <ProductCard 
              title="Aloha Turtle Tee"
              price="$19.99"
              imageUrl="https://images.unsplash.com/photo-1543604502-9baab7d8b9d1"
              link="/shop/aloha-turtle-tee"
              badge="Bestseller"
            />
            <ProductCard 
              title="Surf's Up Tank"
              price="$17.99"
              imageUrl="https://images.unsplash.com/photo-1581965697791-433f602a352e"
              link="/shop/surfs-up-tank"
              badge="New"
            />
            <ProductCard 
              title="Island Explorer Pants"
              price="$24.99"
              imageUrl="https://images.unsplash.com/photo-1632149523032-38473f0a4447"
              link="/shop/island-explorer-pants"
            />
            <ProductCard 
              title="Baby Honu Onesie"
              price="$15.99"
              imageUrl="https://images.unsplash.com/photo-1522771930-78848d9293e8"
              link="/shop/baby-honu-onesie"
            />
          </div>
        </section>
      </div>

      {/* Age Groups */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className={`text-3xl md:text-4xl font-normal text-volcanic mb-8 ${msMadi.className}`}>
          Shop by Age
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StyleCard 
            title="Baby (0-24 months)" 
            description="Soft, gentle clothing for our tiniest islanders" 
            imageUrl="https://images.unsplash.com/photo-1587920149371-ac728dd13d3d" 
            link="/collections/kids-baby"
          />
          <StyleCard 
            title="Toddler (2-5 years)" 
            description="Playful designs for curious explorers" 
            imageUrl="https://images.unsplash.com/photo-1471286174890-9c112ffca5b4" 
            link="/collections/kids-toddler"
          />
          <StyleCard 
            title="Kids (6-12 years)" 
            description="Stylish and durable for active beach days" 
            imageUrl="https://images.unsplash.com/photo-1490826153516-b55e1176e1c1" 
            link="/collections/kids-6-12"
          />
        </div>
      </section>

      {/* Adventure Collection Banner */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl overflow-hidden shadow-lg relative">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8"
              alt="Kids playing on beach with Hawaiian toys"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 relative z-10">
            <div className="px-8 py-20 md:py-32 flex flex-col justify-center items-start max-w-2xl">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 drop-shadow-lg ${msMadi.className}`}>
                Little Hawaiian Explorers
              </h2>
              <p className="text-white/90 text-lg mb-8 drop-shadow">
                Adventure-ready gear for beach days, hiking trails, and discovering the natural wonders of Hawaii.
              </p>
              <div>
                <Link 
                  href="/collections/kids-hawaiian-explorers" 
                  className="bg-white/95 hover:bg-white text-volcanic px-8 py-3 rounded-full font-medium inline-block hover:scale-105 transform transition-all duration-300 shadow-lg"
                >
                  Explore the Collection
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
              target.src = 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42';
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
              target.src = 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42';
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
                target.src = 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42';
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