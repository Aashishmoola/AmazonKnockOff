import React from "react";

function Header() {
  return (
    <div>
      <header className="flex items-center bg-[#131921] p-2 sticky top-0 z-50 w-full">
        <div className="mr-5">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
            className="w-24 object-contain"
          />
        </div>
        <div className="flex items-center bg-white rounded-md w-3/5">
          <input type="text" className="h-8 p-2 w-full border-none" />
          <button className="p-2 bg-[#febd69] border-none cursor-pointer rounded-md">Search</button>
        </div>
        <div className="flex justify-evenly text-white flex-grow">
          <div className="flex flex-col ml-2">
            <span className="text-xs">Hello, Sign in</span>
            <span className="text-sm font-bold">Account & Lists</span>
          </div>
          <div className="flex flex-col ml-2">
            <span className="text-xs">Returns</span>
            <span className="text-sm font-bold">& Orders</span>
          </div>
          <div className="flex flex-col ml-2">
            <span className="text-xs">Your</span>
            <span className="text-sm font-bold">Cart</span>
          </div>
        </div>
      </header>
      <nav className="flex items-center bg-[#232f3e] text-white text-sm w-full ">
        <div className="flex w-full justify-between p-2 px-4 pl-6">
          <p className="link">All</p>
          <p className="link">Fresh and Fast</p>
          <p className="link">Best Sellers</p>
          <p className="link">Today's Deals</p>
          <p className="link hidden lg:inline-flex">Electronics</p>
          <p className="link hidden lg:inline-flex">Food & Grocery</p>
          <p className="link hidden lg:inline-flex">Prime</p>
          <p className="link hidden lg:inline-flex">Buy Again</p>
          <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
          <p className="link hidden lg:inline-flex">Health & Personal Care</p>
        </div>
      </nav>
    </div>
  );
}

export default Header;