import { getProducts, getProductByHandle } from '@/utils/mockData';
import ProductDetail from './ProductDetail';

// This function generates the static paths for all products at build time
export async function generateStaticParams() {
  const products = await getProducts();
  
  return products.map((product) => ({
    handle: product.handle,
  }));
}

// Server component
export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProductByHandle(params.handle);
  
  return <ProductDetail product={product} />;
}