import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  setAllDataToLS,
  clearAllDataInLS,
} from "./data_functions/product_data_fetching.tsx";

import { NavBar } from "./pages/nav_bar";
import { LoginPage } from "./pages/login_page";
import { ShoppingCartPage, DisplaySubPage } from "./pages/shopping_cart_page";
import { HomePage } from "./pages/home_page";
import { ErrorPage } from "./pages/backup_error_page";
import { ProductPage } from "./pages/product/product_page.tsx";
import { ProductCategorySubpage } from "./pages/product/product_category_subpage.tsx";
import { ProductSingleSubpage } from "./pages/product/product_single_subpage.tsx";

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  async function initializeAllProductData() {
    setIsLoading(true);
    try {
      console.log("Initializing data from Fake Store API to Local Storage...");
      await setAllDataToLS();
      console.log("Data initialized successfully.");
    } catch (error) {
      console.error("Failed to intialize data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function cleanUpProductData() {
    console.log("Clearing Local Storage");
    clearAllDataInLS();
  }

  useEffect(() => {
    initializeAllProductData();
    return cleanUpProductData;
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <NavBar />
      <Routes>
        {/* Default route */}
        <Route index element={<HomePage />} />
        <Route path="/products/" element={<ProductPage />}>
          <Route path=":productSubCategory" element={<ProductCategorySubpage />} />
        </Route>
        <Route path="/product/" element={<ProductPage/>}>
          <Route path=":productId" element={<ProductSingleSubpage/>}/>
        </Route>
        <Route path="/loginPage" element={<LoginPage />} />
        {/* Just for testing dynamic routing (dynamically changing components based on path) */}
        <Route path="/shoppingCartPage" element={<ShoppingCartPage />}>
          <Route path=":shoppingCartSubPage" element={<DisplaySubPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

/*
Reasons for using products/productSubcategory and product/productId instead of product/productSubcategory/productId
1. productId is not nested within productSubCategory in LS, both are seperate props in product obj, product is unique for all products
2. Nesting is generally used for representing user configuration and nesting (not completely replacing components completely)
3. While unable to pass info through useOutletContext, generally not useful as server side DB query should be optimised using hashmaps and thus will not have a significant delay
  when data fetching (data fetching might anyways be needed for additional methods needed to be used for single product view instead of multiple product view)
*/
