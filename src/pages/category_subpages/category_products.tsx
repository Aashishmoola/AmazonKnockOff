import { useParams } from "react-router-dom";
import { Product } from "../../components/product";
import { getDataFromLS } from "../../data_functions/productData";
import { ProductDataType } from "../../types/ProductTypes";

export function CategoryProducts() {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category || '');
  const filteredProducts = getDataFromLS("allProductData").filter(
    (product: ProductDataType) => product.category.toLowerCase() === decodedCategory.toLowerCase()
 );
 const capitaliseFirstLetter = (string: string) => {
    return string
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  

  return (
    <section className="flex-1 bg-gradient-to-b from-transparent to-gray-100">
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-6 px-4">
          {capitaliseFirstLetter(category?.split("-").join(" ") || '')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {filteredProducts.map((product: ProductDataType) => (
            <Product key={product.id} productData={product} />
          ))}
        </div>
      </div>
    </section>
  );
}