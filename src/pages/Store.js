import { Filters } from "../components/Filters";
import { useDataContext } from "../context/dataContext";
import { ProductCard } from "../components/ProductCard";

export function Store() {
    const { state } = useDataContext();
    const filteredData = () => {
        let temp = [];

        temp = state.sortBy === "none" ? state.productData : temp;

        return temp;

    }
    return (
        <div style={{ width: "80%", margin: "0 auto" }}>
            <img src="https://images.unsplash.com/photo-1672923491001-3e58a608e418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="store-img"></img>
            <div className="store-page">
                <Filters />
                <div className="products-page">
                    <div className="products-page-header">
                    <h4>Products</h4>
                    <button className="btn-basic btn-hide">Filters</button>
                    </div>
                    <div className="products-container">
                        {filteredData().map((productData) => <ProductCard data={productData} />)}
                    </div>
                </div>
            </div>
        </div>)
}