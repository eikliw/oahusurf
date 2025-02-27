interface Product {
  id: string;
  title: string;
  handle: string;
  description?: string;
  price: string;
  imageUrl?: string;
  images?: ProductImage[];
  variants?: ProductVariant[];
}

interface ProductImage {
  url: string;
  altText: string;
}

interface ProductVariant {
  id: string;
  title: string;
  price: string;
  availableForSale: boolean;
}

const mockProducts: Product[] = [
  {
    id: 'prod_1',
    title: 'North Shore Wave Rider Tee',
    handle: 'north-shore-wave-rider-tee',
    description: 'Embrace the spirit of the North Shore with this premium cotton t-shirt featuring our signature wave design. Perfect for beach days or casual wear.',
    price: 'USD 29.99',
    imageUrl: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9',
        altText: 'North Shore Wave Rider Tee - Front'
      },
      {
        url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a',
        altText: 'North Shore Wave Rider Tee - Back'
      }
    ],
    variants: [
      {
        id: 'var_1',
        title: 'Small',
        price: 'USD 29.99',
        availableForSale: true
      },
      {
        id: 'var_2',
        title: 'Medium',
        price: 'USD 29.99',
        availableForSale: true
      },
      {
        id: 'var_3',
        title: 'Large',
        price: 'USD 29.99',
        availableForSale: false
      }
    ]
  },
  {
    id: 'prod_2',
    title: 'Waikiki Surf Board Shorts',
    handle: 'waikiki-surf-board-shorts',
    description: 'Hit the waves in style with our quick-dry board shorts featuring a vibrant Hawaiian print. Made with recycled materials for eco-conscious surfers.',
    price: 'USD 45.99',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
        altText: 'Waikiki Surf Board Shorts - Front'
      },
      {
        url: 'https://images.unsplash.com/photo-1565299585577-b0c0c4b78b6a',
        altText: 'Waikiki Surf Board Shorts - Back'
      }
    ],
    variants: [
      {
        id: 'var_4',
        title: '30"',
        price: 'USD 45.99',
        availableForSale: true
      },
      {
        id: 'var_5',
        title: '32"',
        price: 'USD 45.99',
        availableForSale: true
      },
      {
        id: 'var_6',
        title: '34"',
        price: 'USD 45.99',
        availableForSale: true
      }
    ]
  },
  {
    id: 'prod_3',
    title: 'Aloha Spirit Rash Guard',
    handle: 'aloha-spirit-rash-guard',
    description: 'Stay protected in style with our UPF 50+ rash guard featuring traditional Hawaiian motifs. Perfect for long surf sessions.',
    price: 'USD 35.99',
    imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544441893-675973e31985',
        altText: 'Aloha Spirit Rash Guard - Front'
      },
      {
        url: 'https://images.unsplash.com/photo-1544441893-675973e31986',
        altText: 'Aloha Spirit Rash Guard - Back'
      }
    ],
    variants: [
      {
        id: 'var_7',
        title: 'Small',
        price: 'USD 35.99',
        availableForSale: true
      },
      {
        id: 'var_8',
        title: 'Medium',
        price: 'USD 35.99',
        availableForSale: true
      },
      {
        id: 'var_9',
        title: 'Large',
        price: 'USD 35.99',
        availableForSale: true
      }
    ]
  }
];

export function getProducts(): Promise<Product[]> {
  return Promise.resolve(mockProducts);
}

export function getProductByHandle(handle: string): Promise<Product | null> {
  const product = mockProducts.find(p => p.handle === handle);
  return Promise.resolve(product || null);
}