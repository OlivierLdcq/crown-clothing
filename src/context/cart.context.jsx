import { createContext, useEffect, useState } from "react";

const createNewArrayOfCartItems = (cartItems, productToAdd) => {
  const existingItem = cartItems.find((item) => {
    if (item.id === productToAdd.id) {
      return item;
    }
  });
  if (existingItem) {
    return cartItems.map((item) => {
      return item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  cartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
  numberOfItems: 0,
  setNumberOfItems: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(0);
  useEffect(() => {
    const sum = cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0);
    setNumberOfItems(sum);
  }, [cartItems]);
  const addItemToCart = (productToAdd) => {
    setCartItems(createNewArrayOfCartItems(cartItems, productToAdd));
  };
  console.log(numberOfItems, cartItems);

  const value = {
    cartOpen,
    setCartOpen,
    cartItems,
    setCartItems,
    addItemToCart,
    numberOfItems,
    setNumberOfItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
