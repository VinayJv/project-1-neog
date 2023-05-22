import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDataContext } from "../context/dataContext";
import { useLocation,useNavigate } from "react-router-dom";
import { icons } from "react-icons";

export function Login() {
    const [userData,setUserData] = useState({email:"",password:""});
    const { dispatch } = useDataContext();
    const location = useLocation();
    const navigate = useNavigate();
    

    const loginDataHandler = (event) => {
        if(event.target.name==="email"){
            userData.email = event.target.value;
        }
        else{
            userData.password = event.target.value;
        }
    };

    const LoginHandler = async() => {
        setUserData({email:"adarshbalika@gmail.com",password:"adarshbalika"});
        try{
        const response = await fetch("/api/auth/login",{
            method: "POST",
            body: JSON.stringify(userData),
        });
        const { foundUser, encodedToken } = await response.json();
        localStorage.setItem("encodedToken",encodedToken);
        dispatch({type:"Login",payload: encodedToken});
        navigate(location?.state?.from?.pathname);
    }
    catch(err){
        console.log(err);
        }
    };

    return (
        <div className="login-page-container">
            <div className="login-card">
                <h4 style={{marginBottom:"1rem",color:"#EB4F47"}}>Login</h4>
                <div style={{marginBottom:"1rem",color:"#EB4F47"}}>
                    <label>Email Address</label><br />
                    <input type="input" onChange={loginDataHandler} name="email" placeholder="test@gmail.com" className="loginInput"></input>
                </div>
                <div style={{marginBottom:"1rem",color:"#EB4F47"}}>
                    <label>Password</label><br />
                    <input type="input" onChange={loginDataHandler} name="password" placeholder="********" className="loginInput"></input>
                </div>
                <button className="login-btn" onClick={LoginHandler}>Login with Test Credentials</button>
                <NavLink to="/signup">
                    <p style={{marginTop:"1rem",color:"#EB4F47",fontWeight:"bolder", textDecoration:"underline"}}>Create New Account {">"}</p>
                </NavLink>
            </div>
        </div>)
}