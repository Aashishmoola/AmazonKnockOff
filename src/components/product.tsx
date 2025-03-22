import { useState } from "react";
import { ProductPropsType } from "../types/ProductTypes";
import { useNavigate } from "react-router-dom";

const MAX_PRODUCT_QTY = 20;

export function Product({ productData }: ProductPropsType) {
  const { title, price, description, image, rating, category } = productData;
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const handleCategoryClick = () => {
    navigate(`/products/${encodeURIComponent(category.toLowerCase())}`);
  };
  const [productQty, setProductQty] = useState(1);
  const capitalizeFirstLetter = (string: string) => {
    return string
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="border rounded-lg p-4 bg-white">
      <img
        src={image}
        alt={`${title} Image`}
        className="w-full h-48 object-contain mb-4 "
      /> 
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <h2 className="text-lg font-semibold text-red-600 mb-2">${price}</h2>
        <div className="flex items-center mb-2">
          <span className="text-yellow-400">★</span>
          <span className="text-sm text-gray-600 ml-1">
            {rating.rate} ({rating.count} reviews)
          </span>
          <button className="text-gray-600 ml-1 hover:text-blue-600" onClick={handleCategoryClick}>
            {capitalizeFirstLetter(category)}
          </button>

          
        </div>
        
        
        <div className = {`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-fit' : 'max-h-0'}`}>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            max={MAX_PRODUCT_QTY}
            min={1}
            step={1}
            value={productQty}
            onChange={(e) => setProductQty(Number(e.target.value))}
            className="w-20 p-2 border rounded"
          />

          <button
            type="button"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded"
          >
            Add to Cart
          </button>
          <button
            type="button"
            className="flex  hover:bg-gray-200"
            onClick={() => setIsExpanded(!isExpanded)}
          >
          {isExpanded ? "▲" : "▼"}
          </button>
          
      </div>
    </div>
  );
}
