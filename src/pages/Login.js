import { NavLink } from "react-router-dom";
import { useDataContext } from "../context/dataContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export function Login() {
    const { dispatch, state:{foundUser} } = useDataContext();
    const [userData, setUserData] = useState({email:"adarshbalika@gmail.com",password:"adarshbalika"})
    const location = useLocation();
    const navigate = useNavigate();


    const loginDataHandler = (event) => {
        console.log(event.target.value);
    };

    const testLoginHandler = async () => {
        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                body: JSON.stringify(userData),
            });
            const { foundUser,encodedToken } = await response.json();
            dispatch({ type: "Login"});
            dispatch({type:"userFound",payload: foundUser});
            localStorage.setItem("encodedToken", encodedToken);
            navigate(location?.state?.from?.pathname);
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="login-page-container">
            <div className="login-card">
                <h4 style={{ marginBottom: "1rem", color: "#EB4F47" }}>Login</h4>
                <div style={{ marginBottom: "1rem", color: "#EB4F47" }}>
                    <label>Email Address</label><br />
                    <input type="input" onChange={loginDataHandler} name="email" placeholder="test@gmail.com" className="loginInput"></input>
                </div>
                <div style={{ marginBottom: "1rem", color: "#EB4F47" }}>
                    <label>Password</label><br />
                    <input type="input" onChange={loginDataHandler} name="password" placeholder="********" className="loginInput"></input>
                </div>
                <button className="login-btn" onClick={testLoginHandler}>Login with Test Credentials</button>
                <NavLink to="/signup">
                    <p style={{ marginTop: "1rem", color: "#EB4F47", fontWeight: "bolder", textDecoration: "underline" }}>Create New Account {">"}</p>
                </NavLink>
            </div>
        </div>)
}