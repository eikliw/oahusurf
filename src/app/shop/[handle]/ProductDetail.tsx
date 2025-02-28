'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mr_De_Haviland } from 'next/font/google';
import Image from 'next/image';
import { Product } from '@/utils/mockData';

const mrDeHaviland = Mr_De_Haviland({ weight: '400', subsets: ['latin'] });

interface ProductDetailProps {
  product: Product | null;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState<string>(product?.images?.[0]?.url || '');
  const [selectedVariant, setSelectedVariant] = useState<string>(product?.variants?.[0]?.id || '');
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <p className="text-volcanic">Product not found</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-24 pb-16 md:pt-28 lg:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="hidden md:flex mb-6 text-sm font-medium">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="/" className="text-volcanic/60 hover:text-volcanic">Home</a>
            </li>
            <li className="text-volcanic/60">/</li>
            <li>
              <a href="/shop" className="text-volcanic/60 hover:text-volcanic">Shop</a>
            </li>
            <li className="text-volcanic/60">/</li>
            <li className="text-volcanic">{product.title}</li>
          </ol>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
          {/* Image gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col mb-8 lg:mb-0"
          >
            {/* Main image */}
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
              <Image
                src={selectedImage}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Image selector */}
            <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-4">
              {product.images?.map((image) => (
                <button
                  key={image.url}
                  onClick={() => setSelectedImage(image.url)}
                  className={`relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden border ${selectedImage === image.url ? 'border-ocean-blue' : 'border-gray-200'}`}
                >
                  <Image
                    src={image.url}
                    alt={image.altText || product.title}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 px-0 sm:mt-10 lg:mt-0"
          >
            <h1 className={`text-2xl sm:text-3xl font-bold text-volcanic ${mrDeHaviland.className}`}>
              {product.title}
            </h1>
            <div className="mt-3 flex items-center">
              <p className="text-2xl sm:text-3xl text-volcanic font-bold">{product.price}</p>
              <div className="ml-4 px-2 py-1 bg-palm/10 text-palm rounded text-sm font-semibold">
                In stock
              </div>
            </div>

            {/* Rating */}
            <div className="mt-4 flex items-center">
              <div className="flex text-sand">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="ml-2 text-sm text-volcanic/70">4.9 (128 reviews)</p>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-volcanic">Description</h3>
              <div className="mt-2 prose prose-sm text-volcanic/80 max-w-none">
                <p>{product.description}</p>
              </div>
            </div>

            {/* Features */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-volcanic">Features</h3>
              <div className="mt-2">
                <ul className="list-disc pl-5 space-y-2 text-sm text-volcanic/80">
                  <li>Premium quality materials</li>
                  <li>Handcrafted in Hawaii</li>
                  <li>100% sustainable production</li>
                  <li>Perfect for beach and casual wear</li>
                </ul>
              </div>
            </div>

            {/* Variants */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-volcanic">Options</h3>
              <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {product.variants?.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    disabled={!variant.availableForSale}
                    className={`px-4 py-2 text-sm rounded-lg border ${selectedVariant === variant.id ? 'border-ocean-blue bg-ocean-blue/10 ring-2 ring-ocean-blue/50' : 'border-volcanic/20'} ${!variant.availableForSale ? 'opacity-50 cursor-not-allowed' : 'hover:border-ocean-blue/50'}`}
                  >
                    <span className="text-volcanic">{variant.title}</span>
                    <span className="block text-volcanic/80 text-xs">{variant.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-volcanic">Quantity</h3>
              <div className="mt-2 flex items-center">
                <button
                  onClick={decrementQuantity}
                  className="p-2 border border-volcanic/20 rounded-l-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                  </svg>
                </button>
                <div className="w-12 text-center border-t border-b border-volcanic/20 py-2">
                  {quantity}
                </div>
                <button
                  onClick={incrementQuantity}
                  className="p-2 border border-volcanic/20 rounded-r-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                className="btn-primary w-full flex items-center justify-center"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="btn-secondary w-full flex items-center justify-center"
              >
                Buy Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 