import React from "react";
import Button from "../button/button.component";
import "./product-card.style.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, id } = product;

  const { cartItems, addItemToCart } = useContext(CartContext);
  const addItemToCartHelperFn = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />{" "}
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType="inverted"
        value={name}
        onClick={addItemToCartHelperFn}
      >
        ADD TO CART
      </Button>
    </div>
  );
};

export default ProductCard;
