import "./CategoriesPreview.styles.scss";

import { CategoriesContext } from "../../context/CategoriesContext";
import { useContext } from "react";
import { CategoryPreview } from "../../components/category-preview/CategoryPreview";

export const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview title={title} products={products} key={title} />
        );
      })}
    </div>
  );
};
