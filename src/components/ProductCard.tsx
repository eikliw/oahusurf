'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  handle: string;
}

export default function ProductCard({ id, title, price, imageUrl, handle }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      <Link href={`/shop/${handle}`} className="block">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={500}
            className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-200"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-volcanic">{title}</h3>
            <p className="mt-1 text-sm text-volcanic/80">{price}</p>
          </div>
          <button className="btn-primary text-sm py-2 px-4">
            View Details
          </button>
        </div>
      </Link>
    </motion.div>
  );
}