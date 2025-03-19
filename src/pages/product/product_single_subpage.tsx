import { useParams } from "react-router-dom"
import { getDataFromLS } from "../../data_functions/product_data_fetching"
import { ProductDataType } from "../../types/ProductTypes"
import { Product } from "../../components/product"

export function ProductSingleSubpage(){
    const { productId } = useParams()
    if (!productId) return <h1>productId in URL is undefined</h1>
    const productData= getDataFromLS("allProductData").find((product : ProductDataType) => product.id === parseInt(productId))
    return (
        <div>
            <Product productData={productData} isPreview={false}/>
        </div>
    )
}