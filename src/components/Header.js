import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  // subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-200 shadow-lg z-10">
      <div className="logo-container">
        <img className="w-32 " src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-4 ">
          <li className="px-4 font-semibold">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="px-4 font-semibold">
            <Link to="/about">About Us</Link>
          </li> */}
          
          <li className="px-4 font-semibold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/cart">Cart🛒: {cartItems.length}</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-semibold">
            Active: {onlineStatus ? "🟢" : "🔴"}
          </li>

          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
