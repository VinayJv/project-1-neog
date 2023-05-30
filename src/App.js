import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import Mockman from "mockman-js";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaPhoenixSquadron } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDataContext } from "./context/dataContext";
import { IndividualProduct } from "./pages/IndividualProduct";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";
import { Login } from "./pages/Login";
import { Auth } from "./components/Auth";
import { Signup } from "./pages/Signup";
import { Profile } from "./pages/Profile";
import { useState,useEffect } from "react";
import { Triangle } from 'react-loader-spinner';

function App() {
  const { dispatch } = useDataContext();
  const [menuToggle, setMenuToggle] = useState(false);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();

  const showMenu = () => {
    setMenuToggle(!menuToggle);
  };

  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false);
    },3000)
  },[])

  return (
    loader ? <div className="loader-container"><Triangle
      height="80"
      width="80"
      color="#EB4F47"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClassName="loader"
      visible={true}
    /></div> : <div className="App">
      <div className="nav-bar" id="nav-bar">
        <div className="logo-container">
          <FaPhoenixSquadron size={50} style={{ color: "#EB4F47" }} onClick={() => navigate("/")} />
        </div>
        <input type="search" className="search-input" placeholder="Search for an item" onChange={(event) => dispatch({ type: "search", payload: event.target.value })}></input>
        <header>
          <ul className={menuToggle ? "nav-item-container-active" : "nav-item-container"}>
            <li>
              <NavLink to="/store" onClick={() => setMenuToggle(!menuToggle)}>
                <AiOutlineShopping size={30} style={{ color: "#EB4F47" }} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" onClick={() => setMenuToggle(!menuToggle)}>
                <AiOutlineShoppingCart size={30} style={{ color: "#EB4F47" }} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/wishlist" onClick={() => setMenuToggle(!menuToggle)}>
                <AiOutlineHeart size={30} style={{ color: "#EB4F47" }} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" onClick={() => setMenuToggle(!menuToggle)}>
                <BsPerson size={30} style={{ color: "#EB4F47" }} />
              </NavLink>
            </li>
          </ul>
          <div className="hamburger" onClick={showMenu}>
            <GiHamburgerMenu size={30} style={{ color: "#EB4F47" }} />
          </div>
        </header>
      </div>
      <div className="main-page">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/store/:productId" element={<IndividualProduct />}></Route>
          <Route path="/cart" element={<Auth><Cart /></Auth>}></Route>
          <Route path="/wishlist" element={<Auth><Wishlist /></Auth>}></Route>
          <Route path="/profile" element={<Auth><Profile /></Auth>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/mock-api" element={<Mockman />}></Route>
        </Routes>
      </div>
      <footer>
        <div className="footer-image-container">
          <img src="https://images.unsplash.com/photo-1543973277-5020ef836640?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="footer-img"></img>
        </div>
        <div className="footer-brand">
          <h4>RGB Peripherals ©</h4>
          <p>
            Useful Links <br></br>
            Terms and Condition <br></br>
            Privacy Policy <br></br>
            Shipping Policy<br></br>
          </p>
        </div>
        <div className="footer-connect">
          <h4>Help & Support</h4>
          <p>
            Contact Us <br></br>
            About Us <br></br>
            Payment Options<br></br>
            Service Centers
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
