import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../redux/ducks/cart";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const priceTotal = cartItems.reduce((a: any, c: any) => a + c.price, 0);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const createOrder = (e: any) => {
    e.preventDefault();
    // console.log(name, email, address);
    navigate("/orders");
    dispatch(placeOrder());
  };

  const tax = (priceTotal * 0.18).toFixed(2);
  const total = (parseFloat(priceTotal) + parseFloat(tax)).toFixed(2);
  return (
    <div className="checkout">
      <h1 className="summary">Summary</h1>
      <h3>Total Price:${priceTotal}</h3>
      <h3>Tax:${tax}</h3>
      <h2>Total:${total}</h2>

      <form onSubmit={createOrder}>
        <ul className="form-container">
          <li>
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label>Name</label>
            <input
              name="name"
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </li>
          <li>
            <label>Address</label>
            <input
              name="address"
              type="text"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </li>
          <li>
            <button className="btn btn-primary no-margin" type="submit">
              Place Order
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default CheckoutForm;
