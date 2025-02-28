'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mr_De_Haviland } from 'next/font/google';
import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/utils/mockData';

const mrDeHaviland = Mr_De_Haviland({ weight: '400', subsets: ['latin'] });

interface Product {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  handle: string;
}

type SortOption = 'featured' | 'low-to-high' | 'high-to-low' | 'newest';

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  const categories = ['all', 'boards', 'apparel', 'accessories', 'wetsuits'];

  useEffect(() => {
    async function loadProducts() {
      const productData = await getProducts();
      // Ensure the product data matches our Product interface
      const typedProducts: Product[] = productData.map((product: any) => ({
        id: product.id || '',
        title: product.title || '',
        price: product.price || '',
        imageUrl: product.imageUrl || '',
        handle: product.handle || ''
      }));
      
      setProducts(typedProducts);
      setFilteredProducts(typedProducts);
      setLoading(false);
    }

    loadProducts();
  }, []);

  // Handle category filter
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      // This is a mock implementation since we don't have actual category data
      // In a real app, you would filter based on product.category === category
      const filtered = products.filter((_, index) => {
        // Simulating different categories by index for demo purposes
        if (category === 'boards') return index % 4 === 0;
        if (category === 'apparel') return index % 4 === 1;
        if (category === 'accessories') return index % 4 === 2;
        if (category === 'wetsuits') return index % 4 === 3;
        return true;
      });
      setFilteredProducts(filtered);
    }
  };

  // Handle sort change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortOption;
    setSortBy(value);
    
    let sorted = [...filteredProducts];
    if (value === 'low-to-high') {
      // Mock sort by price low to high (remove $ and convert to number)
      sorted.sort((a, b) => 
        parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''))
      );
    } else if (value === 'high-to-low') {
      // Mock sort by price high to low
      sorted.sort((a, b) => 
        parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''))
      );
    } else if (value === 'newest') {
      // Mock sort by newest (reverse the array)
      sorted.reverse();
    }
    // 'featured' maintains the original order
    
    setFilteredProducts(sorted);
  };

  return (
    <main className="min-h-screen bg-white pt-28 md:pt-32 lg:pt-36 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200 pb-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <h1 className={`text-3xl md:text-4xl font-bold text-volcanic ${mrDeHaviland.className}`}>
              Surf Shop
            </h1>
            <p className="mt-2 md:mt-0 text-volcanic/70">Find the perfect gear for your island adventures</p>
          </motion.div>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-1 overflow-x-auto pb-2 whitespace-nowrap sm:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 text-sm rounded-full transition ${
                  activeCategory === category
                    ? 'bg-ocean-blue text-white'
                    : 'bg-gray-100 text-volcanic hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-3">
            <label htmlFor="sort" className="text-sm font-medium text-volcanic whitespace-nowrap">
              Sort by:
            </label>
            <select
              id="sort"
              name="sort"
              value={sortBy}
              onChange={handleSortChange}
              className="text-sm text-volcanic border-volcanic/20 rounded-lg focus:ring-ocean-blue focus:border-ocean-blue"
            >
              <option value="featured">Featured</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {/* Product count */}
        <div className="text-sm text-volcanic/70 mb-6">
          Showing {filteredProducts.length} products
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="py-12 flex justify-center">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-ocean-blue/20 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-ocean-blue/20 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-ocean-blue/20 rounded col-span-2"></div>
                    <div className="h-2 bg-ocean-blue/20 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-ocean-blue/20 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                imageUrl={product.imageUrl}
                handle={product.handle}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <svg
              className="mx-auto h-12 w-12 text-volcanic/30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-volcanic">No products found</h3>
            <p className="mt-1 text-sm text-volcanic/70">Try changing your filter or search criteria.</p>
          </div>
        )}
      </div>
    </main>
  );
}