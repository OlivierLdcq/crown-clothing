import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <CategoryPreview
            categoriesMap={categoriesMap}
            key={title}
            title={title}
          />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
