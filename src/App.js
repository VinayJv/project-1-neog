import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Mockman from "mockman-js";
import { NavLink } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaPhoenixSquadron } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDataContext } from "./context/dataContext";

function App() {
  const {menuToggle,setMenuToggle} = useDataContext();
  
  const showMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <div className="App">
      <div className="nav-bar" id="nav-bar">
        <div className="logo-container">
          <FaPhoenixSquadron size={50} style={{ color: "#EB4F47" }} />
        </div>
        <header>
          <ul className={menuToggle ? "nav-item-container-active" : "nav-item-container"}>
            <li>
              <NavLink to="/">
                <BiSearchAlt size={30} style={{ color: "#EB4F47" }} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <AiOutlineShopping size={30} style={{ color: "#EB4F47" }} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <AiOutlineShoppingCart size={30} style={{ color: "#EB4F47" }} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <AiOutlineHeart size={30} style={{ color: "#EB4F47" }} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
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
