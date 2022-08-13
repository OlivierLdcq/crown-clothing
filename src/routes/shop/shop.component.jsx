import React from "react";
import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../context/product.context";
import "./shop.style.scss";
const Shop = () => {
  const { products, setProducts } = useContext(ProductsContext);
  console.log(products);
  return (
    <div className="shop-page">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
