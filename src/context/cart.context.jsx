import { createContext, useEffect, useState } from "react";

const incrementOrAddProduct = (cartItems, productToAdd) => {
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
  modifyQuantity: () => {},
  deleteCartItem: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  totalPrice: 0,
  setTotalPrice: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const sum = cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0);
    setNumberOfItems(sum);
    setTotalPrice(totalPriceSum(cartItems));
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(incrementOrAddProduct(cartItems, productToAdd));
  };
  console.log(numberOfItems, cartItems);

  const deleteCartItem = (cartItems, productToRemove) => {
    return cartItems.filter((carItemFromList) => {
      return carItemFromList.id !== productToRemove.id;
    });
  };

  const decrementOrRemoveProduct = (cartItems, productToRemove) => {
    if (productToRemove.quantity === 1) {
      return deleteCartItem(cartItems, productToRemove);
    }
    return cartItems.map((cartItemElement) => {
      return cartItemElement.id === productToRemove.id
        ? {
            ...cartItemElement,
            quantity: cartItemElement.quantity - 1,
          }
        : cartItemElement;
    });
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(decrementOrRemoveProduct(cartItems, productToRemove));
  };
  const deleteItemFromCart = (productToRemove) => {
    setCartItems(deleteCartItem(cartItems, productToRemove));
  };

  const totalPriceSum = (cartItems) => {
    return cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity * cartItem.price;
    }, 0);
  };

  const value = {
    cartOpen,
    setCartOpen,
    cartItems,
    setCartItems,
    addItemToCart,
    numberOfItems,
    setNumberOfItems,
    deleteCartItem,
    removeItemFromCart,
    deleteItemFromCart,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
