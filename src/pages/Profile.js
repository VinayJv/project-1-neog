import { useDataContext } from "../context/dataContext";

export function Profile() {
    const { dispatch, state: { foundUser } } = useDataContext();
    return (
        <div className="profile-container">
            <div className="profile-details-container">
            <h1 style={{ textAlign: "center" }}>User Profile</h1>
                <p style={{ margin: "0.5rem" }}><span style={{ fontWeight: "bolder" }}>Name: </span>{foundUser.firstName} {foundUser.lastName}</p>
                <p style={{ margin: "0.5rem" }}><span style={{ fontWeight: "bolder" }}>Email: </span>{foundUser.email}</p>
                <p style={{ margin: "0.5rem" }}><span style={{ fontWeight: "bolder" }}>Address: </span>{foundUser.address[0].city},{ foundUser.address[0].state}</p>
                <button className="logout-btn" onClick={() => dispatch({ type: "Logout" })}>Logout</button>
            </div>
        </div>);
}