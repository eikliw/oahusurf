'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Rock_Salt } from 'next/font/google';
import Image from 'next/image';
import { getProductByHandle } from '@/utils/mockData';

const rockSalt = Rock_Salt({ weight: '400', subsets: ['latin'] });

interface ProductPageProps {
  params: {
    handle: string;
  };
}

interface ProductVariant {
  id: string;
  title: string;
  price: string;
  availableForSale: boolean;
}

interface ProductImage {
  url: string;
  altText: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  images: ProductImage[];
  variants: ProductVariant[];
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedVariant, setSelectedVariant] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function loadProduct() {
      const productData = await getProductByHandle(params.handle);
      if (productData) {
        // Type assertion to match our interface
        const typedProduct: Product = {
          id: productData.id || '',
          title: productData.title || '',
          description: productData.description || '',
          price: productData.price || '',
          images: productData.images || [],
          variants: productData.variants || []
        };
        
        setProduct(typedProduct);
        setSelectedImage(typedProduct.images[0]?.url || '');
        setSelectedVariant(typedProduct.variants[0]?.id || '');
      }
      setLoading(false);
    }

    loadProduct();
  }, [params.handle]);

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <p className="text-volcanic">Loading product...</p>
      </div>
    );
  }

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
              {product.images.map((image) => (
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
            <h1 className={`text-2xl sm:text-3xl font-bold text-volcanic ${rockSalt.className}`}>
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
                {product.variants.map((variant) => (
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

            {/* Trust badges */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="flex flex-col items-center text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-ocean-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                  <p className="mt-2 text-xs text-volcanic">Free Shipping</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-ocean-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="mt-2 text-xs text-volcanic">Quality Guarantee</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-ocean-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  <p className="mt-2 text-xs text-volcanic">30-Day Returns</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-ocean-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <p className="mt-2 text-xs text-volcanic">Secure Checkout</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}