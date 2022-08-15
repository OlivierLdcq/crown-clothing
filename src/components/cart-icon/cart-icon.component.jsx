import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import "./cart-icon.style.scss";

const CartIcon = ({ cartToogleHandler }) => {
  const { numberOfItems } = useContext(CartContext);
  return (
    <div className="cart-icon-container" onClick={cartToogleHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{numberOfItems}</span>
    </div>
  );
};

export default CartIcon;
