import { useState } from "react";
import { ProductPropsType } from "../types/ProductTypes";
import { limitStringMaxLen } from "../helper_functions";
import { useNavigate } from "react-router-dom";

const MAX_PRODUCT_QTY = 10;
const MAX_CHARS_PRODUCT_DESC_MINIMISED = 100;

export function Product({ productData, isPreview }: ProductPropsType) {
  const { title, price, description, image, rating, id } = productData;
  const [productQty, setProductQty] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <button
        onClick={
          isPreview
            ? () => {
                navigate(`/product/${id}`);
              }
            : () => {}
        }
      >
        <img
          src={image}
          alt={`${title} Image`}
          className="w-full h-48 object-contain mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <h2 className="text-lg font-semibold text-red-600 mb-2">${price}</h2>
        <div className="flex items-center mb-2">
          <span className="text-yellow-400">★</span>
          <span className="text-sm text-gray-600 ml-1">
            {rating.rate} ({rating.count} reviews)
          </span>
        </div>
        <h3 className="text-gray-600 mb-4">
          {isPreview
            ? limitStringMaxLen(description, MAX_CHARS_PRODUCT_DESC_MINIMISED) +
              "..."
            : description}
        </h3>
      </button>
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
      </div>
    </div>
  );
}
