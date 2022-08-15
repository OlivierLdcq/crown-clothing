import React, { useContext } from "react";
import CartItemCheckout from "../../components/cart-item-checkout/cart-item-checkout.component";
import { CartContext } from "../../context/cart.context";
import "./checkout.style.scss";

const CheckOut = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="checkout-page-container">
      <h2>Checkout</h2>
      <div className="description-line-container">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      {cartItems.map((cartItem) => {
        return <CartItemCheckout carItem={cartItem} key={cartItem.id} />;
      })}
    </div>
  );
};

export default CheckOut;
