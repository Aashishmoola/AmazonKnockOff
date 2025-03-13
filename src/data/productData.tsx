import { ProductDataType } from "../types/ProductTypes";

export {
  setAllProductDataToLS,
  getAllProductDataFromLS,
  clearAllProductDatainLS,
};
// 1 indexed
let MAX_PRODUCT_DATA: number;

async function fetchAllProductData(): Promise<ProductDataType[]> {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok)
    throw new Error(`fetch request failed with status ${response.status}`);
  const allProductData = await response.json();
  MAX_PRODUCT_DATA = allProductData.length;
  return allProductData;
}

async function setAllProductDataToLS() {
  // Storing product.id: string,
  const allProductData = await fetchAllProductData();
  allProductData.forEach((productData) => {
    localStorage.setItem(String(productData.id), JSON.stringify(productData));
  });
}

function getAllProductDataFromLS(): ProductDataType[] {
  // getItem returns string|null (if not found), so type narrowing is needed as JSON.parse only accepts type string
  return Object.keys(localStorage).map((productId) =>
    JSON.parse(localStorage.getItem(productId) as string)
  );
}
function clearAllProductDatainLS() {
  localStorage.clear();
}
