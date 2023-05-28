import { useDataContext } from "../context/dataContext";
import { CartCard } from "../components/CartCard";

export function Cart() {
    const { cartData } = useDataContext();

    return (
        <div className="cart-parent">
            <div className="cart-container">
                <h1 style={{ textAlign: "center" }}>Cart</h1>
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
        </div>)
}