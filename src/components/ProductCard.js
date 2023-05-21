import { useNavigate } from "react-router";

export function ProductCard({data},changeLayout){
    const navigate = useNavigate();
    return (<div className="product-card" style={{marginBottom: changeLayout ? "1rem" : ""}}>
        <img src={data.image} alt={data.title} className="products-image"></img>
        <div className="products-description">
            <p style={{fontSize:"1.3rem",marginBottom:"2%",cursor:"pointer"}} onClick={()=>navigate(`/store/${data.id}`)}>{data.title}</p>
            <p style={{color:"gray",marginBottom:"2%"}}>{data.categoryName}</p>
            <p style={{fontSize:"1.2rem"}}>Price: ₹ {data.price}</p>
            <p style={{color:"green"}}>20% discount on all products</p>
            <div className="card-btn-container">
                <button className="btn-basic">Add To Cart</button>
                <button className="btn-basic">Add To Wishlist</button>
            </div>
        </div>
    </div>)
}