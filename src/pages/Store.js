import { Filters } from "../components/Filters";
import { useDataContext } from "../context/dataContext";
import { ProductCard } from "../components/ProductCard";
import { useEffect,useState } from "react";
import { Triangle } from "react-loader-spinner";

export function Store() {
    const { state,menuToggle, setMenuToggle } = useDataContext();
    const [loader,setLoader] = useState(true);

    const filteredData = () => {
        let temp = [];

        const sortData = (sortBy) => {
            if (sortBy === "LowToHigh") {
                return temp.slice().sort((a, b) => a.price - b.price)
            }
            else if(sortBy ==="HighToLow"){
                return temp.slice().sort((a, b) => b.price - a.price)
            }
        };

        const filterByCategory = (category) => {
            return temp.filter((product)=>category.includes(product.categoryName));
        }

        temp = state.searchFilter === "" ? state.productData : state.productData.filter((product)=>product.title.toUpperCase().includes(state.searchFilter.toUpperCase()));
        temp = state.sortBy === "" ? temp : sortData(state.sortBy);
        temp = state.range === 0 ? temp : temp.filter((product)=> product.price < state.range);
        temp = state.category.length === 0 ? temp : filterByCategory(state.category);
        temp = state.rating === 0 ? temp : temp.filter((product)=>product.rating>=state.rating);

        return temp;
    }

    useEffect(()=>{
        setTimeout(()=>{
          setLoader(false);
        },1000)
      },[]);

    return (
        loader ? <div className="loader-container"><Triangle
      height="80"
      width="80"
      color="#EB4F47"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClassName="loader"
      visible={true}
    /></div> : <div style={{ width: "80%", margin: "0 auto" }}>
    <img src="https://images.unsplash.com/photo-1672923491001-3e58a608e418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="store-img"></img>
    <div className="store-page">
        <Filters />
        <div className="products-page">
            <div className="products-page-header">
                <h1>Products ({filteredData().length})</h1>
                <button className="btn-basic btn-hide" onClick={()=>setMenuToggle(!menuToggle)}>Filters</button>
            </div>
            <div className="products-container">
                {filteredData().map((productData) => <ProductCard data={productData} key={productData._id} />)}
            </div>
        </div>
    </div>
</div>
    );
}