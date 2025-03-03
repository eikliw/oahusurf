'use client';

import { useState, useEffect } from 'react';
import { Ms_Madi } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { urlFor } from '@/lib/sanity';
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  LinkedinShareButton, 
  EmailShareButton,
  PinterestShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
  PinterestIcon,
  RedditIcon
} from 'react-share';

const msMadi = Ms_Madi({ weight: '400', subsets: ['latin'] });

// Types for our blog post
interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: any;
  publishedAt: string;
  body: any[];
  categories: {
    title: string;
  }[];
  author: {
    name: string;
    image: any;
    bio: any[];
  };
  relatedPosts?: RelatedPost[];
}

interface RelatedPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: any;
  publishedAt: string;
  excerpt: string;
}

// Components for the PortableText renderer
const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="my-8 relative rounded-lg overflow-hidden">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Blog post image'}
            width={800}
            height={500}
            className="w-full h-auto object-cover"
          />
          {value.caption && (
            <div className="text-sm text-volcanic/60 mt-2 italic text-center">
              {value.caption}
            </div>
          )}
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a 
          href={value.href} 
          rel={rel} 
          className="text-ocean hover:text-ocean-dark underline transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-medium text-volcanic mt-12 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-medium text-volcanic mt-8 mb-4">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-medium text-volcanic mt-6 mb-3">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-volcanic/80 mb-6 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-ocean pl-4 italic my-6 text-volcanic/70">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 mb-6 text-volcanic/80 space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 mb-6 text-volcanic/80 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
};

export default function BlogPostClient({ post }: { post: BlogPost | null }) {
  const [shareUrl, setShareUrl] = useState<string>('');

  useEffect(() => {
    // Set share URL
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-14 md:pt-[4.5rem] lg:pt-[4.75rem] flex flex-col justify-center items-center">
        <h1 className="text-2xl text-volcanic mb-4">Post not found</h1>
        <Link href="/blog" className="text-ocean hover:text-ocean-dark">
          Return to Blog
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main className="min-h-screen bg-white pt-14 md:pt-[4.5rem] lg:pt-[4.75rem]">
      {/* Blog Post Header */}
      <section className="relative bg-sage/20 py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
            <path d="M0 100 L0 50 Q25 60 50 50 T100 50 L100 100 Z" fill="currentColor" className="text-ocean"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {post.categories.map((category, index) => (
                  <span 
                    key={index} 
                    className="bg-white/80 text-volcanic text-xs px-3 py-1 rounded-full"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-normal text-volcanic mb-6 ${msMadi.className}`}>
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center text-volcanic/70 text-sm">
              {post.author && post.author.image && (
                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image 
                    src={urlFor(post.author.image).url()} 
                    alt={post.author.name || 'Author'} 
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <div className="font-medium text-volcanic">{post.author ? post.author.name : 'Unknown'}</div>
                <div>{formattedDate}</div>
              </div>
            </div>
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
              <Link href="/blog" className="text-volcanic/60 hover:text-volcanic">Blog</Link>
            </li>
            <li className="text-volcanic/60">/</li>
            <li className="text-volcanic truncate max-w-[200px]">{post.title}</li>
          </ol>
        </nav>
      </div>

      {/* Main Image */}
      {post.mainImage && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden aspect-[16/9]">
              <Image 
                src={urlFor(post.mainImage).url()} 
                alt={post.title} 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Blog Content */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.body} components={components} />
          </div>
          
          {/* Share Links - replaced with react-share components */}
          <div className="mt-12 pt-8 border-t border-volcanic/10">
            <h3 className="text-lg font-medium text-volcanic mb-4">Share this post</h3>
            <div className="flex flex-wrap gap-4">
              <TwitterShareButton url={shareUrl} title={post.title} className="outline-none">
                <div className="p-2 rounded-full bg-volcanic/5 hover:bg-volcanic/10 text-volcanic transition-colors">
                  <TwitterIcon size={28} round bgStyle={{ fill: 'transparent' }} iconFillColor="currentColor" />
                </div>
              </TwitterShareButton>
              
              <FacebookShareButton url={shareUrl} className="outline-none">
                <div className="p-2 rounded-full bg-volcanic/5 hover:bg-volcanic/10 text-volcanic transition-colors">
                  <FacebookIcon size={28} round bgStyle={{ fill: 'transparent' }} iconFillColor="currentColor" />
                </div>
              </FacebookShareButton>
              
              <LinkedinShareButton url={shareUrl} title={post.title} className="outline-none">
                <div className="p-2 rounded-full bg-volcanic/5 hover:bg-volcanic/10 text-volcanic transition-colors">
                  <LinkedinIcon size={28} round bgStyle={{ fill: 'transparent' }} iconFillColor="currentColor" />
                </div>
              </LinkedinShareButton>
              
              <PinterestShareButton 
                url={shareUrl} 
                media={post.mainImage ? urlFor(post.mainImage).url() : ''} 
                description={post.title}
                className="outline-none"
              >
                <div className="p-2 rounded-full bg-volcanic/5 hover:bg-volcanic/10 text-volcanic transition-colors">
                  <PinterestIcon size={28} round bgStyle={{ fill: 'transparent' }} iconFillColor="currentColor" />
                </div>
              </PinterestShareButton>
              
              <RedditShareButton url={shareUrl} title={post.title} className="outline-none">
                <div className="p-2 rounded-full bg-volcanic/5 hover:bg-volcanic/10 text-volcanic transition-colors">
                  <RedditIcon size={28} round bgStyle={{ fill: 'transparent' }} iconFillColor="currentColor" />
                </div>
              </RedditShareButton>
              
              <EmailShareButton url={shareUrl} subject={post.title} body={`Check out this article: ${post.title}`} className="outline-none">
                <div className="p-2 rounded-full bg-volcanic/5 hover:bg-volcanic/10 text-volcanic transition-colors">
                  <EmailIcon size={28} round bgStyle={{ fill: 'transparent' }} iconFillColor="currentColor" />
                </div>
              </EmailShareButton>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-volcanic/10">
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-normal text-volcanic mb-8 ${msMadi.className}`}>
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {post.relatedPosts.map((relatedPost) => (
                <RelatedPostCard key={relatedPost._id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-ocean hover:text-ocean-dark font-medium transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Blog
        </Link>
      </div>
    </main>
  );
}

// Related Post Card Component
function RelatedPostCard({ post }: { post: RelatedPost }) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col">
      <Link href={`/blog/${post.slug.current}`} className="block relative">
        <div className="relative h-48 overflow-hidden">
          {post.mainImage ? (
            <Image 
              src={urlFor(post.mainImage).url()} 
              alt={post.title} 
              fill
              className="object-cover object-center"
            />
          ) : (
            <div className="absolute inset-0 bg-ocean/10 flex items-center justify-center">
              <span className="text-ocean">No image available</span>
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-2 text-volcanic/60 text-sm">
          {formattedDate}
        </div>
        
        <Link href={`/blog/${post.slug.current}`} className="block group">
          <h3 className="text-lg font-medium text-volcanic mb-2 group-hover:text-ocean transition-colors">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="text-volcanic/70 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
          )}
        </Link>
        
        <div className="mt-auto pt-2">
          <Link 
            href={`/blog/${post.slug.current}`} 
            className="text-ocean hover:text-ocean-dark text-sm font-medium inline-flex items-center transition-colors"
          >
            Read Article
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 