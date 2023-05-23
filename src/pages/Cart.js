import { useDataContext } from "../context/dataContext";
import { CartCard } from "../components/CartCard";

export function Cart() {
    const { cartData } = useDataContext();
    return (
        <div className="cart-container">
            <h1>Cart</h1>
            <div className="cart-item-container">

            </div>
        </div>)
}