import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = '8hae5kj0';
export const dataset = 'production';
export const apiVersion = '2023-05-03';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});

// Helper function to build image URLs
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
} 