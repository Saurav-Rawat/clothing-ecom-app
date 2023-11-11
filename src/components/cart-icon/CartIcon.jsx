import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./CartIcon.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIscartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleIscartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
