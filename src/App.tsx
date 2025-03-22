import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { setAllDataToLS, clearAllDataInLS } from "./data_functions/productData";

import { NavBar } from "./pages/nav_bar";
import { LoginPage } from "./pages/login_page";
import { ShoppingCartPage, DisplaySubPage } from "./pages/shopping_cart_page";
import { HomePage } from "./pages/home_page";
import { ErrorPage } from "./pages/backup_error_page";
import { AllProducts } from "./pages/category_subpages/all_products";
import { CategoryProducts } from "./pages/category_subpages/category_products";

export function App() {
  const [isLoading, setIsLoading] = useState(true)

  async function initializeAllProductData() {
    setIsLoading(true)
    try {
      console.log("Initializing data from Fake Store API to Local Storage...");
      await setAllDataToLS();
      console.log("Data initialized successfully.");
    } catch (error) {
      console.error("Failed to intialize data:", error);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    initializeAllProductData();
    return () => {
      console.log("Clearing Local Storage");
      clearAllDataInLS();
    };
  }, []);

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <NavBar />
      <Routes>
        {/* Default route */}
        <Route index element={<HomePage />} />
        <Route path="products">
          <Route path="all" element={<AllProducts />} />
          <Route path=":category" element={<CategoryProducts/>} />
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
