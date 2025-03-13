import { Product } from "../components/product";
import { getAllProductDataFromLS } from "../data/productData";

export function ExampleProduct() {
  return (
    <section className="flex-1 bg-gradient-to-b from-transparent to-gray-100">
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-6 px-4">All Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {getAllProductDataFromLS().map((product) => (
            <Product key={product.id} productData={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
