import React, { useContext } from "react";
import CartItemCheckout from "../../components/cart-item-checkout/cart-item-checkout.component";
import { CartContext } from "../../context/cart.context";
import "./checkout.style.scss";

const CheckOut = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
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
      {cartItems.length > 0 && (
        <div style={{ width: "70%", margin: "20px auto" }}>
          {" "}
          <hr />{" "}
          <h2
            style={{ width: "150px", marginLeft: "auto" }}
          >{`Total : ${totalPrice} $`}</h2>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
