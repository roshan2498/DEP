import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  return (
    <div className="navbar">
      <div className="nav">
        <h3 className="logo">EcommerceSite</h3>
      </div>
      <ul className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/orders" className="nav-link">
          My Orders
        </Link>
        <Link to="/cart" className="nav-link">
          Cart
          <MdShoppingCart className="center-align" />({cartItems.length})
        </Link>
      </ul>
    </div>
  );
};

export default Header;
