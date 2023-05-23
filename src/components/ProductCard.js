import { useNavigate } from "react-router";
import { useDataContext } from "../context/dataContext";

export function ProductCard({data},changeLayout){
    const { state,cartData,setCartData } = useDataContext();
    const navigate = useNavigate();

    const addToCart = async(event) => {
        if(state.isLoggedIn===true){
            const clickedItem = state.productData.find(({_id})=>_id===event.target.value);
            console.log(clickedItem);
            const encodedToken = localStorage.getItem("encodedToken");
            try{
                const response = await fetch("/api/user/cart",{
                    method: "POST",
                    headers: {
                        authorization: encodedToken,
                    },
                    body: JSON.stringify(clickedItem),   
                });
                const data = await response.json();
                console.log(data);
            }
            catch(err){
                console.log(err);
            }
        }
        else{
            console.log("Please Login First");
        }   
    }


    return (<div className="product-card" style={{marginBottom: changeLayout ? "1rem" : ""}}>
        <img src={data.image} alt={data.title} className="products-image"></img>
        <div className="products-description">
            <p style={{fontSize:"1.3rem",marginBottom:"2%",cursor:"pointer"}} onClick={()=>navigate(`/store/${data._id}`)}>{data.title}</p>
            <p style={{color:"gray",marginBottom:"2%"}}>{data.categoryName}</p>
            <p style={{fontSize:"1.2rem"}}>Price: ₹ {data.price}</p>
            <p style={{color:"green"}}>20% discount on all products</p>
            <div className="card-btn-container">
                <button className="btn-basic" onClick={addToCart} value={data._id}>Add To Cart</button>
                <button className="btn-basic">Add To Wishlist</button>
            </div>
        </div>
    </div>)
}