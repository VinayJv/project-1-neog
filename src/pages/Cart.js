import { useDataContext } from "../context/dataContext";
import { CartCard } from "../components/CartCard";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

export function Cart() {
    const { cartData } = useDataContext();
    const [loader, setLoader] = useState(true);

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
    /></div> : <div className="cart-parent">
        <div className="cart-container">
            <h1 style={{ textAlign: "center" }}>Cart</h1>
            {cartData.length === 0 && <h3 style={{textAlign:"center",marginTop:"2rem"}}>Cart Is Empty</h3>}
            {
                cartData.map((product) => <CartCard data={product} key={product._id} />)
            }
        </div>
        <div className="cart-details-checkout-container">
            <h1 style={{ textAlign: "center" }}>Cart Summary</h1>
            <div className="cart-total">
                <span>Total Price: ₹ {<span>{cartData.reduce((acc, { price, qty }) => acc += price * qty, 0)}</span>}</span>
                <div style={{ marginTop: "0.5rem" }}>
                    <button className="btn-basic">Checkout</button>
                </div>
            </div>
        </div>
    </div>);
}