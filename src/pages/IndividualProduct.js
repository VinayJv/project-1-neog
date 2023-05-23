import { useParams } from "react-router";
import { useDataContext } from "../context/dataContext";
import { ProductCard } from "../components/ProductCard";

export function IndividualProduct(){
    const {state,dispatch} = useDataContext();
    const {productId} = useParams();
    const clickedItem = state.productData.find((product)=>product._id===productId);
    return(<div className="individual-product-page">
        <ProductCard data={clickedItem} changeLayout/>
    </div>)
}