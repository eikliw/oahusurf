import { Rock_Salt } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const rockSalt = Rock_Salt({ weight: '400', subsets: ['latin'] });

export default function ApparelPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16 md:pt-28 lg:pt-32">
      {/* Category Header */}
      <section className="relative bg-ocean-blue/10 py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
            <path d="M0 100 L0 50 Q25 60 50 50 T100 50 L100 100 Z" fill="currentColor" className="text-ocean-blue"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-volcanic mb-4 ${rockSalt.className}`}>
              Apparel
            </h1>
            <p className="text-lg text-volcanic/70 max-w-2xl">
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
            imageUrl="/images/mens-category.jpg" 
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
            imageUrl="/images/womens-category.jpg" 
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
            imageUrl="/images/kids-category.jpg" 
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
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className={`text-2xl md:text-3xl font-bold text-volcanic mb-2 ${rockSalt.className}`}>
              Featured Products
            </h2>
            <p className="text-volcanic/70">Our best-selling apparel items</p>
          </div>
          <Link href="/shop" className="text-ocean-blue hover:text-ocean-blue/80 font-medium flex items-center">
            View All 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard 
            title="North Shore Wave Rider Tee"
            price="$29.99"
            imageUrl="/images/product1.jpg"
            link="/shop/north-shore-wave-rider-tee"
            badge="Bestseller"
          />
          <ProductCard 
            title="Waikiki Surf Board Shorts"
            price="$45.99"
            imageUrl="/images/product2.jpg"
            link="/shop/waikiki-surf-board-shorts"
            badge="New"
          />
          <ProductCard 
            title="Women's Floral Maxi Dress"
            price="$59.99"
            imageUrl="/images/womens-dress.jpg"
            link="/apparel/womens/dresses/floral-maxi"
          />
          <ProductCard 
            title="Kids Aloha Tee"
            price="$19.99"
            imageUrl="/images/kids-tee.jpg"
            link="/apparel/kids/t-shirts/aloha-tee"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-ocean-blue/10 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className={`text-2xl md:text-3xl font-bold text-volcanic mb-4 ${rockSalt.className}`}>
                New Summer Collection
              </h2>
              <p className="text-volcanic/70 mb-6">
                Explore our latest arrivals inspired by the vibrant colors and laid-back vibe of Hawaiian summers.
              </p>
              <div>
                <Link href="/collections/summer" className="btn-primary inline-block">
                  Shop Collection
                </Link>
              </div>
            </div>
            <div className="relative min-h-[300px]">
              <Image
                src="/images/summer-collection.jpg"
                alt="Summer Collection"
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1543085614-082ddc45acf4';
                }}
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
      className="bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <Link href={link} className="block">
        <div className="relative h-48 overflow-hidden">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://via.placeholder.com/500x300?text=${encodeURIComponent(title)}`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className={`text-2xl font-bold text-white mb-1 ${rockSalt.className}`}>{title}</h3>
            <p className="text-white/90">{description}</p>
          </div>
        </div>
      </Link>
      <div className="p-4 bg-white">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
          {subcategories.map((subcat) => (
            <li key={subcat.link}>
              <Link 
                href={subcat.link} 
                className="text-volcanic/80 hover:text-ocean-blue transition-colors flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                {subcat.name}
              </Link>
            </li>
          ))}
        </ul>
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
        className="bg-white rounded-lg overflow-hidden shadow-md"
      >
        <div className="relative h-64 overflow-hidden">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://via.placeholder.com/400x500?text=${encodeURIComponent(title)}`;
            }}
          />
          {badge && (
            <div className="absolute top-0 right-0 m-2">
              <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${badge === 'New' ? 'bg-palm/90 text-white' : 'bg-ocean-blue/90 text-white'}`}>
                {badge}
              </span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-volcanic font-medium text-base group-hover:text-ocean-blue transition-colors">{title}</h3>
          <p className="text-volcanic font-bold mt-1">{price}</p>
        </div>
      </motion.div>
    </Link>
  );
} 