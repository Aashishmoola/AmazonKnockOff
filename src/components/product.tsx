import { useState } from "react";
type ProductPropsType = {
  productName: string;
  productId: number;
  salePrice: number;
  discountedPrice?: number;
  ratings?: number;
  totalReviews?: number;
  productDesc?: string;
  productImgPath?: string;
};
const MAX_PRODUCT_QTY = 10;
export default function Product(props: ProductPropsType) {
  const {
    productName,
    // productId,
    productDesc = "",
    productImgPath,
    salePrice,
    // discountedPrice = salePrice,
    // ratings = 0,
    // totalReviews = 0,
  } = props;

  const [productQty, setProductQty] = useState(0);

  return (
    <div>
      <h2>{productName}</h2>
      <h2>{`$${salePrice}`}</h2>
      <img src={productImgPath} alt={`${productName} Image`}></img>
      <h3>{productDesc}</h3>
      <input
        type="number"
        max={MAX_PRODUCT_QTY}
        min={1}
        step={1}
        value={productQty}
        onChange={(e) => setProductQty(Number(e.target.value))}
      />
      <button type="button">Add to Cart</button>
    </div>
  );
}
