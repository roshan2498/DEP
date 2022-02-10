import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { removeItemFromCart } from "../redux/ducks/cart";
import CheckoutForm from "./CheckoutForm";

export const Cart = () => {
  const [checkout, setCheckout] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.cartItems);

  const handleRemove = (id: number) => {
    dispatch(removeItemFromCart(id));
  };

  const total = cartItems.reduce((a: any, c: any) => a + c.price, 0);
  return (
    <>
      <div className="main container cart-container">
        {cartItems.map((cartItem: IBook) => {
          return (
            <div className="cart-item">
              <div className="row">
                <img src={cartItem.thumbnailUrl} alt={cartItem.title} />
              </div>
              <div className="row">
                <h3>{cartItem.title}</h3>
                <em>ISBN:{cartItem.isbn}</em>
                <h4 className="price">${cartItem.price}</h4>
                <button
                  className="btn btn-danger remove"
                  onClick={() => handleRemove(cartItem.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
        {total > 0 && (
          <>
            <h3>Total : ${total}</h3>
            <button
              className="btn btn-primary checkout"
              onClick={() => setCheckout(true)}
            >
              Checkout
            </button>
            <div className="aside">{checkout && <CheckoutForm />}</div>
          </>
        )}
      </div>
    </>
  );
};
