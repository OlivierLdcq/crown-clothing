import React, { Fragment } from "react";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.style.scss";
import { useNavigate } from "react-router-dom";
const CategoryPreview = ({ categoriesMap, title }) => {
  const navigate = useNavigate();
  return (
    <Fragment key={title}>
      <h2 className="shop-page-title" style={{ cursor: "pointer" }}>
        <span
          onClick={() => {
            navigate(title);
          }}
        >
          {title}
        </span>
      </h2>
      <div className="shop-page">
        {categoriesMap[title].map((product, index) => {
          return index <= 3 ? (
            <ProductCard key={product.id} product={product} />
          ) : null;
        })}
      </div>
    </Fragment>
  );
};

export default CategoryPreview;
