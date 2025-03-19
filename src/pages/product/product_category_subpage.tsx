import { useParams } from "react-router-dom";
import { getDataFromLS } from "../../data_functions/product_data_fetching";
import { ProductDataType } from "../../types/ProductTypes";
import { Product } from "../../components/product";
import {
  reformatString,
  undoReformatStringForURL,
} from "../../helper_functions";

export function ProductCategorySubpage() {
  let { productSubCategory } = useParams();
  if (!productSubCategory) {
    return <h1>productSubCategory is URL is not defined</h1>;
  } else productSubCategory = undoReformatStringForURL(productSubCategory);

  if (productSubCategory === "all") {
    return (
      <section className="flex-1 bg-gradient-to-b from-transparent to-gray-100">
        <div className="container mx-auto py-8">
          <h2 className="text-2xl font-bold mb-6 px-4">All Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {getDataFromLS("allProductData").map((product: ProductDataType) => (
              <Product key={product.id} productData={product} isPreview={true}/>
            ))}
          </div>
        </div>
      </section>
    );
  } else if (
    getDataFromLS("allProductCategories").includes(productSubCategory)
  ) {
    return (
      <section className="flex-1 bg-gradient-to-b from-transparent to-gray-100">
        <div className="container mx-auto py-8">
          <h2 className="text-2xl font-bold mb-6 px-4">
            {reformatString(productSubCategory, " ")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {getDataFromLS("allProductData")
              .filter(
                (product: ProductDataType) =>
                  product.category === productSubCategory
              )
              .map((product: ProductDataType) => (
                <Product key={product.id} productData={product} isPreview={true}/>
              ))}
          </div>
        </div>
      </section>
    );
  } else return <h1>Product SubCategory Page Not Found!</h1>;
}
