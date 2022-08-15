import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./cart-item-checkout.style.scss";
const CartItemCheckout = ({ carItem }) => {
  const {
    cartItems,
    setCartItems,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
  } = useContext(CartContext);

  return (
    <div className="cartItem-checkout" key={carItem.id}>
      <img src={carItem.imageUrl} />
      <p>{carItem.name}</p>
      <p>
        <span value="-" onClick={() => removeItemFromCart(carItem)}>
          &#x2190;
        </span>
        {`   ${carItem.quantity}   `}
        <span value="+" onClick={() => addItemToCart(carItem)}>
          &#x2192;
        </span>
      </p>
      <p>{`${carItem.quantity * carItem.price} $`}</p>
      <span onClick={() => deleteItemFromCart(carItem)}>X</span>
    </div>
  );
};

export default CartItemCheckout;
