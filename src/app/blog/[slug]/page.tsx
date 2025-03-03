import { client } from '@/lib/sanity';
import BlogPostClient from '@/components/blog/BlogPostClient';

// Static params generation for all blog posts at build time
export async function generateStaticParams() {
  try {
    // Fetch all post slugs from Sanity
    const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`);
    
    // Return an array of objects with the slug parameter
    return posts.map((post: any) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
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
      "categories": categories[]->{ title },
      "author": author->{ name, image, bio },
      "relatedPosts": *[_type == "post" && slug.current != $slug && count(categories[]->[_id in ^.^.categories[]._ref]) > 0] | order(publishedAt desc) [0...3] {
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        excerpt
      }
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