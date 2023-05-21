import { NavLink } from "react-router-dom";

export function Signup() {
    return (
        <div className="login-page-container">
            <div className="login-card">
                <h4 style={{marginBottom:"1rem",color:"#EB4F47"}}>Sign Up</h4>
                <div style={{marginBottom:"1rem",color:"#EB4F47"}}>
                    <label>Email Address</label><br />
                    <input type="input" placeholder="test@gmail.com" className="loginInput"></input>
                </div>
                <div style={{marginBottom:"1rem",color:"#EB4F47"}}>
                    <label>Password</label><br />
                    <input type="input" placeholder="*********" className="loginInput"></input>
                </div>
                <button className="login-btn">Create Account</button>
            </div>
        </div>)
}