import { Rock_Salt } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const rockSalt = Rock_Salt({ weight: '400', subsets: ['latin'] });

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16 md:pt-28 lg:pt-32">
      {/* Category Header */}
      <section className="relative bg-palm/10 py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
            <path d="M0 100 L0 50 Q25 60 50 50 T100 50 L100 100 Z" fill="currentColor" className="text-palm"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-volcanic mb-4 ${rockSalt.className}`}>
              Accessories
            </h1>
            <p className="text-lg text-volcanic/70 max-w-2xl">
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
            imageUrl="/images/hats-category.jpg" 
            link="/accessories/hats-beanies"
            featuredItems={[
              { name: "Hibiscus Paradise Hat", price: "$24.99", imageUrl: "/images/hat-1.jpg" },
              { name: "Palm Print Bucket Hat", price: "$22.99", imageUrl: "/images/hat-2.jpg" },
              { name: "Surf Beanie", price: "$19.99", imageUrl: "/images/beanie-1.jpg" }
            ]}
          />
          
          {/* Bags */}
          <CategoryCard 
            title="Bags" 
            description="Beach bags, totes, and more for carrying essentials" 
            imageUrl="/images/bags-category.jpg" 
            link="/accessories/bags"
            featuredItems={[
              { name: "Hawaiian Print Tote", price: "$34.99", imageUrl: "/images/bag-1.jpg" },
              { name: "Beach Canvas Bag", price: "$42.99", imageUrl: "/images/bag-2.jpg" },
              { name: "Mini Surf Backpack", price: "$39.99", imageUrl: "/images/bag-3.jpg" }
            ]}
          />
          
          {/* Golf Towels */}
          <CategoryCard 
            title="Golf Towels" 
            description="Premium microfiber towels with Hawaiian designs" 
            imageUrl="/images/golf-towels-category.jpg" 
            link="/accessories/golf-towels"
            featuredItems={[
              { name: "Palm Tree Golf Towel", price: "$18.99", imageUrl: "/images/towel-1.jpg" },
              { name: "Wave Pattern Towel", price: "$16.99", imageUrl: "/images/towel-2.jpg" },
              { name: "Hibiscus Premium Towel", price: "$21.99", imageUrl: "/images/towel-3.jpg" }
            ]}
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-sand/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold text-volcanic mb-3 ${rockSalt.className}`}>
              Bestselling Accessories
            </h2>
            <p className="text-volcanic/70 max-w-2xl mx-auto">
              Our most popular items loved by customers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard 
              title="Hibiscus Paradise Hat"
              price="$24.99"
              imageUrl="/images/hat-1.jpg"
              link="/accessories/hats-beanies/hibiscus-paradise-hat"
              badge="Bestseller"
            />
            <ProductCard 
              title="Hawaiian Print Tote"
              price="$34.99"
              imageUrl="/images/bag-1.jpg"
              link="/accessories/bags/hawaiian-print-tote"
              badge="New"
            />
            <ProductCard 
              title="Palm Tree Golf Towel"
              price="$18.99"
              imageUrl="/images/towel-1.jpg"
              link="/accessories/golf-towels/palm-tree-golf-towel"
            />
            <ProductCard 
              title="Surf Beanie"
              price="$19.99"
              imageUrl="/images/beanie-1.jpg"
              link="/accessories/hats-beanies/surf-beanie"
            />
          </div>
        </div>
      </section>

      {/* Lookbook Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className={`text-3xl font-bold text-volcanic mb-4 ${rockSalt.className}`}>
              Style Guide: Accessorize with Aloha
            </h2>
            <p className="text-volcanic/70 mb-6">
              Our accessories are designed to be versatile and complement our apparel collections. Here's how to style them for maximum impact, whether you're hitting the beach or just want to bring some Hawaiian vibes to your everyday look.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-ocean-blue mt-0.5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Pair our bucket hats with casual tees for a classic beach look</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-ocean-blue mt-0.5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Use our tote bags for beach days, shopping, or as a stylish everyday carry-all</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-ocean-blue mt-0.5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Our golf towels aren't just for golf - they're perfect for beach trips and outdoor activities</span>
              </li>
            </ul>
            <div className="mt-8">
              <Link href="/style-guide" className="btn-secondary inline-block">
                View Full Style Guide
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden">
                <Image 
                  src="/images/accessory-style-1.jpg" 
                  alt="Styling accessories" 
                  width={300} 
                  height={400} 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8';
                  }}
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image 
                  src="/images/accessory-style-2.jpg" 
                  alt="Styling accessories" 
                  width={300} 
                  height={300} 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531';
                  }}
                />
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image 
                src="/images/accessory-style-3.jpg" 
                alt="Styling accessories" 
                width={300} 
                height={700} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978';
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

interface FeaturedItem {
  name: string;
  price: string;
  imageUrl: string;
}

// Component for category cards
function CategoryCard({ 
  title, 
  description, 
  imageUrl, 
  link,
  featuredItems
}: { 
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  featuredItems: FeaturedItem[];
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
        <h4 className="font-medium text-volcanic mb-3">Featured Items</h4>
        <div className="space-y-3">
          {featuredItems.map((item, index) => (
            <Link href={`${link}/${item.name.toLowerCase().replace(/\s+/g, '-')}`} key={index} className="flex items-center group">
              <div className="w-12 h-12 relative rounded overflow-hidden flex-shrink-0">
                <Image 
                  src={item.imageUrl} 
                  alt={item.name} 
                  fill
                  className="object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/100x100?text=${encodeURIComponent(item.name)}`;
                  }}
                />
              </div>
              <div className="ml-3">
                <h5 className="text-sm text-volcanic group-hover:text-ocean-blue transition-colors">{item.name}</h5>
                <p className="text-xs text-volcanic/70">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-volcanic/10">
          <Link 
            href={link} 
            className="text-ocean-blue hover:text-ocean-blue/80 text-sm flex items-center justify-center"
          >
            View All {title}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
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