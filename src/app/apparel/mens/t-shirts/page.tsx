'use client';

import { Ms_Madi } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const msMadi = Ms_Madi({ weight: '400', subsets: ['latin'] });

// Mock data for t-shirts - in a real app, this would come from your API
const tshirts = [
  {
    id: 'tshirt1',
    title: 'North Shore Wave Rider Tee',
    description: 'Comfortable cotton tee with our signature North Shore wave design',
    price: '$29.99',
    imageUrl: '/images/product1.jpg',
    colors: ['Blue', 'Black', 'White'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    badge: 'Bestseller',
    handle: 'north-shore-wave-rider-tee'
  },
  {
    id: 'tshirt2',
    title: 'Aloha Vibes Graphic Tee',
    description: 'Show your island spirit with this vibrant graphic tee',
    price: '$27.99',
    imageUrl: '/images/mens-tshirt-2.jpg',
    colors: ['Green', 'Yellow', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL'],
    handle: 'aloha-vibes-graphic-tee'
  },
  {
    id: 'tshirt3',
    title: 'Surfboard Collection Tee',
    description: 'Vintage-inspired tee featuring classic Hawaiian surfboards',
    price: '$32.99',
    imageUrl: '/images/mens-tshirt-3.jpg',
    colors: ['White', 'Navy', 'Sand'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    badge: 'New',
    handle: 'surfboard-collection-tee'
  },
  {
    id: 'tshirt4',
    title: 'Diamond Head Sunset Tee',
    description: 'Stylish tee with a stunning Diamond Head sunset print',
    price: '$34.99',
    imageUrl: '/images/mens-tshirt-4.jpg',
    colors: ['Black', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
    handle: 'diamond-head-sunset-tee'
  },
  {
    id: 'tshirt5',
    title: 'Tribal Turtle Tee',
    description: 'Celebrate Hawaiian wildlife with this tribal turtle design',
    price: '$29.99',
    imageUrl: '/images/mens-tshirt-5.jpg',
    colors: ['Blue', 'Green', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    handle: 'tribal-turtle-tee'
  },
  {
    id: 'tshirt6',
    title: 'Hibiscus Paradise Tee',
    description: 'Breathable cotton tee with a beautiful hibiscus pattern',
    price: '$26.99',
    imageUrl: '/images/mens-tshirt-6.jpg',
    colors: ['White', 'Blue', 'Red'],
    sizes: ['S', 'M', 'L', 'XL'],
    handle: 'hibiscus-paradise-tee'
  },
  {
    id: 'tshirt7',
    title: "Surf's Up Vintage Tee",
    description: "Classic vintage-style tee with a surf's up print",
    price: '$28.99',
    imageUrl: '/images/mens-tshirt-7.jpg',
    colors: ['Gray', 'Tan', 'Light Blue'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    handle: 'surfs-up-vintage-tee'
  },
  {
    id: 'tshirt8',
    title: 'Pineapple Aloha Tee',
    description: 'Fun and tropical pineapple design for beach days',
    price: '$25.99',
    imageUrl: '/images/mens-tshirt-8.jpg',
    colors: ['Yellow', 'White', 'Green'],
    sizes: ['S', 'M', 'L', 'XL'],
    handle: 'pineapple-aloha-tee'
  }
];

// Filter options - these would be dynamic in a real app
const filterOptions = {
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  colors: ['Black', 'White', 'Blue', 'Green', 'Yellow', 'Red', 'Gray', 'Navy', 'Tan'],
  priceRanges: [
    { label: 'Under $25', value: 'under-25' },
    { label: '$25 - $30', value: '25-30' },
    { label: '$30 - $35', value: '30-35' },
    { label: 'Over $35', value: 'over-35' }
  ],
  sortOptions: [
    { label: 'Featured', value: 'featured' },
    { label: 'Newest', value: 'newest' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' }
  ]
};

export default function MensTShirtsPage() {
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
              Men's T-Shirts
            </h1>
            <p className="text-lg text-volcanic/80 max-w-2xl">
              Discover our collection of comfortable, stylish Hawaiian-inspired t-shirts for men.
              Perfect for beach days, casual outings, or just lounging in island style.
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
            <li>
              <Link href="/apparel/mens" className="text-volcanic/60 hover:text-volcanic">Men's</Link>
            </li>
            <li className="text-volcanic/60">/</li>
            <li className="text-volcanic">T-Shirts</li>
          </ol>
        </nav>
      </div>

      {/* Product Filters and Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-xl shadow-sm p-6 border border-volcanic/10">
              <h2 className={`text-2xl font-normal text-volcanic mb-6 ${msMadi.className}`}>Filters</h2>
              
              {/* Size Filter */}
              <FilterSection title="Size">
                <div className="space-y-2">
                  {filterOptions.sizes.map((size) => (
                    <FilterCheckbox key={size} id={`size-${size}`} label={size} />
                  ))}
                </div>
              </FilterSection>
              
              <div className="my-4"></div>
              
              {/* Color Filter */}
              <FilterSection title="Color">
                <div className="space-y-2">
                  {filterOptions.colors.map((color) => (
                    <FilterCheckbox key={color} id={`color-${color.toLowerCase()}`} label={color} />
                  ))}
                </div>
              </FilterSection>
              
              <div className="my-4"></div>
              
              {/* Price Range Filter */}
              <FilterSection title="Price Range">
                <div className="space-y-2">
                  {filterOptions.priceRanges.map((range) => (
                    <FilterCheckbox key={range.value} id={`price-${range.value}`} label={range.label} />
                  ))}
                </div>
              </FilterSection>
              
              <div className="mt-6">
                <button className="w-full bg-ocean text-white hover:bg-ocean-dark py-2 px-4 rounded-lg transition-colors">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
          
          {/* Products */}
          <div className="flex-grow">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-volcanic/70">Showing {tshirts.length} products</p>
              
              <div className="flex gap-4 items-center">
                <label htmlFor="sort" className="text-sm text-volcanic/70 whitespace-nowrap hidden sm:inline">Sort by:</label>
                
                {/* Sort Dropdown */}
                <div className="relative flex-grow sm:flex-grow-0">
                  <select 
                    id="sort"
                    className="appearance-none block w-full px-4 py-2 pr-8 border border-volcanic/20 rounded-lg text-volcanic bg-white focus:outline-none focus:ring-1 focus:ring-ocean focus:border-ocean"
                  >
                    {filterOptions.sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-volcanic">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tshirts.map((product) => (
                <ProductCard 
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  link={`/shop/${product.handle}`}
                  badge={product.badge}
                  colors={product.colors}
                  sizes={product.sizes}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recently Viewed */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="bg-ocean/5 rounded-3xl py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className={`text-4xl md:text-5xl font-normal text-volcanic mb-2 ${msMadi.className}`}>
              You Might Also Like
            </h2>
            <p className="text-volcanic/70 mb-4">Other popular styles in our collection</p>
            <Link href="/apparel/mens" className="text-ocean hover:text-ocean/80 font-medium flex items-center">
              View All Men's Apparel
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
            <ProductCard 
              title="North Shore Wave Rider Tee"
              price="$29.99"
              imageUrl="/images/product1.jpg"
              link="/shop/north-shore-wave-rider-tee"
              badge="Bestseller"
              compact
            />
            <ProductCard 
              title="Waikiki Surf Board Shorts"
              price="$45.99"
              imageUrl="/images/product2.jpg"
              link="/shop/waikiki-surf-board-shorts"
              compact
            />
            <ProductCard 
              title="Aloha Spirit Rash Guard"
              price="$35.99"
              imageUrl="/images/product3.jpg"
              link="/shop/aloha-spirit-rash-guard"
              compact
            />
            <ProductCard 
              title="Diamond Head Sunset Tee"
              price="$34.99"
              imageUrl="/images/mens-tshirt-4.jpg"
              link="/shop/diamond-head-sunset-tee"
              compact
            />
          </div>
        </section>
      </div>
    </main>
  );
}

// Product Card Component
function ProductCard({ 
  title, 
  price, 
  imageUrl, 
  link,
  badge,
  colors,
  sizes,
  compact = false
}: { 
  title: string;
  price: string;
  imageUrl: string;
  link: string;
  badge?: string;
  colors?: string[];
  sizes?: string[];
  compact?: boolean;
}) {
  return (
    <Link href={link}>
      <motion.div 
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
      >
        <div className="relative">
          <div className={`relative ${compact ? 'h-48' : 'h-64'} overflow-hidden`}>
            <Image 
              src={imageUrl} 
              alt={title} 
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1576566588028-4147f3842f27';
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
          
          {!compact && colors && colors.length > 0 && (
            <div className="mt-2">
              <div className="flex items-center space-x-1">
                {colors.slice(0, 3).map((color) => (
                  <div 
                    key={color}
                    className="w-3 h-3 rounded-full border border-gray-200" 
                    style={{ 
                      backgroundColor: color.toLowerCase() === 'white' ? 'white' : 
                                       color.toLowerCase() === 'black' ? 'black' : 
                                       color.toLowerCase() === 'blue' ? '#1a73e8' : 
                                       color.toLowerCase() === 'red' ? '#e53935' : 
                                       color.toLowerCase() === 'green' ? '#43a047' : 
                                       color.toLowerCase() === 'yellow' ? '#fdd835' : 
                                       color.toLowerCase() === 'gray' ? '#757575' : 
                                       color.toLowerCase() === 'navy' ? '#0d47a1' : 
                                       color.toLowerCase() === 'tan' ? '#d7ccc8' : 
                                       color.toLowerCase() === 'sand' ? '#f5f5dc' : 
                                       '#ddd'
                    }}
                  ></div>
                ))}
                {colors.length > 3 && (
                  <span className="text-xs text-volcanic/60">+{colors.length - 3}</span>
                )}
              </div>
            </div>
          )}
          
          {!compact && sizes && sizes.length > 0 && (
            <div className="mt-2">
              <div className="flex items-center flex-wrap gap-1">
                {sizes.map((size) => (
                  <span key={size} className="inline-block px-1.5 text-xs bg-volcanic/5 text-volcanic/70 rounded">
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
}

// Component for filter sections
function FilterSection({ 
  title, 
  children 
}: { 
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-volcanic/10 pb-4">
      <h3 className="font-medium text-volcanic mb-3">{title}</h3>
      <div className="pl-1">
        {children}
      </div>
    </div>
  );
}

// Component for filter checkboxes
function FilterCheckbox({ 
  id, 
  label 
}: { 
  id: string;
  label: string;
}) {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        className="h-4 w-4 rounded border-volcanic/20 text-ocean focus:ring-ocean"
      />
      <label htmlFor={id} className="ml-2 text-sm text-volcanic/80">
        {label}
      </label>
    </div>
  );
} 