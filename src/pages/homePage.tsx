import { useEffect, useState } from "react";
import { getAllProductDataFromLS, setAllProductDataToLS, clearAllProductDatainLS } from "../data/productData";
import { defaultHomeBgImg } from "../data/defaultHomeBgImg";
import { Product } from "../components/product";

export function HomePage() {
  const MAX_DISP_PRODUCTS = 8

  const [currentIndex, setCurrentIndex] = useState(0);
  const [refreshLS, setRefreshLS] = useState(false);

  useEffect(() => {
    setAllProductDataToLS()
    return () => {
      clearAllProductDatainLS()
    }
  }, [refreshLS]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? defaultHomeBgImg.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === defaultHomeBgImg.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Image Slider Section */}
      <section className="relative w-full">
        <div className="aspect-[16/9] md:aspect-[16/6] w-full">
          <img
            src={defaultHomeBgImg[currentIndex]}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
          >
            &#x25C0;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
          >
            &#x25B6;
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="flex-1 bg-gradient-to-b from-transparent via-gray-50 to-gray-100 relative z-10 md:-mt-32">
          <div className="container mx-auto pt-4 md:pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
              {getAllProductDataFromLS().slice(0, MAX_DISP_PRODUCTS).map((product) => (
                <Product key={product.id} productData={product} />
              ))}
            </div>
          </div>
      </section>
    </main>
  );
}
