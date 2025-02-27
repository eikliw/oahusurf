import { Rock_Salt } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const rockSalt = Rock_Salt({ weight: '400', subsets: ['latin'] });

export default function CandlesPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16 md:pt-28 lg:pt-32">
      {/* Category Header */}
      <section className="relative bg-palm/10 py-12 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
            <path d="M0 100 L0 50 Q25 60 50 50 T100 50 L100 100 Z" fill="currentColor" className="text-palm"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-volcanic mb-4 ${rockSalt.className}`}>
              Hawaiian Candles
            </h1>
            <p className="text-lg text-volcanic/70 max-w-2xl">
              Transform your space with the tropical aromas of Hawaii. Our handcrafted candles are made with natural soy wax and infused with authentic island scents to bring the essence of paradise into your home.
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
              <Link href="/home-decor" className="text-volcanic/60 hover:text-volcanic">Home Decor</Link>
            </li>
            <li className="text-volcanic/60">/</li>
            <li className="text-volcanic">Candles</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-32">
              <h2 className="font-bold text-lg text-volcanic mb-4">Filters</h2>
              
              {/* Scent Type Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-volcanic mb-3">Scent Type</h3>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-ocean-blue rounded" />
                    <span className="ml-2 text-sm text-volcanic/80">Tropical Floral</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-ocean-blue rounded" />
                    <span className="ml-2 text-sm text-volcanic/80">Ocean Breeze</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-ocean-blue rounded" />
                    <span className="ml-2 text-sm text-volcanic/80">Fruity</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-ocean-blue rounded" />
                    <span className="ml-2 text-sm text-volcanic/80">Woody</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-ocean-blue rounded" />
                    <span className="ml-2 text-sm text-volcanic/80">Coconut</span>
                  </label>
                </div>
              </div>
              
              {/* Size Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-volcanic mb-3">Size</h3>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-ocean-blue rounded" />
                    <span className="ml-2 text-sm text-volcanic/80">Small (4 oz)</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-ocean-blue rounded" />
                    <span className="ml-2 text-sm text-volcanic/80">Medium (8 oz)</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-ocean-blue rounded" />
                    <span className="ml-2 text-sm text-volcanic/80">Large (12 oz)</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-ocean-blue rounded" />
                    <span className="ml-2 text-sm text-volcanic/80">Travel Tin</span>
                  </label>
                </div>
              </div>
              
              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-volcanic mb-3">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-ocean-blue rounded" />
                    <span className="ml-2 text-sm text-volcanic/80">Under $15</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-ocean-blue rounded" />
                    <span className="ml-2 text-sm text-volcanic/80">$15 - $25</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-ocean-blue rounded" />
                    <span className="ml-2 text-sm text-volcanic/80">$25 - $40</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-ocean-blue rounded" />
                    <span className="ml-2 text-sm text-volcanic/80">$40+</span>
                  </label>
                </div>
              </div>
              
              {/* Clear Filters Button */}
              <button className="mt-4 btn-outline-secondary text-sm w-full">
                Clear All Filters
              </button>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="lg:col-span-3">
            {/* Sort and View Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <p className="text-volcanic/70 mb-4 sm:mb-0"><span className="font-medium">12</span> products</p>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <span className="text-sm text-volcanic/70">Sort by:</span>
                  <select className="form-select text-sm border border-volcanic/20 rounded-md bg-white py-1.5 pl-3 pr-8">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                    <option>Best Selling</option>
                  </select>
                </label>
                <div className="flex items-center space-x-2">
                  <button className="p-1.5 border border-volcanic/20 rounded-md bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                    </svg>
                  </button>
                  <button className="p-1.5 border border-volcanic/20 rounded-md bg-white text-volcanic/40">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {candleProducts.map((product, index) => (
                <ProductCard 
                  key={index}
                  product={product}
                />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-1">
                <button className="px-3 py-2 rounded-md border border-volcanic/20 text-volcanic/70 hover:bg-sand/10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button className="px-4 py-2 rounded-md border border-volcanic/20 bg-ocean-blue text-white">1</button>
                <button className="px-4 py-2 rounded-md border border-volcanic/20 text-volcanic hover:bg-sand/10">2</button>
                <button className="px-3 py-2 rounded-md border border-volcanic/20 text-volcanic/70 hover:bg-sand/10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Collection Banner */}
      <section className="bg-sand/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <Image 
                  src="/images/gift-set-candles.jpg" 
                  alt="Candle Gift Set Collection" 
                  fill
                  className="object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1603006905003-be475563bc59';
                  }}
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className={`text-2xl md:text-3xl font-bold text-volcanic mb-4 ${rockSalt.className}`}>
                  Candle Gift Sets
                </h2>
                <p className="text-volcanic/70 mb-8">
                  Our specially curated candle gift sets are the perfect present for loved ones or as a treat for yourself. Each set includes three complementary scents that work harmoniously together to create a sensory journey through the Hawaiian islands.
                </p>
                <Link href="/home-decor/candles/gift-sets" className="btn-primary inline-block self-start">
                  Shop Gift Sets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Candle Care Guide */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-2xl md:text-3xl font-bold text-volcanic mb-6 ${rockSalt.className}`}>
            Candle Care Guide
          </h2>
          <p className="text-volcanic/70 mb-12">
            Get the most out of your Hawaiian candle with these care tips
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-palm/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-palm">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="font-bold text-volcanic mb-2">First Burn</h3>
              <p className="text-sm text-volcanic/70">
                Always burn your candle until the wax melts across the entire surface, about 2-3 hours for the first use.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-palm/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-palm">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-volcanic mb-2">Trim the Wick</h3>
              <p className="text-sm text-volcanic/70">
                Trim the wick to 1/4 inch before each burn to prevent smoking and extend candle life.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-palm/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-palm">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
              </div>
              <h3 className="font-bold text-volcanic mb-2">Safety First</h3>
              <p className="text-sm text-volcanic/70">
                Never leave a burning candle unattended and keep away from drafts, children, and pets.
              </p>
            </div>
          </div>
          
          <Link href="/candle-care" className="btn-secondary inline-block mt-10">
            View Full Candle Care Guide
          </Link>
        </div>
      </section>
    </main>
  );
}

// Mock candle product data
const candleProducts = [
  {
    id: 1,
    name: "Plumeria Paradise",
    price: "$24.99",
    salePrice: null,
    imageUrl: "/images/candle-plumeria.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1596433809252-317304816aa6",
    description: "The sweet, exotic scent of Hawaii's iconic plumeria flower",
    scent: "Tropical Floral",
    size: "8 oz",
    isNew: true,
    isBestseller: false,
    isSale: false,
    rating: 4.9,
    reviewCount: 127
  },
  {
    id: 2,
    name: "Ocean Breeze",
    price: "$29.99",
    salePrice: null,
    imageUrl: "/images/candle-ocean.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1602178561113-aa1cc4076d82",
    description: "Fresh, clean scent inspired by Hawaiian shores",
    scent: "Ocean Breeze",
    size: "12 oz",
    isNew: false,
    isBestseller: true,
    isSale: false,
    rating: 4.8,
    reviewCount: 214
  },
  {
    id: 3,
    name: "Coconut Dream",
    price: "$19.99",
    salePrice: null,
    imageUrl: "/images/candle-coconut.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1636712717827-a70c646d12f2",
    description: "Rich, creamy coconut aroma for a tropical escape",
    scent: "Coconut",
    size: "8 oz",
    isNew: false,
    isBestseller: false,
    isSale: false,
    rating: 4.7,
    reviewCount: 98
  },
  {
    id: 4,
    name: "Mango Sunset",
    price: "$22.99",
    salePrice: null,
    imageUrl: "/images/candle-mango.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1606068498011-35308430b039",
    description: "Sweet, tropical mango with hints of sunset spice",
    scent: "Fruity",
    size: "8 oz",
    isNew: false,
    isBestseller: false,
    isSale: false,
    rating: 4.6,
    reviewCount: 72
  },
  {
    id: 5,
    name: "Kona Coffee",
    price: "$34.99",
    salePrice: "$28.99",
    imageUrl: "/images/candle-coffee.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1612198527426-3c39080916af",
    description: "Rich, robust aroma of Hawaii's famous Kona coffee",
    scent: "Woody",
    size: "12 oz",
    isNew: false,
    isBestseller: false,
    isSale: true,
    rating: 4.9,
    reviewCount: 143
  },
  {
    id: 6,
    name: "Hibiscus Bloom",
    price: "$24.99",
    salePrice: null,
    imageUrl: "/images/candle-hibiscus.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1598630388567-9fdbfd7e928b",
    description: "Delicate floral scent of fresh hibiscus",
    scent: "Tropical Floral",
    size: "8 oz",
    isNew: false,
    isBestseller: false,
    isSale: false,
    rating: 4.7,
    reviewCount: 86
  },
  {
    id: 7,
    name: "Sandalwood Breeze",
    price: "$32.99",
    salePrice: null,
    imageUrl: "/images/candle-sandalwood.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1575376638425-c6163bd01fe5",
    description: "Warm, earthy sandalwood with a touch of ocean air",
    scent: "Woody",
    size: "12 oz",
    isNew: true,
    isBestseller: false,
    isSale: false,
    rating: 4.8,
    reviewCount: 54
  },
  {
    id: 8,
    name: "Pineapple Paradise",
    price: "$19.99",
    salePrice: "$14.99",
    imageUrl: "/images/candle-pineapple.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1595535075259-5caa4bc4d793",
    description: "Sweet, tropical pineapple for an instant vacation feeling",
    scent: "Fruity",
    size: "4 oz",
    isNew: false,
    isBestseller: false,
    isSale: true,
    rating: 4.5,
    reviewCount: 67
  },
  {
    id: 9,
    name: "Tropical Breeze",
    price: "$14.99",
    salePrice: null,
    imageUrl: "/images/candle-tropical.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1610035395897-bae1c3a4ffc5",
    description: "Fresh ocean air with notes of tropical flowers",
    scent: "Ocean Breeze",
    size: "4 oz",
    isNew: false,
    isBestseller: false,
    isSale: false,
    rating: 4.6,
    reviewCount: 42
  },
  {
    id: 10,
    name: "Hawaiian Vanilla",
    price: "$27.99",
    salePrice: null,
    imageUrl: "/images/candle-vanilla.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1603006905003-be475563bc59",
    description: "Creamy, rich vanilla with a tropical twist",
    scent: "Woody",
    size: "8 oz",
    isNew: false,
    isBestseller: true,
    isSale: false,
    rating: 5.0,
    reviewCount: 173
  },
  {
    id: 11,
    name: "Surf Wax",
    price: "$22.99",
    salePrice: null,
    imageUrl: "/images/candle-surf.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d",
    description: "The nostalgic scent of surfboard wax and ocean spray",
    scent: "Ocean Breeze",
    size: "8 oz",
    isNew: false,
    isBestseller: false,
    isSale: false,
    rating: 4.7,
    reviewCount: 89
  },
  {
    id: 12,
    name: "Travel Tin Sampler",
    price: "$39.99",
    salePrice: null,
    imageUrl: "/images/candle-tin-set.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7",
    description: "Set of 3 travel-sized candles in bestselling scents",
    scent: "Mixed",
    size: "Travel Tin",
    isNew: true,
    isBestseller: false,
    isSale: false,
    rating: 4.8,
    reviewCount: 46
  }
];

// Product Card Component
function ProductCard({ product }: { product: any }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg overflow-hidden shadow-md"
    >
      <Link href={`/home-decor/candles/${product.id}`} className="group">
        <div className="relative h-64 overflow-hidden">
          <Image 
            src={product.imageUrl} 
            alt={product.name} 
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = product.fallbackUrl;
            }}
          />
          {/* Product badges */}
          <div className="absolute top-0 left-0 p-2 flex flex-col gap-2">
            {product.isNew && (
              <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-palm/90 text-white">
                New
              </span>
            )}
            {product.isBestseller && (
              <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-ocean-blue/90 text-white">
                Bestseller
              </span>
            )}
            {product.isSale && (
              <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-coral/90 text-white">
                Sale
              </span>
            )}
          </div>
          
          {/* Quick view and add to cart buttons */}
          <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="text-white text-xs bg-volcanic/90 hover:bg-volcanic px-3 py-1.5 rounded">
              Quick View
            </button>
            <button className="text-white text-xs bg-ocean-blue/90 hover:bg-ocean-blue px-3 py-1.5 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/home-decor/candles/${product.id}`} className="group">
          <h3 className="text-volcanic font-medium text-base group-hover:text-ocean-blue transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center mt-1">
          <div className="flex items-center mr-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-volcanic/70">({product.reviewCount})</span>
        </div>
        
        <div className="mt-2">
          <span className="text-sm text-volcanic/70">{product.scent} • {product.size}</span>
        </div>
        
        <div className="flex items-center mt-2">
          {product.salePrice ? (
            <>
              <span className="font-bold text-coral">{product.salePrice}</span>
              <span className="ml-2 text-volcanic/50 line-through">{product.price}</span>
            </>
          ) : (
            <span className="font-bold text-volcanic">{product.price}</span>
          )}
        </div>
        
        <p className="text-xs text-volcanic/70 mt-2 line-clamp-2">{product.description}</p>
      </div>
    </motion.div>
  );
} 