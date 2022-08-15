import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.style.scss";

const CartDropdown = () => {
  const { cartItems, setCartOpen } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button>
        <Link
          to="checkout"
          onClick={() => {
            setCartOpen(false);
          }}
        >
          CheckOut
        </Link>
      </Button>
    </div>
  );
};

export default CartDropdown;
