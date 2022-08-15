import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./cart-item-checkout.style.scss";
const CartItemCheckout = ({ carItem }) => {
  const { cartItems, setCartItems, addItemToCart } = useContext(CartContext);

  const modifyQuantity = (cartItem, e) => {
    if (e.target.value === "+") {
      //1er methode par moi-même :
      //   const newArray = cartItems.map((cartItemElement) => {
      //     if (cartItemElement.id === cartItem.id) {
      //       return { ...cartItemElement, quantity: cartItemElement.quantity + 1 };
      //     } else {
      //       return cartItemElement;
      //     }
      //   });
      //   setCartItems(newArray);
      // mais ce qui équivaut à uttiliser la methode addItemToCart qui incrémente
      // la quantité d'un objet existant
      addItemToCart(carItem);
    } else if (e.target.value === "-") {
      if (cartItem.quantity === 1) {
        deleteCarItem(carItem);
      } else {
        const newArray = cartItems.map((cartItemElement) => {
          return cartItemElement.id === cartItem.id
            ? {
                ...cartItemElement,
                quantity: cartItemElement.quantity - 1,
              }
            : cartItemElement;
        });
        setCartItems(newArray);
      }
    }
  };
  const deleteCarItem = (carItem) => {
    const newArray = cartItems.filter((carItemFromList) => {
      return carItemFromList.id !== carItem.id;
    });
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
