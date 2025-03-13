import { Routes, Route } from "react-router-dom";

import { NavBar } from "./pages/navBar";
import { LoginPage } from "./pages/loginPage";
import { ShoppingCartPage, DisplaySubPage } from "./pages/shoppingCartPage";
import { HomePage } from "./pages/homePage";
import { ErrorPage } from "./pages/errorPage";
import { ExampleProduct } from "./pages/exampleProductPage";

export function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Default route */}
        <Route index element={<HomePage />} />
        <Route path="products">
          <Route path="all" element={<ExampleProduct />} />
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
