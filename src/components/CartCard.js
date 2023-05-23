export function CartCard({data}){
    console.log(data);
    return(
    <div className="cart-card">
        <img className="products-image" alt={data.title} src={data.image}></img>
        <div className="cart-description">
            <p>{data.title}</p>
        </div>
    </div>)
}