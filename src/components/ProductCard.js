export function ProductCard({data}){
    return (<div className="product-card">
        <img src={data.image} alt={data.title} className="products-image"></img>
        <div className="products-description">
            <p style={{fontSize:"1.3rem",marginBottom:"2%"}}>{data.title}</p>
            <p style={{color:"gray",marginBottom:"2%"}}>{data.categoryName}</p>
            <p style={{fontSize:"1.2rem"}}>Price: ₹ {data.price}</p>
            <p style={{color:"green"}}>20% discount on all products</p>
            <div className="card-btn-container">
                <button className="btn-basic">Add To Cart</button>
                <button className="btn-basic card-btn">Add To Wishlist</button>
            </div>
        </div>
    </div>)
}