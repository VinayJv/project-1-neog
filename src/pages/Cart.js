import { useDataContext } from "../context/dataContext";
import { CartCard } from "../components/CartCard";
import { useState } from "react";
import { useEffect } from "react";

export function Cart() {
    const encodedToken = localStorage.getItem("encodedToken");
    const [cartData, setCartData] = useState([]);
    const getCartData = async () => {
        const response = await fetch("/api/user/cart", {
            method: "GET",
            headers: {
                authorization: encodedToken
            }
        });
        const { cart } = await response.json();
        setCartData(cart);
    };

    useEffect(() => {
        getCartData();
    }, [])

    return (
        <div className="cart-parent">
            <div className="cart-container">
                <h1 style={{ textAlign: "center" }}>Cart</h1>
                {
                    cartData.map((product) => <CartCard data={product} key={product._id} />)
                }
            </div>
            <div className="cart-details-checkout-container">

            </div>
        </div>)
}