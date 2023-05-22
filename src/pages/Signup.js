export function Signup() {
    let userData = {name:"",email:"",password:""};

    const signupDataHandler = (event) => {
        if(event.target.name === "name"){
            userData.name = event.target.value;
        }
        else if(event.target.name === "email"){
            userData.email = event.target.value;
        } 
        else{
            userData.password = event.target.value;
        }
    };

    const createAccount = async() => {
        console.log(userData);
    };

    return (
        <div className="login-page-container">
            <div className="login-card">
                <h4 style={{marginBottom:"1rem",color:"#EB4F47"}}>Sign Up</h4>
                <div style={{marginBottom:"1rem",color:"#EB4F47"}}>
                    <label>Name</label><br />
                    <input type="input" name="name" placeholder="John Doe" className="loginInput" onChange={signupDataHandler}></input>
                </div>
                <div style={{marginBottom:"1rem",color:"#EB4F47"}}>
                    <label>Email Address</label><br />
                    <input type="input" name="email" placeholder="test@gmail.com" className="loginInput" onChange={signupDataHandler}></input>
                </div>
                <div style={{marginBottom:"1rem",color:"#EB4F47"}}>
                    <label>Password</label><br />
                    <input type="input" name="password" placeholder="*********" className="loginInput" onChange={signupDataHandler}></input>
                </div>
                <button className="login-btn" onClick={createAccount}>Create Account</button>
            </div>
        </div>)
}