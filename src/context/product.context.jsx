import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import PRODUCTS_DATA from "../shop-data.json";
export const ProductsContext = createContext({
  products: [],
  setProducts: () => {},
});

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  useEffect(() => {
    setProducts(PRODUCTS_DATA);
  }, []);
  // console.log(products);
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
