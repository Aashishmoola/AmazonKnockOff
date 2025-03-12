import Product from '../components/product';
import { useProducts } from '../data/products';

export function ExampleProduct() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 p-4">Error: {error}</div>;
  }

  return (
    <section className="flex-1 bg-gradient-to-b from-transparent to-gray-100">
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-6 px-4">All Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {products.map((product) => (
            <Product 
              key={product.id} 
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}