import { React, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.style.js";

import {
  CartDropdownContainer,
  CartItemsContainer,
} from "./cart-dropdown.style.js";

const CartDropdown = () => {
  const { cartItems, setCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  console.log(cartItems);
  const goToCheckOutHandler = () => {
    navigate("checkout");
    setCartOpen(false);
  };
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </CartItemsContainer>
      <Button onClick={goToCheckOutHandler}>CheckOut</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
