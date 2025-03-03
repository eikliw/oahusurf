import { render } from '@testing-library/react';
import { screen, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { useParams, usePathname } from 'next/navigation';
import BlogPage from '@/app/blog/page';
import BlogPostPage from '@/app/blog/[slug]/page';
import { client } from '@/lib/sanity';

// Mock the next/navigation hooks
jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
  usePathname: jest.fn(),
}));

// Mock the Sanity client
jest.mock('@/lib/sanity', () => ({
  client: {
    fetch: jest.fn(),
  },
  urlFor: jest.fn().mockImplementation(() => ({
    url: jest.fn().mockReturnValue('https://example.com/image.jpg'),
  })),
}));

// Mock framer-motion to avoid issues with animations in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('Blog Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (usePathname as jest.Mock).mockReturnValue('/blog');
  });

  test('renders loading state initially', () => {
    // Mock the client.fetch to return a promise that doesn't resolve immediately
    (client.fetch as jest.Mock).mockReturnValue(new Promise(() => {}));
    
    render(<BlogPage />);
    
    expect(screen.getByText('Our Blog')).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument(); // Loading spinner
  });

  test('renders blog posts when data is loaded', async () => {
    // Mock blog posts data
    const mockPosts = [
      {
        _id: '1',
        title: 'Test Blog Post 1',
        slug: { current: 'test-blog-post-1' },
        mainImage: { asset: { _ref: 'image-1' } },
        publishedAt: '2023-01-01',
        excerpt: 'This is a test excerpt',
        categories: [{ title: 'Test Category' }],
        author: { name: 'Test Author', image: { asset: { _ref: 'image-author-1' } } },
      },
      {
        _id: '2',
        title: 'Test Blog Post 2',
        slug: { current: 'test-blog-post-2' },
        mainImage: { asset: { _ref: 'image-2' } },
        publishedAt: '2023-01-02',
        excerpt: 'This is another test excerpt',
        categories: [{ title: 'Another Category' }],
        author: { name: 'Another Author', image: { asset: { _ref: 'image-author-2' } } },
      },
    ];
    
    (client.fetch as jest.Mock).mockResolvedValue(mockPosts);
    
    render(<BlogPage />);
    
    // Wait for the posts to be rendered
    await waitFor(() => {
      expect(screen.getByText('Test Blog Post 1')).toBeInTheDocument();
      expect(screen.getByText('Test Blog Post 2')).toBeInTheDocument();
      expect(screen.getByText('This is a test excerpt')).toBeInTheDocument();
      expect(screen.getByText('This is another test excerpt')).toBeInTheDocument();
    });
    
    // Check for category filters - using getAllByText since these appear multiple times
    expect(screen.getAllByText('Test Category')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Another Category')[0]).toBeInTheDocument();
  });

  test('renders empty state when no posts are available', async () => {
    // Mock empty posts array
    (client.fetch as jest.Mock).mockResolvedValue([]);
    
    render(<BlogPage />);
    
    // Wait for the empty state to be rendered
    await waitFor(() => {
      expect(screen.getByText('No posts found')).toBeInTheDocument();
      expect(screen.getByText("We haven't published any blog posts yet. Check back soon!")).toBeInTheDocument();
    });
  });
});

describe('Blog Post Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (usePathname as jest.Mock).mockReturnValue('/blog/test-post');
    (useParams as jest.Mock).mockReturnValue({ slug: 'test-post' });
  });

  test('renders loading state initially', () => {
    // Mock the client.fetch to return a promise that doesn't resolve immediately
    (client.fetch as jest.Mock).mockReturnValue(new Promise(() => {}));
    
    render(<BlogPostPage />);
    
    expect(screen.getByRole('status')).toBeInTheDocument(); // Loading spinner
  });

  test('renders blog post when data is loaded', async () => {
    // Mock blog post data
    const mockPost = {
      _id: '1',
      title: 'Test Blog Post',
      slug: { current: 'test-post' },
      mainImage: { asset: { _ref: 'image-1' } },
      publishedAt: '2023-01-01',
      body: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'This is the blog post content.' }],
          markDefs: [],
          style: 'normal',
        },
      ],
      categories: [{ title: 'Test Category' }],
      author: { 
        name: 'Test Author', 
        image: { asset: { _ref: 'image-author-1' } },
        bio: [
          {
            _type: 'block',
            children: [{ _type: 'span', text: 'Author bio text.' }],
            markDefs: [],
            style: 'normal',
          },
        ],
      },
      relatedPosts: [
        {
          _id: '2',
          title: 'Related Post',
          slug: { current: 'related-post' },
          mainImage: { asset: { _ref: 'image-2' } },
          publishedAt: '2023-01-02',
          excerpt: 'This is a related post excerpt',
        },
      ],
    };
    
    (client.fetch as jest.Mock).mockResolvedValue(mockPost);
    
    render(<BlogPostPage />);
    
    // Wait for the post to be rendered
    await waitFor(() => {
      // Using getAllByText since these appear multiple times
      expect(screen.getAllByText('Test Blog Post')[0]).toBeInTheDocument();
      expect(screen.getAllByText('Test Category')[0]).toBeInTheDocument();
      expect(screen.getAllByText('Test Author')[0]).toBeInTheDocument();
      expect(screen.getByText('Related Post')).toBeInTheDocument();
    });
  });

  test('renders error state when post is not found', async () => {
    // Mock null response (post not found)
    (client.fetch as jest.Mock).mockResolvedValue(null);
    
    render(<BlogPostPage />);
    
    // Wait for the error state to be rendered
    await waitFor(() => {
      expect(screen.getByText('Post not found')).toBeInTheDocument();
      expect(screen.getByText('Return to Blog')).toBeInTheDocument();
    });
  });

  test('renders error state when fetch fails', async () => {
    // Mock fetch error
    (client.fetch as jest.Mock).mockRejectedValue(new Error('Fetch error'));
    
    render(<BlogPostPage />);
    
    // Wait for the error state to be rendered
    await waitFor(() => {
      expect(screen.getByText('Failed to load blog post')).toBeInTheDocument();
      expect(screen.getByText('Return to Blog')).toBeInTheDocument();
    });
  });
}); 