import { useDataContext } from "../context/dataContext";

export function Profile() {
    const { dispatch, state: { foundUser } } = useDataContext();
    return (
        <div className="cart-container">
            <h1 style={{ textAlign: "center" }}>Account</h1>
            <div className="profile-details-container">
                <p style={{ margin: "0.5rem" }}><span style={{ fontWeight: "bolder" }}>Name: </span></p>
                <button className="logout-btn" onClick={() => dispatch({ type: "Logout" })}>Logout</button>
            </div>
        </div>);
}