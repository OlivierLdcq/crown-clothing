import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./cart-item-checkout.style.scss";
const CartItemCheckout = ({ carItem }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const modifyQuantity = (cartItem, e) => {
    console.log(e.target.value);
    if (e.target.value === "+") {
      const newArray = cartItems.map((cartItemElement) => {
        if (cartItemElement.id === cartItem.id) {
          return { ...cartItemElement, quantity: cartItemElement.quantity + 1 };
        } else {
          return cartItemElement;
        }
      });
      setCartItems(newArray);
    } else if (e.target.value === "-") {
      const newArray = cartItems.map((cartItemElement) => {
        if (
          cartItemElement.id === cartItem.id &&
          cartItemElement.quantity !== 1
        ) {
          return { ...cartItemElement, quantity: cartItemElement.quantity - 1 };
        } else if (
          cartItemElement.id === cartItem.id &&
          cartItemElement.quantity === 1
        ) {
          return cartItemElement;
        } else {
          return cartItemElement;
        }
      });
      setCartItems(newArray);
    }
  };
  const deleteCarItem = (carItem) => {
    const newArray = cartItems.filter((carItemFromList) => {
      return carItemFromList.id === carItem.id ? false : true;
    });
    console.log(newArray);
    setCartItems(newArray);
  };
  return (
    <div className="cartItem-checkout" key={carItem.id}>
      <img src={carItem.imageUrl} />
      <p>{carItem.name}</p>
      <p>
        <button value="-" onClick={(e) => modifyQuantity(carItem, e)}>
          -
        </button>{" "}
        {carItem.quantity}{" "}
        <button value="+" onClick={(e) => modifyQuantity(carItem, e)}>
          {" "}
          +
        </button>
      </p>
      <p>{carItem.quantity * carItem.price}</p>
      <button onClick={() => deleteCarItem(carItem)}>X</button>
    </div>
  );
};

export default CartItemCheckout;
