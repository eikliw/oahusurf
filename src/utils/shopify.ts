import { shopifyApi, LATEST_API_VERSION } from '@shopify/shopify-api';

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || '';
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '';
const apiSecretKey = process.env.SHOPIFY_API_SECRET_KEY || '';
const adminApiAccessToken = process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN || '';

const shopify = shopifyApi({
  apiKey: storefrontAccessToken,
  apiSecretKey: apiSecretKey,
  adminApiAccessToken: adminApiAccessToken,
  apiVersion: LATEST_API_VERSION,
  isCustomStoreApp: true,
  hostName: domain,
  isEmbeddedApp: false,
  hostScheme: 'https'
});

export async function getProducts() {
  const client = new shopify.clients.Storefront({
    domain,
    storefrontAccessToken,
  });

  try {
    const { body } = await client.query({
      data: `{
        products(first: 12) {
          edges {
            node {
              id
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 1) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
      }`,
    });

    return body.data.products.edges.map(({ node }: any) => ({
      id: node.id,
      title: node.title,
      handle: node.handle,
      price: `${node.priceRange.minVariantPrice.currencyCode} ${node.priceRange.minVariantPrice.amount}`,
      imageUrl: node.images.edges[0]?.node.url || '',
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProductByHandle(handle: string) {
  const client = new shopify.clients.Storefront({
    domain,
    storefrontAccessToken,
  });

  try {
    const { body } = await client.query({
      data: `{
        productByHandle(handle: "${handle}") {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                availableForSale
              }
            }
          }
        }
      }`,
    });

    const product = body.data.productByHandle;
    return {
      id: product.id,
      title: product.title,
      handle: product.handle,
      description: product.description,
      price: `${product.priceRange.minVariantPrice.currencyCode} ${product.priceRange.minVariantPrice.amount}`,
      images: product.images.edges.map((edge: any) => ({
        url: edge.node.url,
        altText: edge.node.altText,
      })),
      variants: product.variants.edges.map((edge: any) => ({
        id: edge.node.id,
        title: edge.node.title,
        price: `${edge.node.price.currencyCode} ${edge.node.price.amount}`,
        availableForSale: edge.node.availableForSale,
      })),
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}