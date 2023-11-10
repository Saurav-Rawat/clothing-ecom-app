import { ProductsContext } from "../../context/ProductsContext";
import { useContext } from "react";
import { ProductCard } from "../../components/product-card/ProductCard";
import "./Shop.styles.scss";

export const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};
