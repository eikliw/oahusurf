'use client';

import { motion } from 'framer-motion';
import { Ms_Madi, Roboto } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const msMadi = Ms_Madi({ weight: '400', subsets: ['latin'] });
const roboto = Roboto({ weight: ['400'], subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <main id="main-content" className="min-h-screen bg-white">
        {/* Hero section with video background */}
        <section 
          className="relative bg-ocean-blue/30 overflow-hidden h-screen flex items-center"
          aria-label="Welcome to Oahu Surf Co"
        >
          <div className="absolute inset-0 z-0">
            {/* Video Background */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85"
              aria-hidden="true"
              id="hero-video"
            >
              <source src="/videos/oahu2.webm" type="video/webm" />
              <track 
                kind="captions" 
                src="/videos/oahu2-captions.vtt" 
                srcLang="en" 
                label="English" 
              />
            </video>
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-32 md:pb-36">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <h1 className={`text-6xl md:text-6xl lg:text-7xl font-normal text-white mb-8 drop-shadow-lg leading-[1.1] ${msMadi.className}`}>
                Aloha Spirit<br/>
                in Every Stitch
              </h1>
              <p className={`text-lg md:text-xl text-white mb-8 drop-shadow max-w-lg ${roboto.className}`}>
                Discover authentic Hawaiian-inspired apparel and accessories that bring the spirit of the islands to your everyday life.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/shop" className="btn-primary inline-block">
                  Shop Now
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white">
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-bounce">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </section>

        {/* Main categories section */}
        <section 
          className="py-16 md:py-24 bg-background"
          aria-label="Shop by Category"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-5xl md:text-6xl lg:text-7xl font-normal text-text-dark mb-4 ${msMadi.className}`}>
                Shop by Category
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Explore our curated collections of Hawaiian-inspired merchandise, from stylish apparel to unique home décor
              </p>
            </div>

            {/* Main categories grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Apparel */}
              <CategoryCard 
                title="Apparel"
                description="Stylish clothing for men, women, and kids"
                imageUrl="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04"
                link="/apparel"
              />

              {/* Accessories */}
              <CategoryCard 
                title="Accessories"
                description="Hats, bags, and more to complete your look"
                imageUrl="https://images.unsplash.com/photo-1523779105320-d1cd346ff52b"
                link="/accessories"
              />

              {/* Home Decor */}
              <CategoryCard 
                title="Home Decor"
                description="Bring the aloha spirit into your home"
                imageUrl="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e"
                link="/home-decor"
              />
            </div>
          </div>
        </section>

        {/* Spirit of Aloha Section */}
        <section 
          className="py-16 md:py-24 bg-sand overflow-hidden relative"
          aria-label="The Spirit of Aloha"
        >
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M44.5,-76.3C58.3,-70.2,70.5,-59.7,77.7,-46.3C84.9,-32.9,87.1,-16.5,85.9,-0.7C84.8,15.1,80.3,30.1,73,43.5C65.7,56.8,55.7,68.4,42.9,74.7C30.1,81,15.1,82,0.6,81.1C-13.9,80.1,-27.9,77.3,-40.5,70.5C-53.1,63.7,-64.3,53,-71.9,39.9C-79.4,26.8,-83.3,13.4,-82.9,0.2C-82.6,-13,-78,-26,-71.2,-38.2C-64.4,-50.3,-55.3,-61.6,-43.4,-68.5C-31.6,-75.4,-15.8,-78,-0.2,-77.7C15.5,-77.3,30.8,-82.3,44.5,-76.3Z" transform="translate(100 100)" className="text-ocean" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M36.3,-61.2C47.9,-56.3,58.8,-47.5,65.1,-36.1C71.3,-24.6,72.9,-10.5,73.5,4.1C74.1,18.7,73.6,33.9,67.2,46.4C60.8,58.8,48.3,68.5,34.5,73.3C20.7,78,10.3,77.8,-0.4,78.5C-11.1,79.2,-22.2,80.8,-32.2,76.6C-42.2,72.5,-51.1,62.7,-57.8,51.4C-64.6,40.1,-69.2,27.4,-72.3,13.8C-75.4,0.2,-77.1,-14.3,-73.9,-27.9C-70.6,-41.4,-62.5,-54,-50.9,-59.5C-39.3,-64.9,-24.2,-63.1,-10.4,-60.9C3.3,-58.8,6.5,-56.1,14.1,-57.4C21.7,-58.7,29.5,-63.8,36.3,-61.2Z" transform="translate(100 100)" className="text-ocean" />
            </svg>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-5xl md:text-6xl lg:text-7xl font-normal text-text-dark mb-4 ${msMadi.className}`}>
                The Spirit of Aloha
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                More than just a greeting, Aloha embodies love, peace, and compassion. Our products are created with this spirit in mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface rounded-xl shadow-md p-8 text-center">
                <div className="w-16 h-16 mx-auto bg-ocean/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 text-ocean-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-normal text-text-dark mb-2">Authentic Hawaiian Design</h3>
                <p className="text-text-secondary">
                  Each piece is thoughtfully designed to honor Hawaiian culture and traditions, with patterns and motifs inspired by the islands.
                </p>
              </div>

              <div className="bg-surface rounded-xl shadow-md p-8 text-center">
                <div className="w-16 h-16 mx-auto bg-coral/40 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 text-volcanic">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                  </svg>
                </div>
                <h3 className="text-4xl font-normal text-text-dark mb-2">Sustainable & Ethical</h3>
                <p className="text-text-secondary">
                  We're committed to environmental stewardship and ethical manufacturing practices, honoring the Hawaiian concept of mālama ʻāina (caring for the land).
                </p>
              </div>

              <div className="bg-surface rounded-xl shadow-md p-8 text-center">
                <div className="w-16 h-16 mx-auto bg-sunrise/40 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 text-sage-dark">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-normal text-text-dark mb-2">Sharing the Aloha Spirit</h3>
                <p className="text-text-secondary">
                  Through our products, we aim to spread the warmth and inclusivity of Hawaiian culture, bringing a bit of paradise into everyday life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured subcategories */}
        <section 
          className="py-16 md:py-24 bg-sage/20"
          aria-label="Featured Collections"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-5xl md:text-6xl lg:text-7xl font-normal text-text-dark mb-4 ${msMadi.className}`}>
                Featured Collections
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Check out our most popular categories and latest additions
              </p>
            </div>

            {/* Subcategories grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <SubcategoryCard 
                title="Men's T-Shirts" 
                imageUrl="https://images.unsplash.com/photo-1562157873-818bc0726f68"
                link="/apparel/mens/t-shirts" 
              />
              <SubcategoryCard 
                title="Women's Swim" 
                imageUrl="https://images.unsplash.com/photo-1564859228273-274232fdb516"
                link="/apparel/womens/swim" 
              />
              <SubcategoryCard 
                title="Hats & Beanies" 
                imageUrl="https://images.unsplash.com/photo-1521369909029-2afed882baee"
                link="/accessories/hats-beanies" 
              />
              <SubcategoryCard 
                title="Art" 
                imageUrl="https://images.unsplash.com/photo-1513519245088-0e12902e5a38" 
                link="/home-decor/art" 
              />
              <SubcategoryCard 
                title="Men's Swim" 
                imageUrl="https://images.unsplash.com/photo-1517940310602-26535839fe84"
                link="/apparel/mens/swim" 
              />
              <SubcategoryCard 
                title="Women's Dresses" 
                imageUrl="https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b"
                link="/apparel/womens/dresses" 
              />
              <SubcategoryCard 
                title="Bags" 
                imageUrl="https://images.unsplash.com/photo-1590874103328-eac38a683ce7"
                link="/accessories/bags" 
              />
              <SubcategoryCard 
                title="Candles" 
                imageUrl="https://images.unsplash.com/photo-1603006905003-be475563bc59" 
                link="/home-decor/candles" 
              />
            </div>
          </div>
        </section>

        {/* Collection highlight with background image */}
        <section 
          className="py-16 md:py-32 relative overflow-hidden min-h-[600px] flex items-center"
          aria-label="Summer Collection"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 z-0 bg-black/45"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-xl">
              <h2 className={`text-5xl md:text-6xl lg:text-7xl font-normal text-text-light mb-4 drop-shadow-lg ${msMadi.className}`}>
                Summer Collection
              </h2>
              <p className="text-lg text-text-light mb-6 drop-shadow-lg">
                Our latest collection is inspired by the vibrant colors and laid-back vibe of Hawaiian summers. From beach-ready swimwear to casual everyday pieces, we've got you covered.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/collections/summer" className="btn-primary inline-block">
                  Shop Collection
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Customer favorites */}
        <section 
          className="py-16 md:py-24 bg-ocean/5"
          aria-label="Customer Favorites"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-5xl md:text-6xl lg:text-7xl font-normal text-text-dark mb-4 ${msMadi.className}`}>
                Customer Favorites
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Our bestselling products loved by our community
              </p>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <ProductCard 
                title="North Shore Wave Rider Tee"
                price="$29.99"
                imageUrl="/images/product-1.jpg"
                link="/shop/north-shore-wave-rider-tee"
              />
              <ProductCard 
                title="Waikiki Surf Board Shorts"
                price="$45.99"
                imageUrl="/images/product-2.jpg"
                link="/shop/waikiki-surf-board-shorts"
              />
              <ProductCard 
                title="Aloha Spirit Rash Guard"
                price="$35.99"
                imageUrl="/images/product-3.jpg"
                link="/shop/aloha-spirit-rash-guard"
              />
              <ProductCard 
                title="Hibiscus Paradise Hat"
                price="$24.99"
                imageUrl="/images/product-4.jpg"
                link="/accessories/hats-beanies/hibiscus-paradise-hat"
              />
            </div>

            <div className="mt-12 text-center">
              <Link href="/shop" className="btn-secondary inline-block">
                View All Products
              </Link>
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <section 
          className="min-h-[600px] relative overflow-hidden bg-[#F7F3EE] flex items-center justify-center py-16 md:py-24"
          aria-label="Instagram Feed"
        >
          {/* Animated background grid */}
          <div className="absolute inset-0 flex flex-col justify-center gap-1">
            <AnimatedImageRow 
              images={[
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
                "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35",
                "https://images.unsplash.com/photo-1598135753163-6167c1a1ad65",
                "https://images.unsplash.com/photo-1483168527879-c66136b56105",
                "https://images.unsplash.com/photo-1546514355-7fdc90ccbd03",
                "https://images.unsplash.com/photo-1559494007-9f5847c49d94",
                "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d",
                "https://images.unsplash.com/photo-1586375300773-8384e3e4916f",
                "https://images.unsplash.com/photo-1570741066052-817c6de995c8",
                "https://images.unsplash.com/photo-1544644181-1484b3fdfc62",
                "https://images.unsplash.com/photo-1551524164-687a55dd1126",
                "https://images.unsplash.com/photo-1526491109672-74740652b963"
              ]} 
              direction="left"
              speed={160}
            />
            <AnimatedImageRow 
              images={[
                "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d",
                "https://images.unsplash.com/photo-1566992179452-7d35b628bd49",
                "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6",
                "https://images.unsplash.com/photo-1504387432042-8aca549e4729",
                "https://images.unsplash.com/photo-1533760881669-80db4d7b341c",
                "https://images.unsplash.com/photo-1586375300773-8384e3e4916f",
                "https://images.unsplash.com/photo-1545251142-f32339076e6d",
                "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272",
                "https://images.unsplash.com/photo-1596178065887-1198b6148b2b",
                "https://images.unsplash.com/photo-1587926690541-037b23915ed3",
                "https://images.unsplash.com/photo-1542259009477-d625272157b7",
                "https://images.unsplash.com/photo-1583255448430-17c5eda08e5c"
              ]} 
              direction="right"
              speed={140}
            />
            <AnimatedImageRow 
              images={[
                "https://images.unsplash.com/photo-1549064233-0dd82082e0ec",
                "https://images.unsplash.com/photo-1515859005217-8a1f08870f59",
                "https://images.unsplash.com/photo-1584555613497-9ecf9dd06f89",
                "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6",
                "https://images.unsplash.com/photo-1545251142-f32339076e6d",
                "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85",
                "https://images.unsplash.com/photo-1596178065887-1198b6148b2b",
                "https://images.unsplash.com/photo-1533760881669-80db4d7b341c",
                "https://images.unsplash.com/photo-1551524164-687a55dd1126",
                "https://images.unsplash.com/photo-1526491109672-74740652b963",
                "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35",
                "https://images.unsplash.com/photo-1598135753163-6167c1a1ad65"
              ]} 
              direction="left"
              speed={180}
            />
            <AnimatedImageRow 
              images={[
                "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6",
                "https://images.unsplash.com/photo-1545251142-f32339076e6d",
                "https://images.unsplash.com/photo-1483168527879-c66136b56105",
                "https://images.unsplash.com/photo-1546514355-7fdc90ccbd03",
                "https://images.unsplash.com/photo-1559494007-9f5847c49d94",
                "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d",
                "https://images.unsplash.com/photo-1586375300773-8384e3e4916f",
                "https://images.unsplash.com/photo-1570741066052-817c6de995c8",
                "https://images.unsplash.com/photo-1544644181-1484b3fdfc62",
                "https://images.unsplash.com/photo-1551524164-687a55dd1126",
                "https://images.unsplash.com/photo-1526491109672-74740652b963",
                "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35"
              ]} 
              direction="right"
              speed={150}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Glassmorphism card */}
            <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/30 rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
              <div className="flex flex-col h-full justify-between gap-8">
                <div className="text-center">
                  <h2 className={`text-5xl md:text-5xl lg:text-6xl font-normal text-text-dark mb-4 ${msMadi.className}`}>
                    #OahuSurfStyle
                  </h2>
                  <p className="text-lg text-text-dark/90 max-w-2xl mx-auto">
                    Tag us on Instagram for a chance to be featured
                  </p>
                </div>

                <div className="text-center">
                  <a 
                    href="https://www.instagram.com/oahusurfco" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-volcanic hover:text-ocean-blue transition-colors bg-white/80 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-5 h-5 mr-2"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    Follow us on Instagram
                  </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                  <InstagramPost 
                    imageUrl="/images/instagram-1.jpg"
                    fallbackUrl="https://images.unsplash.com/photo-1537742718206-8d8c32ebd3b2"
                    username="@surfergirl"
                    caption="Perfect day at North Shore #oahusurfstyle"
                  />
                  <InstagramPost 
                    imageUrl="/images/instagram-2.jpg"
                    fallbackUrl="https://images.unsplash.com/photo-1586352565917-9cf51ede237f"
                    username="@beachbum808"
                    caption="Couldn't resist this tee #oahusurfco"
                  />
                  <InstagramPost 
                    imageUrl="/images/instagram-3.jpg"
                    fallbackUrl="https://images.unsplash.com/photo-1547592180-cdbf0d8755d0"
                    username="@islandlife"
                    caption="Beach days are the best days #oahusurfstyle"
                  />
                  <InstagramPost 
                    imageUrl="/images/instagram-4.jpg"
                    fallbackUrl="https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c"
                    username="@hawaiilover"
                    caption="Living the dream #oahusurfco #aloha"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter section */}
        <section 
          className="py-16 md:py-24 bg-volcanic/20"
          aria-label="Newsletter Subscription"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className={`text-5xl md:text-6xl lg:text-7xl font-normal text-text-dark mb-4 ${msMadi.className}`} id="newsletter-heading">
                Join Our 'Ohana
              </h2>
              <p className="text-lg text-text-dark mb-8" id="newsletter-description">
                Subscribe to our newsletter for exclusive deals, new product announcements, and a touch of aloha in your inbox.
              </p>
              <form 
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" 
                role="form" 
                aria-labelledby="newsletter-heading"
                aria-describedby="newsletter-description"
              >
                <div className="flex-grow">
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="Your email address" 
                    className="w-full px-4 py-3 rounded-lg border border-text-secondary/20 focus:outline-none focus:ring-2 focus:ring-ocean"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn-primary whitespace-nowrap focus:ring-2 focus:ring-offset-2 focus:ring-ocean"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// Component for main category cards
function CategoryCard({ 
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
    <Link href={link} className="group" aria-labelledby={`category-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <motion.div 
        whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
        transition={{ duration: 0.2 }}
        className="bg-surface rounded-xl overflow-hidden shadow-lg"
      >
        <div className="relative h-64 overflow-hidden">
          <Image 
            src={imageUrl} 
            alt={`${title} category image`}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 id={`category-${title.toLowerCase().replace(/\s+/g, '-')}`} className={`text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-1 ${msMadi.className}`}>{title}</h3>
            <p className="text-text-light/90">{description}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// Component for subcategory cards
function SubcategoryCard({ 
  title, 
  imageUrl, 
  link 
}: { 
  title: string;
  imageUrl: string;
  link: string;
}) {
  return (
    <Link href={link} className="group" aria-labelledby={`subcategory-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <motion.div 
        whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
        transition={{ duration: 0.2 }}
        className="relative h-48 rounded-lg overflow-hidden"
      >
        <Image 
          src={imageUrl} 
          alt={`${title} subcategory image`}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 id={`subcategory-${title.toLowerCase().replace(/\s+/g, '-')}`} className="text-lg font-semibold text-text-light">{title}</h3>
        </div>
      </motion.div>
    </Link>
  );
}

// Component for product cards
function ProductCard({ 
  title, 
  price, 
  imageUrl, 
  link 
}: { 
  title: string;
  price: string;
  imageUrl: string;
  link: string;
}) {
  return (
    <Link href={link} className="group" aria-labelledby={`product-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <motion.div 
        whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
        transition={{ duration: 0.2 }}
        className="bg-surface rounded-lg overflow-hidden"
      >
        <div className="relative h-64">
          <Image 
            src={imageUrl} 
            alt={`${title} product image`}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 id={`product-${title.toLowerCase().replace(/\s+/g, '-')}`} className="text-lg font-semibold text-text-dark mb-1">{title}</h3>
          <p className="text-text-secondary">{price}</p>
        </div>
      </motion.div>
    </Link>
  );
}

// Component for Instagram posts
function InstagramPost({ 
  imageUrl, 
  fallbackUrl,
  username, 
  caption 
}: { 
  imageUrl: string;
  fallbackUrl: string;
  username: string;
  caption: string;
}) {
  return (
    <motion.div 
      whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
      transition={{ duration: 0.2 }}
      className="relative aspect-square rounded-lg overflow-hidden group"
      role="article"
      aria-label={`Instagram post by ${username}: ${caption}`}
    >
      <Image 
        src={imageUrl} 
        alt={caption}
        fill
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = fallbackUrl;
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 p-4">
          <p className="text-text-light font-medium mb-1">{username}</p>
          <p className="text-text-light/90 text-sm">{caption}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Component for animated image rows
function AnimatedImageRow({ 
  images, 
  direction = 'left',
  speed = 80
}: { 
  images: string[];
  direction?: 'left' | 'right';
  speed?: number;
}) {
  return (
    <div className="flex overflow-hidden">
      <div 
        className={`flex gap-4 ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
        style={{ '--scroll-speed': `${speed}s` } as React.CSSProperties}
      >
        {/* First set of images */}
        {images.map((image, index) => (
          <div 
            key={`${index}-1`} 
            className="w-32 h-32 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src={image}
              alt="Hawaiian lifestyle"
              width={128}
              height={128}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {images.map((image, index) => (
          <div 
            key={`${index}-2`} 
            className="w-32 h-32 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src={image}
              alt="Hawaiian lifestyle"
              width={128}
              height={128}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}