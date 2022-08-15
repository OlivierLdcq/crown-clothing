import { React, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.style.scss";

const CartDropdown = () => {
  const { cartItems, setCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  console.log(cartItems);
  const goToCheckOutHandler = () => {
    navigate("checkout");
    setCartOpen(false);
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button onClick={goToCheckOutHandler}>CheckOut</Button>
    </div>
  );
};

export default CartDropdown;
