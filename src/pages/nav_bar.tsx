import { Link } from "react-router-dom";
import { getDataFromLS } from "../data_functions/productData";
import {reformatString} from "../helper_functions"

export function NavBar() {
  return (
    <div>
      <header className="flex items-center bg-[#131921] p-2 sticky top-0 z-50 w-full">
        <Link to="/">
          <div className="mr-5">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Logo"
              className="w-24 object-contain"
            />
          </div>
        </Link>
        <div className="flex items-center bg-white rounded-md w-3/5">
          <input type="text" className="h-8 p-2 w-full border-none" />
          <button className="p-2 bg-[#febd69] border-none cursor-pointer rounded-md">
            Search
          </button>
        </div>
        <div className="flex justify-evenly text-white flex-grow">
          <Link to="/loginPage" className="flex flex-col ml-2">
            <span className="text-xs">Hello, Sign in</span>
            <span className="text-sm font-bold">Account & Lists</span>
          </Link>
          <div className="flex flex-col ml-2">
            <span className="text-xs">Returns</span>
            <span className="text-sm font-bold">& Orders</span>
          </div>
          <Link to="/shoppingCartPage" className="flex flex-col ml-2">
            <span className="text-xs">Your</span>
            <span className="text-sm font-bold">Cart</span>
          </Link>
        </div>
      </header>
      <nav className="flex items-center bg-[#232f3e] text-white text-sm w-full ">
        <button className="flex w-full justify-around p-2 px-4 pl-6">
          <Link to="/products/all">
            <p className="link hover:text-blue-400">All</p>
          </Link>
          {getDataFromLS("allProductCategories").map(
            (productCategory: string) =>(
              <Link 
              to={`/products/${encodeURIComponent(productCategory.toLowerCase())}`} 
              key={productCategory}
              className="link hover:text-blue-400"
              >
              <p>{reformatString(productCategory)}</p>
            </Link>
            )
          )}
        </button>
      </nav>
    </div>
  );
}


