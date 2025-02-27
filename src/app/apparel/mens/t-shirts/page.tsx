import { Rock_Salt } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const rockSalt = Rock_Salt({ weight: '400', subsets: ['latin'] });

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
    <main className="min-h-screen bg-white pt-24 pb-16 md:pt-28 lg:pt-32">
      {/* Category Header */}
      <section className="relative bg-ocean-blue/10 py-8 lg:py-12 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className={`text-3xl md:text-4xl font-bold text-volcanic mb-2 ${rockSalt.className}`}>
              Men's T-Shirts
            </h1>
            <p className="text-base text-volcanic/70 max-w-2xl">
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

      {/* Product Grid with Filters */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Filter Categories */}
              <FilterSection title="Size">
                <div className="grid grid-cols-2 gap-2">
                  {filterOptions.sizes.map((size) => (
                    <FilterCheckbox key={size} id={`size-${size}`} label={size} />
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Color">
                <div className="grid grid-cols-2 gap-2">
                  {filterOptions.colors.map((color) => (
                    <FilterCheckbox key={color} id={`color-${color}`} label={color} />
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Price">
                <div className="space-y-2">
                  {filterOptions.priceRanges.map((range) => (
                    <FilterCheckbox key={range.value} id={`price-${range.value}`} label={range.label} />
                  ))}
                </div>
              </FilterSection>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {/* Sort/Filter Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <p className="text-volcanic/70 mb-4 sm:mb-0">{tshirts.length} products</p>
              
              <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                {/* Mobile Filter Button */}
                <button className="lg:hidden flex items-center justify-center px-4 py-2 border border-volcanic/20 rounded-lg text-volcanic">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                  </svg>
                  Filter
                </button>
                
                {/* Sort Dropdown */}
                <div className="relative flex-grow sm:flex-grow-0">
                  <select className="appearance-none block w-full px-4 py-2 pr-8 border border-volcanic/20 rounded-lg text-volcanic bg-white focus:outline-none focus:ring-1 focus:ring-ocean-blue focus:border-ocean-blue">
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

            {/* Products */}
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
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className={`text-2xl md:text-3xl font-bold text-volcanic mb-6 ${rockSalt.className}`}>
          Recently Viewed
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
            title="Hibiscus Paradise Hat"
            price="$24.99"
            imageUrl="/images/product4.jpg"
            link="/accessories/hats-beanies/hibiscus-paradise-hat"
            compact
          />
        </div>
      </section>
    </main>
  );
}

// Component for product cards
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
    <Link href={link} className="group">
      <motion.div 
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-lg overflow-hidden shadow-md h-full"
      >
        <div className={`relative ${compact ? 'h-48' : 'h-64'} overflow-hidden`}>
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
          <h3 className="text-volcanic font-medium text-base group-hover:text-ocean-blue transition-colors">
            {title}
          </h3>
          <p className="text-volcanic font-bold mt-1">{price}</p>
          
          {!compact && colors && colors.length > 0 && (
            <div className="mt-3">
              <div className="flex items-center space-x-1">
                {colors.slice(0, 3).map((color) => (
                  <div 
                    key={color} 
                    className="w-4 h-4 rounded-full border border-gray-200" 
                    style={{ 
                      backgroundColor: 
                        color.toLowerCase() === 'blue' ? '#3B82F6' : 
                        color.toLowerCase() === 'black' ? '#1F2937' :
                        color.toLowerCase() === 'white' ? '#FFFFFF' :
                        color.toLowerCase() === 'green' ? '#10B981' :
                        color.toLowerCase() === 'yellow' ? '#F59E0B' :
                        color.toLowerCase() === 'gray' ? '#6B7280' :
                        color.toLowerCase() === 'navy' ? '#1E3A8A' :
                        color.toLowerCase() === 'red' ? '#EF4444' :
                        color.toLowerCase() === 'sand' ? '#D4B996' :
                        color.toLowerCase() === 'tan' ? '#D2B48C' :
                        color.toLowerCase() === 'light blue' ? '#93C5FD' :
                        '#CBD5E1' // default
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
        className="h-4 w-4 rounded border-volcanic/20 text-ocean-blue focus:ring-ocean-blue"
      />
      <label htmlFor={id} className="ml-2 text-sm text-volcanic/80">
        {label}
      </label>
    </div>
  );
} 