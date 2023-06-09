import { useParams } from "react-router";
import { useDataContext } from "../context/dataContext";
import { ProductCard } from "../components/ProductCard";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

export function IndividualProduct() {
    const [loader, setLoader] = useState(true);
    const { state } = useDataContext();
    const { productId } = useParams();
    const clickedItem = state.productData.find((product) => product._id === productId);
    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 500)
    }, []);
    return (loader ? <div className="loader-container"><Triangle
        height="80"
        width="80"
        color="#EB4F47"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName="loader"
        visible={true}
    /></div> : <div className="individual-product-page">
        <ProductCard data={clickedItem} changeLayout />
    </div>)
}