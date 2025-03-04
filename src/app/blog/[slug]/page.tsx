import { client } from '@/lib/sanity';
import BlogPostClient from '@/components/blog/BlogPostClient';
import { Metadata, ResolvingMetadata } from 'next';
import { urlFor } from '@/lib/sanity';

// Static params generation for all blog posts at build time
export async function generateStaticParams() {
  try {
    // Fetch all post slugs from Sanity with a more robust query
    // Use a more complete GROQ query that ensures we get all posts
    const posts = await client.fetch(`
      *[_type == "post" && defined(slug.current)] {
        "slug": slug.current
      }
    `);
    
    console.log(`Generated paths for ${posts.length} blog posts:`);
    posts.forEach((post: any) => {
      console.log(`- /blog/${post.slug}`);
    });
    
    // Return an array of objects with the slug parameter
    return posts.map((post: any) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for blog posts:', error);
    throw new Error(`Failed to generate blog post paths: ${error}`);
  }
}

// Generate metadata for the page
export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    // Fetch the post data, including SEO fields
    const post = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        title,
        excerpt,
        "seo": seo {
          metaTitle,
          metaDescription,
          keywords,
          indexing,
          socialTitle,
          socialDescription,
          socialImage
        },
        mainImage
      }`,
      { slug: params.slug }
    );

    // Determine the site URL - using environment variable in production or localhost in development
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://oahusurfco.com';

    // Fallback to defaults if no SEO data exists
    const metadata: Metadata = {
      metadataBase: new URL(siteUrl),
      title: post?.seo?.metaTitle || post.title || 'Blog Post',
      description: post?.seo?.metaDescription || post.excerpt || '',
      robots: {
        index: post?.seo?.indexing?.noindex ? false : true,
        follow: post?.seo?.indexing?.nofollow ? false : true,
      },
    };

    // Add keywords if available
    if (post?.seo?.keywords && post.seo.keywords.length > 0) {
      metadata.keywords = post.seo.keywords;
    }

    // Add OpenGraph data
    const ogImage = post?.seo?.socialImage || post.mainImage;
    
    if (ogImage) {
      metadata.openGraph = {
        title: post?.seo?.socialTitle || post?.seo?.metaTitle || post.title,
        description: post?.seo?.socialDescription || post?.seo?.metaDescription || post.excerpt,
        images: [
          {
            url: urlFor(ogImage).width(1200).height(630).url(),
            width: 1200,
            height: 630,
            alt: post.title || 'Blog post image',
          },
        ],
        type: 'article',
      };
    }

    return metadata;
  } catch (error) {
    console.error('Error generating metadata:', error);
    // Return basic metadata if there's an error
    return {
      metadataBase: new URL('https://oahusurfco.com'),
      title: 'Blog Post',
      description: 'Read our latest blog post',
    };
  }
}

// Server component that fetches data and renders the client component
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  try {
    // Query to get the blog post by slug
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      body,
      excerpt,
      "categories": categories[]->{ title },
      "author": author->{ name, image, bio },
      "relatedPosts": *[_type == "post" && slug.current != $slug && count(categories[]->[_id in ^.^.categories[]._ref]) > 0] | order(publishedAt desc) [0...3] {
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        excerpt
      },
      seo
    }`;
    
    const post = await client.fetch(query, { slug: params.slug });
    
    // Pass the data to the client component
    return <BlogPostClient post={post} />;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return (
      <div className="min-h-screen bg-white pt-14 md:pt-[4.5rem] lg:pt-[4.75rem] flex flex-col justify-center items-center">
        <h1 className="text-2xl text-volcanic mb-4">Failed to load blog post</h1>
        <a href="/blog" className="text-ocean hover:text-ocean-dark">
          Return to Blog
        </a>
      </div>
    );
  }
} 