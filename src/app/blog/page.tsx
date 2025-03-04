'use client';

import { useState, useEffect } from 'react';
import { Ms_Madi } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { client, urlFor } from '@/lib/sanity';

const msMadi = Ms_Madi({ weight: '400', subsets: ['latin'] });

// Types for our blog posts
interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: any;
  publishedAt: string;
  excerpt: string;
  categories: {
    title: string;
  }[];
  author: {
    name: string;
    image: any;
  };
}

// Categories data with images and descriptions
const featuredCategories = [
  {
    title: 'Surf',
    description: 'Tips, techniques, and stories from the waves',
    image: '/images/categories/surf.jpg',
    color: 'bg-ocean',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
      </svg>
    )
  },
  {
    title: 'Reviews',
    description: 'Honest opinions on the latest gear and equipment',
    image: '/images/categories/reviews.jpg',
    color: 'bg-coral',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  },
  {
    title: 'Guides',
    description: 'Expert advice for every skill level',
    image: '/images/categories/guides.jpg',
    color: 'bg-sage',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: 'Brand',
    description: 'Our story and the values that drive us',
    image: '/images/categories/brand.jpg',
    color: 'bg-sand',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  }
];

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      setError(null);
      try {
        // Improved query to get all blog posts with better error handling
        const query = `*[_type == "post" && defined(slug.current)] {
          _id,
          title,
          slug,
          mainImage,
          publishedAt,
          excerpt,
          "categories": categories[]->{ title },
          "author": author->{ name, image }
        } | order(publishedAt desc)`;
        
        const fetchedPosts = await client.fetch(query);
        console.log(`Fetched ${fetchedPosts.length} blog posts`);
        
        if (fetchedPosts.length === 0) {
          console.warn('No posts found. Make sure your Sanity query is correct and posts exist.');
        }
        
        setPosts(fetchedPosts);
        
        // Extract unique categories
        const allCategories = fetchedPosts.flatMap((post: BlogPost) => 
          post.categories ? post.categories.map(cat => cat.title) : []
        );
        const uniqueCategories = Array.from(new Set<string>(allCategories));
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchPosts();
  }, []);

  // Filter posts by category if one is selected
  const filteredPosts = selectedCategory 
    ? posts.filter(post => 
        post.categories && post.categories.some(cat => cat.title === selectedCategory)
      )
    : posts;

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  // Get latest post for the featured section
  const latestPost = posts.length > 0 ? posts[0] : null;
  
  // Get posts for the sidebar
  const getSidebarPosts = () => {
    // Skip the first post (featured post)
    const availablePosts = posts.slice(1);
    if (availablePosts.length === 0) return [];
    
    // First try to get posts by category
    const postsByCategory: Record<string, BlogPost[]> = {};
    
    // Initialize with empty arrays for each category
    featuredCategories.forEach(category => {
      postsByCategory[category.title] = [];
    });
    
    // Fill in the posts by category
    availablePosts.forEach(post => {
      if (post.categories && post.categories.length > 0) {
        // Find the first category that matches our featured categories
        const matchedCategory = post.categories.find(
          cat => featuredCategories.some(fc => fc.title === cat.title)
        );
        
        if (matchedCategory) {
          postsByCategory[matchedCategory.title].push(post);
        }
      }
    });
    
    // Try to get one post from each category first
    const selectedPosts: BlogPost[] = [];
    
    // First pass: get one post from each category
    featuredCategories.forEach(category => {
      if (postsByCategory[category.title].length > 0 && selectedPosts.length < 3) {
        selectedPosts.push(postsByCategory[category.title][0]);
        // Remove the selected post
        postsByCategory[category.title] = postsByCategory[category.title].slice(1);
      }
    });
    
    // Second pass: fill remaining slots with any available posts from any category
    if (selectedPosts.length < 3) {
      // Flatten remaining posts by category into a single array
      const remainingPosts = Object.values(postsByCategory).flat();
      
      // Add posts until we have 3 or run out
      for (let i = 0; i < remainingPosts.length && selectedPosts.length < 3; i++) {
        selectedPosts.push(remainingPosts[i]);
      }
      
      // If we still don't have enough, use uncategorized posts or any others we might have missed
      if (selectedPosts.length < 3 && availablePosts.length > 0) {
        // Get posts that haven't been selected yet
        const usedPostIds = new Set(selectedPosts.map(p => p._id));
        const unusedPosts = availablePosts.filter(p => !usedPostIds.has(p._id));
        
        // Add these until we have 3 or run out
        for (let i = 0; i < unusedPosts.length && selectedPosts.length < 3; i++) {
          selectedPosts.push(unusedPosts[i]);
        }
      }
    }
    
    return selectedPosts;
  };
  
  const sidebarPosts = getSidebarPosts();

  return (
    <main className="min-h-screen bg-white pt-14 md:pt-[4.5rem] lg:pt-[4.75rem]">
      {/* Blog Header */}
      <section className="relative bg-sage/20 py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
            <path d="M0 100 L0 50 Q25 60 50 50 T100 50 L100 100 Z" fill="currentColor" className="text-ocean"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-normal text-volcanic mb-4 ${msMadi.className}`}>
              Our Blog
            </h1>
            <p className="text-lg text-volcanic/80 max-w-2xl">
              Stories, tips, and insights from our island life. Discover the latest in Hawaiian fashion, 
              sustainability practices, and the spirit of aloha that inspires everything we do.
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
            <li className="text-volcanic">Blog</li>
          </ol>
        </nav>
      </div>

      {/* Latest Posts Section */}
      {!isLoading && posts.length > 0 && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className={`text-3xl font-normal text-volcanic mb-6 ${msMadi.className}`}>
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Large Featured Post */}
            {latestPost && (
              <div className="lg:col-span-2">
                <div className="rounded-xl overflow-hidden shadow-md h-full bg-white">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    {latestPost.mainImage ? (
                      <Image 
                        src={urlFor(latestPost.mainImage).url()} 
                        alt={latestPost.title} 
                        fill
                        className="object-cover object-center"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-ocean/10 flex items-center justify-center">
                        <span className="text-ocean">No image available</span>
                      </div>
                    )}
                    {latestPost.categories && latestPost.categories.length > 0 && (
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {latestPost.categories.slice(0, 2).map((category, index) => (
                          <span 
                            key={index} 
                            className="bg-white/90 text-volcanic text-xs px-3 py-1.5 rounded-full font-medium"
                          >
                            {category.title}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <Link href={`/blog/${latestPost.slug.current}`} className="block group">
                        <h3 className="text-2xl md:text-3xl font-medium mb-2 group-hover:text-ocean-light transition-colors">
                          {latestPost.title}
                        </h3>
                      </Link>
                      <div className="flex items-center text-sm mt-2">
                        {latestPost.author && latestPost.author.image && (
                          <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2 border-2 border-white">
                            <Image 
                              src={urlFor(latestPost.author.image).url()} 
                              alt={latestPost.author.name || 'Author'} 
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <span>{latestPost.author ? latestPost.author.name : 'Unknown'}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(latestPost.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Sidebar - 3 Smaller Posts */}
            <div className="lg:col-span-1">
              <div className="space-y-6 h-full flex flex-col">
                {sidebarPosts.map((post) => (
                  <div key={post._id} className="rounded-xl overflow-hidden shadow-md bg-white flex-1">
                    <Link href={`/blog/${post.slug.current}`} className="flex h-full">
                      <div className="relative w-1/3">
                        {post.mainImage ? (
                          <Image 
                            src={urlFor(post.mainImage).url()} 
                            alt={post.title} 
                            fill
                            className="object-cover object-center"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-ocean/10 flex items-center justify-center">
                            <span className="text-ocean">No image</span>
                          </div>
                        )}
                      </div>
                      <div className="p-4 w-2/3 flex flex-col">
                        {post.categories && post.categories.length > 0 && (
                          <span className="text-xs text-ocean font-medium mb-2">
                            {post.categories[0].title}
                          </span>
                        )}
                        <h3 className="text-sm md:text-base font-medium text-volcanic group-hover:text-ocean transition-colors line-clamp-2 mb-1">
                          {post.title}
                        </h3>
                        <div className="mt-auto text-volcanic/60 text-xs">
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
                
                {/* If we don't have enough posts, fill with empty boxes */}
                {Array.from({ length: Math.max(0, 3 - sidebarPosts.length) }).map((_, index) => (
                  <div key={`empty-${index}`} className="rounded-xl overflow-hidden shadow-md bg-volcanic/5 flex-1 flex items-center justify-center p-6">
                    <p className="text-volcanic/40 text-center">More articles coming soon</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Category Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className={`text-3xl font-normal text-volcanic mb-6 ${msMadi.className}`}>
          Explore by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCategories.map((category) => (
            <motion.div
              key={category.title}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleCategorySelect(category.title)}
              className={`rounded-xl overflow-hidden shadow-md cursor-pointer h-full ${
                selectedCategory === category.title ? 'ring-2 ring-ocean shadow-lg' : ''
              }`}
            >
              <div className="relative h-32 overflow-hidden">
                <div className={`absolute inset-0 flex items-center justify-center text-white ${category.color}`}>
                  {category.icon}
                </div>
                {/* If you have actual category images, uncomment this
                <Image 
                  src={category.image} 
                  alt={category.title} 
                  fill
                  className="object-cover object-center"
                />
                */}
              </div>
              <div className="p-5 bg-white">
                <h3 className="text-xl font-medium text-volcanic mb-2">{category.title}</h3>
                <p className="text-volcanic/70 text-sm">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Category Filter Pills */}
      {categories.length > 0 && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null 
                  ? 'bg-ocean text-white' 
                  : 'bg-volcanic/5 text-volcanic/70 hover:bg-volcanic/10'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category 
                    ? 'bg-ocean text-white' 
                    : 'bg-volcanic/5 text-volcanic/70 hover:bg-volcanic/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Blog Posts */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ocean" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl text-volcanic/70 mb-4">No posts found</h3>
            <p className="text-volcanic/60">
              {selectedCategory 
                ? `No posts found in the "${selectedCategory}" category.` 
                : "We haven't published any blog posts yet. Check back soon!"}
            </p>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-ocean/5 rounded-3xl py-12 px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-normal text-volcanic mb-4 ${msMadi.className}`}>
              Stay Updated
            </h2>
            <p className="text-volcanic/70 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest blog posts, product updates, and exclusive offers directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-volcanic/20 focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-ocean hover:bg-ocean-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

// Blog Post Card Component
function BlogPostCard({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full flex flex-col"
    >
      <Link href={`/blog/${post.slug.current}`} className="block relative group">
        <div className="relative h-56 overflow-hidden">
          {post.mainImage ? (
            <Image 
              src={urlFor(post.mainImage).url()} 
              alt={post.title} 
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-ocean/10 flex items-center justify-center">
              <span className="text-ocean">No image available</span>
            </div>
          )}
        </div>
        
        {post.categories && post.categories.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-1 justify-end">
            {post.categories.slice(0, 2).map((category, index) => (
              <span 
                key={index} 
                className="bg-white/90 text-volcanic text-xs px-2 py-1 rounded-full"
              >
                {category.title}
              </span>
            ))}
            {post.categories.length > 2 && (
              <span className="bg-white/90 text-volcanic text-xs px-2 py-1 rounded-full">
                +{post.categories.length - 2}
              </span>
            )}
          </div>
        )}
      </Link>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4 text-volcanic/60 text-sm flex items-center">
          {post.author && post.author.image && (
            <div className="relative w-6 h-6 rounded-full overflow-hidden mr-2">
              <Image 
                src={urlFor(post.author.image).url()} 
                alt={post.author.name || 'Author'} 
                fill
                className="object-cover"
              />
            </div>
          )}
          <span>{post.author ? post.author.name : 'Unknown'}</span>
          <span className="mx-2">•</span>
          <span>{formattedDate}</span>
        </div>
        
        <Link href={`/blog/${post.slug.current}`} className="block group">
          <h3 className="text-xl font-medium text-volcanic mb-2 group-hover:text-ocean transition-colors">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="text-volcanic/70 mb-4 line-clamp-3">{post.excerpt}</p>
          )}
        </Link>
        
        <div className="mt-auto pt-4">
          <Link 
            href={`/blog/${post.slug.current}`} 
            className="text-ocean hover:text-ocean-dark font-medium inline-flex items-center transition-colors"
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 