import { ProductDataType } from "../types/ProductTypes";
type dataLSType = "allProductData" | "allProductCategories" | "maxProductNum";
/*  
All data types: 
allproductData: ProductDataType[] 
allProductCategories: string[]
maxProductNum: string
*/
export { setAllDataToLS, getDataFromLS, clearAllDataInLS };

async function setAllDataToLS() {
  function setAllProductCategories(allProductData: ProductDataType[]) {
    const productCategories = new Set<string>();
    allProductData.forEach((productData) =>
      productCategories.add(productData.category)
    );
    localStorage.setItem(
      "allProductCategories",
      JSON.stringify([...productCategories])
    );
  }

  async function fetchAllProductData(): Promise<ProductDataType[]> {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok)
      throw new Error(`fetch request failed with status ${response.status}`);
    const allProductData = await response.json();
    return allProductData;
  }

  const allProductData = await fetchAllProductData();

  localStorage.setItem("maxProductNum", String(allProductData.length));
  setAllProductCategories(allProductData);
  localStorage.setItem("allProductData", JSON.stringify(allProductData));
}

function getDataFromLS(dataName: dataLSType) {
  // Use type generics for returning correct respective data type
  // getItem returns string|null (if not found), so type narrowing is needed as JSON.parse only accepts type string
  const allProductDataJSON = localStorage.getItem(dataName);
  if (!allProductDataJSON)
    throw new Error(`${dataName} is not set in Local Storage`);
  return JSON.parse(allProductDataJSON);
}

function clearAllDataInLS() {
  localStorage.clear();
}
