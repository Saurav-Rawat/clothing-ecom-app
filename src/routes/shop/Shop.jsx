import { Route, Routes } from "react-router-dom";
import { CategoriesPreview } from "../categories-preview/CategoriesPreview";
import { Category } from "../category/Category";
import "./Shop.styles.scss";

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      {/* :category is route parameter that we can access inside component passed
      in element */}
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};
